# GC Full Stack React Test

A simple UI for managing users has been created for you. It is currently using mock data held in React state.

You will need to turn this into a real world app by adding a backend and converting the React app to use it.

## Instructions

**Fork this repository to your public GitHub account. When you are already to submit your solution, please provide us with a link and startup instructions.**

In the backend folder, you will need to:

    1. Use MySQL or PostgreSQL along with any database framework
    2. Define models for users and group following these rough schemas:

        Users:
        {
            *id: <UUID>
            name: <String>
            groups: [<Array of group relations>]
        }

        Groups:
        {
            *value: <String(Unique)>
            label: <String> (Human readable form "Group Name")
        }

    5. Provide a REST server to handle interactions via the frontend (it should serve JSON responses).

In the React frontend folder, you will need to:

    1. Connect the application to your REST API.
    2. Use GET requests to populate users and groups.
    3. Use POST and PATCH requests to create and update users.
    4. Use DELETE requests to remove users.
    5. Keep all components in sync with the data in your database.

Instructions for starting the React app are in `/frontend/README.md`

## Folder Structure

    full-stack-test
    |
    |-- frontend
    |   |-- src
    |   |  |-- components
    |   |  |-- _mock_data.js
    |   |  |-- App.js
    |   |  |-- index.js
    |   |  |-- styles.css
    |   |-- public
    |   |  |-- index.html
    |   |-- .babelrc
    |   |-- package.json
    |   |-- README.md
    |   |-- webpack.config.js
    |
    |-- backend
    |   |-- README.md (add brief explanation of your solution)
    |   |-- <rest of your code>
    |
    |-- readme.md
