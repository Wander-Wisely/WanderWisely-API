# Wander Wisely API

This API provides endpoints to retrieve data for the Wander Wisely application.

## Endpoints

### Get All Data
- Method: GET
- Endpoint: `/api/v1/alls`
- Description: Retrieve all data.
- Parameters:
  -  `page` (optional): The page number of the data to retrieve (default: 1).
  -  `size` (optional): The number of items per page (default: 5).
- Response: JSON object containing all the data.

### Get Data by ID
- Method: GET
- Endpoint: `/api/v1/alls/{id}`
- Description: Retrieve data by ID.
- Parameters:
  - `id` (required): The ID of the data to retrieve.
- Response: JSON object containing the data with the specified ID.

## Usage

1. Clone the repository:

```shell
git clone https://github.com/roniragilimankhoirul/WanderWisely-API
```

2. Install dependencies:

```shell
npm install
```

3. Start the server:

```shell
npm run start
```
