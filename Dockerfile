FROM        node:16-alpine
WORKDIR     /app
COPY        --chown=node:node . /app/
RUN         apk add bash curl --no-cache \
  && yarn install --frozen-lockfile --prefer-offline 
CMD ["yarn", "run", "start"]
EXPOSE 9000