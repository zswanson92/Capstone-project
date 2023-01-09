# Zelp!

## About

Zelp! is my attempt at a rough clone of the Yelp! website, primarily focused on restaraunts as opposed to all businesses. Users will be able to signup, create business pages that will list details about their business and provide a forum for their businesses to be reviewed and advertised online by their peers. There will be implementation for User profiles to store reviews and interact with other Users who frequent the same businesses and a like system where reviews can be prioritized based on how the general populace feels about them.

In the future I hope to also implement maps as well as a search bar to further enable people to find things that are popular near them and potentially find some hiddens gems as well as let their own feelings be known to business owners. It's been a lot of fun trying to recreate this highly intricate site that has a ton of very cool functionality and styling, I look forward to see how much more I can implement.

To use the app you can either select the live link, or by downloading from the repository and following the steps listed out in the 'Getting Zelp! started' section below

## Getting Zelp! started
1. Clone this repository and open the file.

2. Install dependencies

      ```bash
      pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Make sure the SQLite3 database connection URL is in the **.env** file

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention**.

6. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.


## Wiki Links
The links here will provide more details on the Database Schema, Features List, and User Stories for the Zelp! site.

[Database Schema](https://github.com/zswanson92/Capstone-project/wiki/Database-Schema)

[Features List](https://github.com/zswanson92/Capstone-project/wiki/Features-List)

[User Stories](https://github.com/zswanson92/Capstone-project/wiki/User-Stories)

[WireFrames](https://github.com/zswanson92/Capstone-project/wiki/Wireframes)


## Stack

Languages, Frameworks, Platforms, and Libraries used:

>  Python, Flask, Alembic, SQLAlchemy, PyPI, HTML5, CSS3, Node.js, React, Redux

Hosting:

>  Render

Host Database:

>  PostgreSQL


## Yelp Home Page 1 ![image](https://user-images.githubusercontent.com/68711430/211254472-6a197c36-a5ab-4f58-afb9-fe9c8e4c86cb.png)


## Yelp Home Page 2 ![image](https://user-images.githubusercontent.com/68711430/211254503-4b600f57-5f06-44b5-8ba1-0727f8648f53.png)

## Yelp Businesses List ![image](https://user-images.githubusercontent.com/68711430/211254566-6c3cfd25-5145-42f1-908c-873a71457fca.png)

## Top of Yelp Business Page ![image](https://user-images.githubusercontent.com/68711430/211254636-4a6c219b-4ca6-4bc6-b45f-be6d8f1e83e6.png)

## Yelp Review Start ![image](https://user-images.githubusercontent.com/68711430/211254679-8b0ab7a8-8ada-4547-997b-d5360a2cf2f8.png)


## Zelp Home Page 1 ![image](https://user-images.githubusercontent.com/68711430/211254764-d645dcad-8244-4a0e-8e32-d5e65154cfa6.png)

## Zelp Home Page 2 ![image](https://user-images.githubusercontent.com/68711430/211254808-6fd86240-72c3-4d6d-9d60-199387912d77.png)

## Zelp Businesses List ![image](https://user-images.githubusercontent.com/68711430/211254849-d7c83231-c3c7-4678-a08c-e3525b2c80fa.png)

## Top of Zelp Business Page ![image](https://user-images.githubusercontent.com/68711430/211254910-c2b901de-d76a-46fb-88a7-15cea914cb0e.png)

## Zelp Review Start ![image](https://user-images.githubusercontent.com/68711430/211255050-64a0bdb5-e879-4373-aeb7-070dff8cae02.png)



