FROM node:latest

WORKDIR /DAILY-MOOD-TRACKER

# First, copy only package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Then, copy the rest of your application code
COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# Terminal

# docker image build -t react-image:dev .
# docker images
# docker run -p 3000:5173 react-image:dev


# How to Push the Image to Docker Hub

# docker login
# docker image tag react-example-image <username>/react-example-image
# docker push <username>/<image-name>