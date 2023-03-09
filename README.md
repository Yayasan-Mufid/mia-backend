# MIA Backend

MIA Backend is Application Programming Interface for MIA (Mufid Islamic Academy) builded with typescript, prisma, express.js. As a backend application, MIA-Backend using postgresql as RDBMS for supporting databases.

## Features

- Roles management.
- Learning.
- Learning Assessment.
- Payment Validation.
- Administration.

## Tech

MIA-Backend uses a number of open source projects to work properly:

- [ExpressJS] - web application framework
- [Prisma] - Next Generation ORM
- [Multer] - File upload middleware.
- [Postgresql] - RDBMS for databases.

## Installation

MIA-Backend requires [Node.js](https://nodejs.org/) v18+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm install
npx prisma generate
npx prisma migrate dev
npx prisma db seed
```

How to serve in development stage.
```sh
npm run dev
```

## API Documentation
