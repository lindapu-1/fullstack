# Quote of the Day App

A simple web application that displays random quotes using React for the frontend and Flask for the backend.

## Project Structure

```
.
├── frontend/          # React frontend application
├── backend/           # Flask backend application
├── requirements.txt   # Python dependencies
└── README.md         # This file
```

## Setup Instructions

### Backend Setup

1. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the Flask server:
   ```bash
   cd backend
   python app.py
   ```

The backend will run on http://localhost:5000

### Frontend Setup

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Run the React development server:
   ```bash
   npm start
   ```

The frontend will run on http://localhost:3000

## Features

- Random quote generation
- Responsive design
- Modern UI with smooth transitions
- Error handling for failed API requests

## Deployment

### Frontend (Vercel)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy the frontend application

### Backend (Render/Heroku)
1. Create a new project on Render/Heroku
2. Connect your repository
3. Deploy the backend application
4. Update the frontend API URL to point to the deployed backend

## Technologies Used

- React.js
- Flask
- Flask-CORS
- Gunicorn 