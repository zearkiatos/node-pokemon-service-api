FROM mongo:latest

COPY /src/data/db/scripts/mongo-init.js /docker-entrypoint-initdb.d/

WORKDIR /var/data

EXPOSE 27017