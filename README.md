# RESTful API

This is a simple RESTful API for user management with CRUD operations using Node.js and Express.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your local machine.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installing

1. Clone the repository:
   ```bash
   git clone https://github.com/coderooz/restful-api.git
   cd restful-api
   ```

2. Install the dependencies:
   ```bash
   npm install express body-parser
   ```

3. Start the server:
   ```bash
   node index.js
   ```

### API Endpoints

- **Create a new user**
  - `POST /users`
  - Request body: `{ "name": "John Doe", "email": "john.doe@example.com" }`

- **Get all users**
  - `GET /users`

- **Get a user by ID**
  - `GET /users/:id`

- **Update a user by ID**
  - `PUT /users/:id`
  - Request body: `{ "name": "Jane Doe", "email": "jane.doe@example.com" }`

- **Delete a user by ID**
  - `DELETE /users/:id`

### Usage

Use a tool like Postman or cURL to interact with the API endpoints.

### Built With

- [Express](https://expressjs.com/) - The web framework used
- [body-parser](https://www.npmjs.com/package/body-parser) - Middleware to parse request bodies

### Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your-username/restful-api/tags).

### Authors

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/your-username)

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
