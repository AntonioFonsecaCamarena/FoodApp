# FoodApp
Food Orders Aplication

This is a WEB/Mobile based application designed to be deployed as multiple containers:
 - Database Container
    The persistence is manage by a Postgres Database (it can be changed on a future). 
 - BackEnd Container
    The backend is a REST API, using SpringBoot framework (Java). The SpringData module works with the ORM layer mapping the tables on the database and turning it in to a JSON HTTP response.
 - FrontEnd Container
    The web page is developed in React framework runing in a Node.js environment consuming data from the BackEnd. Is targeted to the final users (clients and admins).
 - Mobile 
    This is the no container module of the app, it is a mobile (IOS/Android) app client to use for the final users to make orders.
 
 # Requirements
 To run this app please read the readme file with instructions inside the food_app folder.


To run the application:
On dev: 
- Run the postgresql container :docker run -p 5432:5432 -d --name foodappdbImg -e POSTGRES_PASSWORD=foodapppsw -e POSTGRES_USER=postgres -e POSTGRES_DB=foodappdb -e POSTGRES_HOST_AUTH_METHOD=trust -v pgdata:/var/lib/postgresql/data postgres

Run the springboot project under foodappbackend. (instal Spring-tool-suite and import the project, or install Spring Boot Dashboard on Visual Studio Code)

- *first time only (if you get "react-scripts" no se reconoce como un comando interno o externo)
   Run: under the foodappfrontend folder: npm install react-scripts --save

Run under foodappfronted: npm start




-- Installed NPM dependencies
npm install bootstrap
npm install axios