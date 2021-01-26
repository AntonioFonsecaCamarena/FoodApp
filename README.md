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
