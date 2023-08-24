# Message App

## Overview

Message App is a simple, user-friendly messaging application built with React. It allows users to send and receive messages in real-time.

## Features

- Real-time messaging
- Easy-to-use interface
- Dockerized for easy deployment

## Prerequisites

- Node.js v14+
- Docker (optional)

## Installation

### Using npm

1. Clone the repository:

    ```bash
    git clone https://github.com/amaro-coria/message-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd message-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

### Using Docker

1. Build the Docker image:

    ```bash
    docker build -t message-app .
    ```

2. Run the Docker container:

    ```bash
    docker run -p 3000:3000 message-app
    ```

## Usage

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

