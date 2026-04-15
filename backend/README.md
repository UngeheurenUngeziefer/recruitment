# Recruitment Backend (Flask)

Minimal backend scaffold for future database integration.

## Run locally

1. Create a virtual environment:
   python3 -m venv .venv
2. Activate it:
   source .venv/bin/activate
3. Install dependencies:
   pip install -r requirements.txt
4. Run app:
   python app.py

Backend will run on port 8000.

## Production (example)

Use gunicorn behind Apache/Nginx reverse proxy:

gunicorn -w 2 -b 127.0.0.1:8000 app:app

## API endpoints

- GET /api/health
- GET /api/v1/ping
- GET /api/v1/leads (placeholder)
