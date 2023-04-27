# Fetching the last node image
FROM node:16-alpine
# setting up the work directory to /app
WORKDIR /app
# Copy package.json and package-lock.json to the container
COPY package*.json ./
# Installing dependencies
RUN npm install
# Copy the rest of the application code to the container
COPY . .
# Build the production version of the application
RUN npm run build
# Environment Variables
ENV REACT_APP_SERVICE_ID = service_0bju0ig
ENV REACT_APP_TEMPLATE_ID = template_owvew5h 
ENV REACT_APP_API_KEY = NoQKaY50iASZiEFIA
# Expose the port on which the port will be running
EXPOSE 3000
# Starting our application
CMD [ "npm", "start" ]