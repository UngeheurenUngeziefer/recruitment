# Recruitment Backend (Flask)

Minimal backend scaffold for API and future database integration.

## Run locally

1. Create a virtual environment:
   python3 -m venv .venv
2. Activate it:
   source .venv/bin/activate
3. Install dependencies:
   pip install -r requirements.txt
4. Run app:
   python app.py

Backend will run on port 5007.

## Production (recommended)

Run Gunicorn behind Apache reverse proxy:

```bash
gunicorn -c gunicorn.conf.py wsgi:app
```

With Apache routing:

- Frontend static app: `/recruitment/`
- Backend API proxy: `/recruitment/api/` -> `http://127.0.0.1:5007/api/`

This keeps Apache stable while backend endpoints evolve.

## API endpoints

- GET /api/health
- GET /api/v1/ping
- GET /api/v1/leads (placeholder)
