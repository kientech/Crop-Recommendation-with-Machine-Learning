# 🚀 Crop Recommendation with Machine Learning - KienTech 😍

## Introduction

The **Crop Recommendation with Machine Learning** project aims to provide tailored crop recommendations based on various environmental factors such as soil type, temperature, humidity, and more. The goal of this project is to assist farmers and agricultural researchers in selecting the most suitable crops for specific environmental conditions, thereby optimizing yield and minimizing risk.

The system utilizes a machine learning model to predict the optimal crop based on user input. The user interface is built using React.js, offering an intuitive and user-friendly experience.

## Features

- **Machine Learning Model:** A predictive model trained on agricultural datasets to suggest the best crop for given environmental conditions.
- **Web Application:** A responsive and interactive web interface built with React.js for users to input data and receive crop recommendations.
- **Data Visualization:** Visual representations of input data and recommendations to help users understand and analyze the suggestions.
- **User Management:** Option to save and manage user data and previous recommendations if integrated with a database.

## Tech Stack

- **Backend:**
  - Python
  - Flask (for creating the API)
  - Scikit-learn (for machine learning model training and prediction)
- **Frontend:**
  - React.js (for building the user interface)
  - Axios (for making API calls)
  - Tailwind CSS (for styling and responsive design)
- **Database:** 
  - MongoDB (optional, for storing user data and recommendation history)
- **Deployment:**
  - Heroku 

## Installation

### Prerequisites

- Python 3.x
- Node.js and npm

### Backend Setup

1. Clone the repository:

    ```bash
    git clone [https://github.com/yourusername/crop-recommendation.git](https://github.com/kientech/Crop-Recommendation-with-Machine-Learning)
    ```

2. Navigate to the backend directory:

    ```bash
    cd crop-recommendation/backend
    ```

3. Install the required Python packages:

    ```bash
    pip install -r requirements.txt
    ```

4. Start the Flask server:

    ```bash
    python app.py
    ```

   The backend server should now be running on `http://localhost:5000` (or another port if configured differently).

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd crop-recommendation/frontend
    ```

2. Install the required npm packages:

    ```bash
    npm install
    ```

3. Start the React.js development server:

    ```bash
    npm start
    ```

   The frontend application should now be running on `http://localhost:3000` (or another port if configured differently).

## Usage

- **Web Interface:** Access the web application in your browser. Enter environmental data such as soil type, temperature, and humidity into the form provided. The system will then use the machine learning model to recommend the most suitable crop.
- **API Endpoints:** The backend API provides endpoints for receiving data from the frontend and returning predictions. You can interact with these endpoints directly using tools like Postman for testing.

### Example API Requests

- **GET /api/recommendation** - Retrieve crop recommendations based on input parameters.
- **POST /api/recommendation** - Submit environmental data and receive crop recommendations.

## Model Training

The machine learning model is trained using a dataset that includes various environmental factors and the corresponding crop yields. The model training script is located in the `model_training` directory.

### Steps to Retrain the Model:

1. Navigate to the `model_training` directory:

    ```bash
    cd crop-recommendation/model_training
    ```

2. Run the training script:

    ```bash
    python train_model.py
    ```

   This script will preprocess the data, train the model, and save it for use by the backend API.

## Web Application

The web application allows users to:

- **Input Data:** Enter environmental conditions including soil type, temperature, and humidity.
- **Get Recommendations:** Receive crop recommendations based on the input data.
- **View Recommendations:** (If database is implemented) Access and review previous recommendations.

## Contributing

We welcome contributions from the community! To contribute to this project:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and test them thoroughly.
4. Submit a pull request with a description of your changes.
