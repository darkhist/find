import json
import requests

import example_data as ex

# This is for testing purposes. Example json from GitHub job API
def example_json():

    # sending get request and saving the response as response object
    URL = "https://jobs.github.com/positions.json?description=python&location=new+york"
    r = requests.get(url = URL)
    data = r.json()
    #print(data)
    # extracting data in json format
    #data = r.json()
    return data

if __name__ == "__main__":
    x = example_json()
    print(x)
