FROM python:3.9.10-slim

COPY . /app
WORKDIR /app

RUN python3 -m venv /opt/env

RUN pip install pip --upgrade && \
    /opt/env/bin/pip install -r requirements.txt && \
    chmod +x entrypoint.sh

CMD ["/app/entrypoint.sh"]