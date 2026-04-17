from flask import Flask, jsonify
from flask_cors import CORS


def create_app() -> Flask:
    app = Flask(__name__)

    # Restrict this in production to your frontend origin (for example: http://YOUR_IP:5007).
    CORS(app)

    @app.get("/api/health")
    def healthcheck():
        return jsonify({"status": "ok", "service": "recruitment-backend"})

    @app.get("/api/v1/ping")
    def ping():
        return jsonify({"message": "Backend is reachable"})

    # Starter endpoint for future DB integration.
    @app.get("/api/v1/leads")
    def list_leads():
        return jsonify({"items": [], "source": "placeholder"})

    return app


app = create_app()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5007, debug=True)
