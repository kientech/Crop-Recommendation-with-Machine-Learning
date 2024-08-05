from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pickle
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow your React app's origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

try:
    model = pickle.load(open('model.pkl', 'rb'))
except Exception as e:
    raise RuntimeError("Could not load model. Check the file path and format.") from e


crop_dict = {
    1: 'rice',
    2: 'maize',
    3: 'chickpea',
    4: 'kidneybeans',
    5: 'pigeonpeas',
    6: 'mothbeans',
    7: 'mungbean',
    8: 'blackgram',
    9: 'lentil',
    10: 'pomegranate',
    11: 'banana',
    12: 'mango',
    13: 'grapes',
    14: 'watermelon',
    15: 'muskmelon',
    16: 'apple',
    17: 'orange',
    18: 'papaya',
    19: 'coconut',
    20: 'cotton',
    21: 'jute',
    22: 'coffee'
}


class PredictionRequest(BaseModel):
    N: float
    P: float
    K: float
    temperature: float
    humidity: float
    ph: float
    rainfall: float


@app.post("/predict")
def predict(request: PredictionRequest):
    input_data = [
        request.N,
        request.P,
        request.K,
        request.temperature,
        request.humidity,
        request.ph,
        request.rainfall
    ]

    try:
        features = np.asarray(input_data).reshape(1, -1)
        prediction = model.predict(features)
        prediction_index = prediction[0].item()
        crop_name = crop_dict.get(prediction_index, "Unknown")
        return {"prediction": crop_name}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
