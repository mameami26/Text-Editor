# Text-Editor
## Description

The **PWA Text Editor** is a single-page application that allows developers to create notes or code snippets with or without an internet connection. This project demonstrates key concepts of Progressive Web Applications (PWA) including offline functionality, IndexedDB for data persistence, and service workers for caching. 

## Table of Contents

- [Text-Editor](#text-editor)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [**Installation**](#installation)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Deployment](#deployment)
  - [Contact](#contact)

## **Installation**

To set up the project on your local machine, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mameami26/Text-Editor.git
2. **Install dependencies:**
   
    ```bash
   npm install

3. **Start the server:**
   
   ```bash
   node index.js
## Usage
To run the application locally, use the following command:

* command:
  ```bash 
  npm run start

* This will start the backend server and serve the client side of the application.

To build the application for production, run:
  ```
 npm run build
```
 
To start the development server with hot reloading:
```
npm run start:dev
```

## Features
* Offline Functionality: The application works without an internet connection, allowing users to save and retrieve data using IndexedDB.
* Service Workers: Uses Workbox to generate a service worker that caches static assets for offline use.
* IndexedDB Integration: Automatically saves content when the DOM window is unfocused and retrieves it upon reopening.
* PWA Installable: The application can be installed on a user's device as a Progressive Web Application.
* Webpack Bundling: JavaScript files are bundled using Webpack, including the generation of an HTML file, service worker, and manifest file.
* Modern JavaScript: The application supports next-gen JavaScript syntax (e.g., async/await) through Babel.
## Technologies Used
* JavaScript 
* Webpack
* Workbox 
* Node.js and Express.js
## Deployment
The application is deployed on Render. You can view the live application by visiting the following link:

Deployed Application on Render

For detailed deployment instructions, refer to the Render Deployment Guide provided in the Full-Stack Blog.

## Contact
For any questions, please contact:

* Your email: mameami26@gmail.com
* GitHub: mameami26@
