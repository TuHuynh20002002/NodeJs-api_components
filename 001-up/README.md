## Introduction
Today project is a basic NodeJs API app. This project use Typescript programming languague and ExpressJS web application framework.

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nodejs,express,typescript&perline=10"/>
  </a>
</p>


## Features
- Basic NodeJS API app
- Health check with "/up"


## Usage
1.  Change dir to the project directory:
    ```bash
    cd ./001-up
    ```

2.  Install node_modules packages:
    ```bash
    npm install
    ```

3.  Start the server (choose dev or prod environment). The dev-server will restart every time the code is changed.
    ```bash
    # Dev environment
    npm run dev

    # Prod environment
    npm run prod
    ```
    
4.  Open a different shell to use the application. You must change ${host} to your IP address or domain name (e.g., localhost). It depends on your setup.
    ```bash
    # Health check
    curl ${host}:3000/api/up

    # Home
    curl ${host}:3000/api/
    ```


## Contributing
If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Any contributions are welcome!