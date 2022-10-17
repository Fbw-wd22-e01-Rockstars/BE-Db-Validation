# Validating Database Data

Build an API to access the included pokedex dataset, and practise writing schemas with validation and subdocuments

## What you will be doing

For this assignment you will have to;

1. Upload the `pokedex` dataset to your MongoDB database
2. Create a mongoose schema for the `pokedex` database
3. Add validation to the schema
4. Create an API for accessing the `pokedex` database

Some code has already been written for you

## Tasks

Before starting these tasks install the included npm packages, by running the command `npm install` or `npm i`

### Task 1 - Importing the pokedex data

1. In your MongoDB server, create a new database `db-validation`

2. Inside this database, create a new collection called `pokedex`

3. Upload the `pokedex.json` dataset into your `pokedex` collection

### Task 2 - Setting up the .env file

1. Using the `.env.example` file as a template, create a `.env` file

2. Add your database connection details to your `.env` file, filling in the details as provided to you by MongoDB
   > Hint: The key `DB_NAME` points to the name of the database you want to connect to. Use the name `db-validation`. This will ensure that Mongoose will try and use the existing sample dataset you previously set up.

   > Hint: The key `DB_HOST` is the **domain** of your MongoDB connection string

### Task 3 - Connecting your server to your database

Inside `server.js`;

1. Using the `mongoose.connect()` method, use the variable `dbConnectionString` to connect to your database

2. `mongoose.connect()` returns a promise
   - use the `then()` method to display a message saying the connection was successful
   - use the `catch()` method to display a message saying the connection failed

3. Check that your database can connect

### Task 4 - Schema and model

1. Analyse the data in your `pokedex` collection

2. Complete the schema in `models/Pokedex.js`

> Hint: Some values maybe held inside an array, for example a string of arrays would be represented as `[String]`

> Hint: For some data you may need to use subdocuments

### Task 5 - Schema validation

For this task you will be adding validation to your schema

Add validation to your schema based on the following criteria:

- `name` > `english` should be **required**
- `name` > `all languages` should have a **minimum** character count of 3
- `name` > `all languages` should have a **maximum** character count of 24
- `type` should be **required**
- `base` > `HP` can **not be less** than 10 and should **default** to 20
- `base` > `Attack` can **not be less** than 1 and should **default** to 5
- `base` > `Defense` can **not be less** than 0 and should **default** to 1
- `base` > `Speed` can **not be less** than 20 and should **default** to 5

### Task 6 - Schema validation with enums

For this task you will be adding enum validation to your schema

1. For `type`, use an `enum` with the following strings;

```text
'grass',    'poison',
'fire',     'flying',
'water',    'bug',
'normal',   'electric',
'ground',   'fairy',
'fighting', 'psychic',
'rock',     'steel',
'ice',      'ghost',
'dragon',   'dark'
```

### Task 7 - Setting up the route

Our database may end up having more than one collection, or our business logic may become quite complex. We can imagine that if we were to fully develop our application, it could get quite big.

Let's try and keep things organised from the start.

Create a route `pokedex` with the path `/pokedex`

1. Create the file `pokedex.js` in the folder `routes`
   - import `express`
   - create the `router` instance from `express.Router()`
   - export your `router` instance

2. Import your route into `server.js`
   - Use `app.use()` to use the pokedex router you imported
   - Use the path `/pokedex`

### Task 8 - Creating an endpoint - get all pokemon

We will create an endpoint to load all pokemon

1. Create an endpoint with the path `/all`. This will be a `GET` endpoint.

2. Use the endpoint to interact with the **Pokedex** model to find all the pokemons in the collection

3. Return the results to the client

4. Test your endpoint

### Task 9 - Creating an endpoint - search for pokemon by type

We will create an endpoint to load all pokemons of a specific type

1. Create an endpoint with the path `/type`. This will be a `GET` endpoint. The endpoint should expect a request parameter from the client, the pokemon `type`.

2. Use the endpoint to interact with the **Pokedex** model

3. Search for the pokemon based on the **type** supplied by the client

4. Return the result to the client

> Hint: Additionally, you can normalize the input (make it lowercase) so that it matches the data in the collection

### Task 10 - Creating an endpoint - search for pokemon by name

> For this task, you will be searching within a subdocument

We will create an endpoint to load a specific pokemon, based on the `name`

1. Create an endpoint with the path `/name`. This will be a `GET` endpoint. The endpoint should expect a request parameter from the client, the pokemon `name`.

2. Use the endpoint to interact with the **Pokedex** model to find the pokemon by `name`. For now, default to the **english** version of the name, then:
   - If found, return a status of `200` and the result
   - If not found, return a status of `404` and an appropriate message

> Hint: When searching within a subdocument, you have to provide the path to the subdocument as the key. In the following example, we search for the name `"Wartortle"` within the model `Pokedex` for `"english"` subdocument of the `"name"` field;
>
> ```javascript
> Pokedex.find({ "name.english": "Wartortle" })
> ```

## Bonus tasks

### Modifying an endpoint - search for pokemon by name AND language

1. Modify the endpoint you created in Task 9

2. Using a `query` parameter, allow the user to change the language of the search

> Example: If the user attaches the query `?language=japanese` then search for the japanese version of the name

> Hint: You can access query parameters from the **request** object with the `query` property
