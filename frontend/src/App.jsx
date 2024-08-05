import React, { useState } from "react";
import axios from "axios";

function App() {
  const [inputData, setInputData] = useState({
    N: "",
    P: "",
    K: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/predict", inputData);

      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error making prediction:", error);
      setPrediction("Error making prediction");
    }
  };

  return (
    <div className="App">
      <h1>Crop Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>N (Nitrogen): </label>
          <input
            type="number"
            name="N"
            value={inputData.N}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>P (Phosphorus): </label>
          <input
            type="number"
            name="P"
            value={inputData.P}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>K (Potassium): </label>
          <input
            type="number"
            name="K"
            value={inputData.K}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Temperature: </label>
          <input
            type="number"
            name="temperature"
            value={inputData.temperature}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>
        <div>
          <label>Humidity: </label>
          <input
            type="number"
            name="humidity"
            value={inputData.humidity}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>
        <div>
          <label>pH: </label>
          <input
            type="number"
            name="ph"
            value={inputData.ph}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>
        <div>
          <label>Rainfall: </label>
          <input
            type="number"
            name="rainfall"
            value={inputData.rainfall}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>
        <button type="submit">Predict Crop</button>
      </form>

      {prediction && (
        <div>
          <h2>Predicted Crop: {prediction}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
