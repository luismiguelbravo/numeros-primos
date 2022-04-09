FROM        node:14.18.2
MAINTAINER  Luis Miguel Bravo
ENV         NODE_ENV=production
ENV         PORT=3000
COPY        . /numeros-primos
WORKDIR     /numeros-primos
RUN         npm install
EXPOSE      3000
ENTRYPOINT  ["npm", "start"]