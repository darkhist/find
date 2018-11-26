from flask import Flask, request
import json
import requests
import sys

import example_data as ex

app = Flask(__name__)


# This is for testing purposes. Example json from GitHub job API
# Description = Python, Location = New York
@app.route('/test')
def example_json():
    # sending get request and saving the response as response object
    URL = "https://jobs.github.com/positions.json?description=python&location=new+york"
    r = requests.get(url=URL)
    data = r.json()

    ret = {}

    for job in data:
        ret[job["id"]] = {"title": job["title"], "location": job["location"], "company": job["company"]}

    # I dont know if we want to sort this here some more or let the frontend handle it
    return json.dumps(ret)


# Just returns data from example.data (Based off the GitHub Jobs Example)
@app.route('/exampledata')
def example_data():
    return ex.get_exampledata()


# This route has yet to be completed
@app.route('/searchJobs', methods=['GET', 'POST'])
def search_jobs():
    """
    Takes in a json. Example:
    {
    keywords": "Java"
    "location": "New York"
    "email": "cgoode@gmail.com"
    "full-time":true
    }
    """
    ID = request.args.get('id')
    print(ID, file=sys.stderr)

    # TODO: Build a URL to make a request with GitHub Jobs
    URL = "https://jobs.github.com/positions.json?"  # Base

    # For each parameter in the json, check if it exists, if so add to URL
    #       If there is spaces in the parameter, ie: "New York", replace spaces to make it "New+York"
    #       Add to URL in the form "?<parm name>=<parm>", if there is more than one, put "&" between them
    #                         ie: "description=python&location=new+york"

    # Sending get request and saving the response as response object
    r = requests.get(url=URL)
    data = r.json()

    # I dont know if we want to sort this here some more or let the frontend handle it
    return "<p> Hi <p>"


# run the Flask app (which will launch a local webserver)
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)
