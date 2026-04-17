from app import app

# Expose Flask app for Gunicorn:
# gunicorn -c backend/gunicorn.conf.py wsgi:app
