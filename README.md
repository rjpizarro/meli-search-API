# Meli Search API

* Heroku app: https://meli-search-api.herokuapp.com/

## Install & Run

Requirements: 
* **Node v12.16.1**

1. Clone the project: `git clone git@github.com:rjpizarro/meli-search-API.git`
2. Install dependencies: `npm install`
4. Configure `.env` file: 
    1. rename `.env.example` to `.env`
5. Run: `npm start`      

## Project Structure

```
meli-search-API
├── .env
├── babel.config.js
├── envConfig.js
├── jest.config.js
├── package.json
├── tsconfig.json
├── build
├── node_modules
└── src
    ├── app.ts
    └── api
        ├── controllers
        │   └── items
        ├── middlewares
        ├── routes
        └── services
            └── items
```

At the project root level you will find all the config files for typescript and babel. There is also an `envConfig` that get the data from the `.env` and configure the keys to be used easily in the rest of the files.
  
Folders like `build` and `node_modules` are generated after transpile or when installing a dependency, respectively

### `app.ts`

Creates the express app and configures the main routes.   

### `api`

This folder contain all the API logic organized in:   

* **controllers**: It processes each request and returns a response. It should exist only one controller per file. As a rule, a controller only can access data through Services. 
* **services**: Are in charge to access the data. Should tackle only one task (find, update, delete, etc). A service can't import another service. It is the controller's scope to use more than one service to get all the data required.  
* **routes**: It defines the resources for the RestAPI. It uses controllers for each route and adds middlewares when needed.
* **middlewares**: It contains express middlewares for tasks like error handling, etc.   

## Resources

### `GET /api/items?q={string}&limit={number}`

Search an item using `https://api.mercadolibre.com/sites/MLA/search?q=`

Params: 
* q: String. Query value to search
* limit: Number. Limit the results quantity

Response: 

```json
{
  "author": {
      "name": String,
      "lastname": String
  },
  "categories": [String],
  "items": [{
      "id": String,
      "title": String,
      "price": {
        "currency": String,
        "amount": Number,
        "decimals": Number
      },
      "picture": String,
      "condition": String,
      "free_shipping": Boolean
  }]
}
```

### `GET /api/items/{id}`

Retrieve an item with description by ID.  

Response:

```json
{
  "author": {
      "name": String,
      "lastname": String
  },
  "item": {
      "id": String,
      "title": String,
      "price": {
        "currency": String,
        "amount": Number,
        "decimals": Number
      },
      "picture": String,
      "condition": String,
      "free_shipping": Boolean,
      "sold_quantity": Number,
      "description": String
  }
}
```

## Scripts

### `npm start`

Run the application with `nodemon` and `ts-node`

### `npm run start:server`

Transpile typescript files into `build` folder and run the output with `node`

### `npm test`

Run `jest` test suite.

### `npm run ts-node`

For development purposes. It allows run one file. 

### `npm run tsc`

Transpiles typescript files and creates the `build` folder. 