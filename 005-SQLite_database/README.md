## Introduction
Today project is a basic NodeJs API app with SQLite database. This project use Typescript programming languague and ExpressJS web application framework.

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nodejs,express,typescript,sqlite&perline=10"/>
  </a>
</p>


## Features
- Basic NodeJS API app + SQL database
- SQLite database


## Usage
1.  Change dir to the project directory:
    ```bash
    cd ./005-SQLite_database
    ```

2.  Install node_modules packages:
    ```bash
    npm install
    ```

3. Copy `.env.example` to `.env`
    ```bash
    cp ./.env.example ./.env
    ```

4.  Modify your database information in `.env`.
    ```properties
    DB_PATH=./db.sqlite3
    ```

5.  Start the server (choose dev or prod environment). The dev-server will restart every time the code is changed.
    ```bash
    # Dev environment
    npm run dev

    # Prod environment
    npm run prod
    ```
    
6.  Open a different shell to use the application. You must change ${host} to your IP address or domain name (e.g., localhost). It depends on your setup.
    ```bash
    # Health check
    curl ${host}:3000/api/up

    # Fetch all users
    curl ${host}:3000/api/user/all

    # Find user by username. Change ${username} to the username you want to find.
    curl ${host}:3000/api/user/username/${username}

    # Find user by email. Change ${email} to the email you want to find.
    curl ${host}:3000/api/user/email/${email}
    ```


## Available routes
<div align="center">
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>URL</th>
        <th>Function</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>/api/</td>
        <td>home</td>
      </tr>
      <tr>
        <td>2</td>
        <td>/api/up</td>
        <td>health check</td>
      </tr>
      <tr>
        <td>3</td>
        <td>/api/user/all</td>
        <td>get users list</td>
      </tr>      <tr>
        <td>4</td>
        <td>/api/user/username/${username}</td>
        <td>find user by username</td>
      </tr>
      <tr>
        <td>5</td>
        <td>/api/user/email/${email}</td>
        <td>find user by email</td>
      </tr>
    </tbody>
  </table>
</div>


## Contributing
If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Any contributions are welcome!