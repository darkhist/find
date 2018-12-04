import json
import requests
import os
from os.path import join, dirname
from dotenv import load_dotenv
from bs4 import BeautifulSoup
from flask import Flask, request, abort, jsonify
from flask_cors import CORS

# Create .env file path.
dotenv_path = join(dirname(__file__), '.env')

# Load file from the path.
load_dotenv(dotenv_path)

app = Flask(__name__)
CORS(app)


def cleanHowToApply(html):
    soup = BeautifulSoup(html, features="html.parser")
    for link in soup.find_all('a', href=True):
        return link['href']


@app.route('/', methods=['POST', 'GET'])
def test():
    return "Welcome to the API 🎉"


@app.route('/search', methods=['POST'])
def search_jobs():
    if not request.json:
        abort(400)

    # Base
    URL = "https://jobs.github.com/positions.json?"

    req = request.get_json()

    keywords = req['keywords']
    location = req['location']

    # Replace spaces with '+' and add url syntax
    if (', ' in keywords):
        location.replace(', ', '+')
    description = "description=" + keywords

    if (' ' in location):
        location.replace(' ', '+')
    location = "&location=" + location

    # Build URL
    URL += description + location

    # Send GET request to Github Jobs API
    # Save response as response object
    data = requests.get(url=URL).json()

    emailBody = ""
    count = 1

    # Cleanup
    for job in data:

        emailBody += ("<br><br><hr><hr><hr><br><br><h1>Result #" +
                      str(count) + "</h1>" + job['description'])
        count += 1

        job.update({'how_to_apply': cleanHowToApply(job['how_to_apply'])})

    # If email is provided, send email and print status to console
    if (req['email'] != ""):
        print("Email sent to " + req['email'] + ": " +
              email(req['email'], emailBody))

    # Grabs data for pie chart
    keywordFreq = parseData(data, keywords)
    # print(type(keywordFreq))

    # Return response to client
    container = [data, keywordFreq]
    return json.dumps(container)


# Takes our data object and our keyword string
# Returns object containing keyword frequency

# Input:    keyords: "java, aws", location: "New York"
# Returns:  [{'angle': 3, 'label': 'java'}, {'angle': 1, 'label': 'aws'}]
def parseData(data, keywords):
    keywords = keywords.split(', ')
    keywordCount = {}

    # Initialize dictionary
    for key in keywords:
        keywordCount[key] = 0

    # Count keyword frequency
    for job in data:
        for key in keywordCount:
            # Splitting on whitespace doesn't work because a lot of keywords are next to HTML tags
            # So we split on the word itself and take the length of the array minus one
            keywordCount[key] += len(
                job['description'].upper().split(key.upper())) - 1

    # Create object for react-vis input
    obj = []
    for key in keywordCount:
        obj.append({"angle": keywordCount[key], "label": key})

    return obj


# Post request example:
# {
#     "email": "trump@cheeto.com",
#     "body": "<h1> MixMax takes html here. This will be useful. </h1>"
# }
def email(email, body):

    reqHeaders = {
        'content-type': 'application/json',
        'X-API-Token': os.getenv('MIXMAX_API_TOKEN')
    }

    payload = json.dumps({
        "message": {
            "to": email,
            "from": 'Find@Job.com',
            "subject": "JobFind Results!",
            "html": body
        }
    })

    r = requests.post("https://api.mixmax.com/v1/send/",
                      data=payload, headers=reqHeaders)

    return str(r.status_code) + " " + r.reason


# run the Flask app (which will launch a local webserver)
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)
