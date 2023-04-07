FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
RUN chmod +x ./startup.sh
#CMD ["/bin/sh -c ./startup.sh"]
#CMD "echo test cmd"
ENTRYPOINT [ "./startup.sh" ]

