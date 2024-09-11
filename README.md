# Builder Backend Interview Live Exercise

## Tech Stack

- Node.js v20.9.0
- Express
- TypeORM

## Project Structure

- `/controller` - Controller layer
- `/entity` - Entity layer
- `/service` - Service layer
- `/repository` - Repository layer
- `/migration` - Database migration files

## Tasks

### 0. Setup
1. Run `npm install` to install package dependencies.
2. Create `.env` file from `.env.example` template
3. Run `npm run start:services` to start database services.

### 1. Create Order Entity

Create the `src/entity/order.ts` entity to represent an order. Refer to the TypeORM [docs](https://typeorm.io/relations) to implement this entity. A migration will be required to create the table; use [these docs](https://typeorm.io/migrations) as a reference.
Existing migration template is created so update the script in `src/migration/1701760316938-AddOrderTable.ts`.
The entity should have the following fields: `id, amount_total, created_at, customer_id`. 
After migration is created, run `npm run migration:run` to execute the migrations.

### 2. Implement Order Creation Endpoint

Modify the `src/controller/customer.ts` controller to implement the order creation endpoint for a specific user.

### 3. Modify getCustomer Method to Return Orders

Modify the `src/controller/customer.ts` controller method `getCustomer` to return orders for a specific user. Make use of TypeORM [relations](https://typeorm.io/relations). The returned structure should look like this:
```json
{
  "id": "string",
  "first_name": "string",
  "last_name": "string",
  "age": 30,
  "order_total_amount": 150,
  "orders": [
    {
        "id": "string",
        "created_at": "2023-01-01T01:00:00",
        "amount_total": 50
    },
    ...
  ]
}
```

### 4. Validate User Input

Modify the `src/controller/customer.ts` controller method `createOrder` to validate the input. 
Utilize Express-validator [docs](https://express-validator.github.io/docs/) or any other tool you're comfortable with.

### 5. Add Tests

There is a working test in `src/controller/__tests__/customer.spec.js`. Write tests for newly added functionality!

### 6. Dockerize the Application (Optional)

Create a Dockerfile to containerize the application.

### 7. Showcase Your Knowledge: Suggestions and Refactoring

While the tasks are comprehensive, take the opportunity to showcase your expertise. Provide insights on how you would refactor, clean up, or improve this project. The code doesn't need to be functional, but demonstrate your ideas!
