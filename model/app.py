
import json
import requests

url = "http://127.0.0.1:8000/predict"

input_data = {
    "N": 90,
    "P": 42,
    "K": 43,
    "temperature": 20.879744,
    "humidity": 82.002744,
    "ph": 6.502985,
    "rainfall": 202.935536,
}

input_json = json.dumps(input_data)
response = requests.post(url, data=input_json, headers={"Content-Type": "application/json"})

print(response.text)
