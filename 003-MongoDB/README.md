## Introduction
Today project is a basic NodeJs API app with MongoDB. This project use Typescript programming languague and ExpressJS web application framework.

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nodejs,express,typescript,mongodb&perline=10"/>
  </a>
</p>


## Features
- Basic NodeJS API app + NoSQL database
- MongoDB


## Usage
1.  Change dir to the project directory:
    ```
    cd ./003-MongoDB
    ```

2.  Install node_modules packages:
    ```
    npm install
    ```

3.  Change .env.example to .env and modify your database information.
    ```
    DB_USERNAME=root
    DB_PASSWORD=secret
    DB_HOST=localhost
    DB_PORT=27017
    DB_DATABASE=database
    ```

4.  Start the server (choose dev or prod environment). The dev-server will restart every time the code is changed.
    ```
    # Dev environment
    npm run dev

    # Prod environment
    npm run prod
    ```
    
5.  Open a different shell to use the application. You must change {host} to your IP address or domain name (e.g., localhost). It depends on your setup.
    ```
    # Health check
    curl {host}:3000/api/up

    # Fetch all users
    curl {host}:3000/api/user/all

    # Find user by username. Change {username} to the username you want to find.
    curl {host}:3000/api/user/username/{username}

    # Find user by email. Change {email} to the email you want to find.
    curl {host}:3000/api/user/email/{email}
    ```


## Contributing
If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Any contributions are welcome!