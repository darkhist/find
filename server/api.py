from bs4 import BeautifulSoup
from flask import Flask, request, abort, jsonify
from flask_cors import CORS
import json
import requests

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

    # Cleanup
    for job in data:
        job.update({'how_to_apply': cleanHowToApply(job['how_to_apply'])})

    # Return response to client
    return json.dumps(data)


# run the Flask app (which will launch a local webserver)
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)
