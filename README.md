# Spellchecking App

This Spellchecking application consists of two parts: the frontend (client) built with Vite and React, and the backend (server) built with Node.js.

## Repository Structure

**_/api_** : Files and folders for the backend

**_/client_** : Files and folders for the frontend


## Usage Instructions

### Prerequisites

Ensure you have Docker installed on your system.

### Environment Setup

1. Clone this repository:
    ```bash
    git clone https://github.com/VirJuarez/SpellcheckingApp.git
    ```

2. Navigate to the project directory:
    ```bash
    cd spellcheckingApp
    ```

### Starting the Application

Run the following command to start the application:
```bash
docker-compose up
```

### Accesing the Application

**Frontend**
> Open your browser and go to http://localhost:5173

**Backend**
> The server will be available at http://localhost:31337


### Stoping the Application

To stop the application and close the containers, run:
```bash
docker-compose down
```

## Additional Notes

You can also run the project outside Docker containers. Follow the instructions below:

### Prerequisites

Make sure you have Node.js and npm installed on your system.

Ensure that you have the required ports available on your system to avoid conflicts (5173 and 31337).

### Running Without Docker

1. Navigate to the `client` directory:
 ```bash
   cd client
```
2. Install dependencies and start the frontend:
```bash
   cd client
```
3. Open another terminal and navigate to the api directory:
 ```bash
   cd api
```
4. Install dependencies and start the backend:
```bash
npm install
npm start
```
