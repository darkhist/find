from flask import Flask, request, abort, jsonify
from flask_cors import CORS
import json
import requests
import sys
import re

app = Flask(__name__)
CORS(app)

'''
Args: JSON Object
Example:
{
"keywords": "Java, AWS",
"location": "New York",
"full-time": "true"
}
'''


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

    # Parse the URL from the how to apply section
    for job in data:
        job.update({'how_to_apply': re.findall(r'<a href=\"(.*?)\"', job['how_to_apply'])[0]})
        # For Debugging
        # print(job['how_to_apply'], file=sys.stderr)

    # Parse the description niceley for the frontend
    """ TODO """

    # Return response to client
    return json.dumps(data)


@app.route('/test', methods=['POST', 'GET'])
def test():
    return "<p> Connected! </p>"

# run the Flask app (which will launch a local webserver)
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)
