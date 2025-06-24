FROM node:18-slim

ENV TZ Asia/Tokyo

WORKDIR /app

RUN apt-get update \
    && apt-get install -y \
    git \
    vim

COPY ./front/package*.json ./
RUN npm install