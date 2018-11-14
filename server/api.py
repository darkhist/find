from flask import Flask
import json
import requests

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

    # I dont know if we want to sort this here some more or let the frontend handle it
    return json.dumps(data)


# Untested
@app.route('/exampledata')
def example_data():
    return ex.get_exampledata()


@app.route('/searchJobs/<params>', methods=['GET', 'POST'])
def search_jobs(params):
    """
    Takes in a json. Example:
    {
    keywords": "Java"
    "location": "New York"
    "email": "cgoode@gmail.com"
    "full-time":true
    }
    """

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
    return json.dumps(data)


# run the Flask app (which will launch a local webserver)
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)
