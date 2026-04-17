# Recruitment Production Setup (One-Time Apache, Future-Proof)

This setup gives you:
- Static frontend at `/recruitment/`
- Python backend API at `/recruitment/api/`
- One-time Apache configuration only
- Future releases via GitHub Actions without changing Apache each time

## 1. One-Time Apache Config

Edit your HTTPS vhost and add these lines **above** the catch-all `ProxyPass / ...` rules:

```apache
# Keep /recruitment paths out of the root app proxy
ProxyPass /recruitment !
ProxyPass /recruitment/ !

# Serve frontend static files from Apache
Alias /recruitment/ /home/github_actions_user/recruitment/frontend/
<Directory /home/github_actions_user/recruitment/frontend/>
    Options FollowSymLinks
    AllowOverride All
    Require all granted
</Directory>

# Backend API behind Apache
ProxyPass /recruitment/api/ http://127.0.0.1:5007/api/
ProxyPassReverse /recruitment/api/ http://127.0.0.1:5007/api/
```

Then validate and reload:

```bash
sudo apache2ctl configtest
sudo systemctl reload apache2
```

Enable required modules once if needed:

```bash
sudo a2enmod proxy proxy_http rewrite
sudo systemctl reload apache2
```

## 2. One-Time Backend Service Setup on VPS

No manual service-file copy is required anymore.
The backend deployment workflow now writes and updates the systemd unit automatically on each deploy.

First-time only checks on VPS:

```bash
sudo ss -ltnp | grep :5007 || true
sudo systemctl status recruitment-backend --no-pager || true
```

These commands are done once because they modify system-level service registration under `/etc/systemd/system`.
They do not restart unrelated services. The only service they start/restart is `recruitment-backend`.

- Workflow writes/updates `/etc/systemd/system/recruitment-backend.service`.
- `systemctl daemon-reload`: reloads systemd metadata only.
- `systemctl enable --now recruitment-backend`: starts this service and enables autostart.
- `systemctl status recruitment-backend`: read-only status check.

Potential conflict to check before enabling:

```bash
sudo ss -ltnp | grep :5007 || true
```

If another process already uses `127.0.0.1:5007`, this backend service will fail to start but will not stop unrelated apps.

## 3. GitHub Secrets

Frontend workflow (`.github/workflows/build-upload-run.yml`):
- `VPS_SSH_PRIVATE_KEY`
- `VPS_HOST`
- `VPS_USER`
- `VPS_WEB_ROOT=/home/github_actions_user/recruitment/frontend`
- `VITE_APP_BASE_PATH=/recruitment/`

Backend workflow (`.github/workflows/deploy-backend.yml`):
- `VPS_SSH_PRIVATE_KEY`
- `VPS_HOST`
- `VPS_USER`
- `VPS_APP_ROOT` (recommended: `/home/<VPS_USER>/recruitment`; example: `/home/github_actions_user/recruitment`)
- `VPS_BACKEND_SERVICE_NAME=recruitment-backend`

If `VPS_APP_ROOT` points to a protected path like `/opt/recruitment`, the workflow will try `sudo mkdir/chown`.
If your deploy user has no sudo rights, use a writable home-directory path instead.

## 4. Deploy Flow (No Further Apache Edits)

- Frontend changes: push to `main` -> frontend workflow deploys static dist to `/var/www/wlkbl.com/recruitment`
- Backend changes (anything under `backend/`): push to `main` -> backend workflow deploys code to `/opt/recruitment/backend`, installs deps in venv, restarts systemd service

## 5. URLs After Setup

- Frontend: `https://wlkbl.com/recruitment/`
- Backend health: `https://wlkbl.com/recruitment/api/health`
- Backend ping: `https://wlkbl.com/recruitment/api/v1/ping`

## 6. How DB Fits In Later

- Add SQLAlchemy + Alembic in backend
- Keep API under `/api/...` in Flask app
- Keep Apache unchanged
- Frontend continues calling `/recruitment/api/...`

This means DB/schema/API growth does not require new Apache changes, only backend code deployments.
