FROM node:20-alpine

WORKDIR /DAILY-MOOD-TRACKER

# First, copy only package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Then, copy the rest of your application code
COPY . .

EXPOSE 3000

CMD ["npm", "start"]