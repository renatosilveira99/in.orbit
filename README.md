# in.orbit

![Project Icon](https://github.com/user-attachments/assets/c097429c-6690-4b58-9969-e93e45432566)

## Description

**in.orbit** is a full-stack application developed during the **Next Level Week (NLW Pocket)** by Rocketseat. This app helps users track their daily goals, providing a seamless and efficient way to manage personal productivity. It integrates both frontend and backend technologies to deliver a modern user experience.

## Screenshots

![image](https://github.com/user-attachments/assets/0bb817c1-26d0-4db3-9e67-c28d160a74fb)
![image](https://github.com/user-attachments/assets/c0027694-60eb-4849-8b45-6ec2659e0764)
![image](https://github.com/user-attachments/assets/ba85bb64-5641-48b7-bed1-6b34c2a1cb5c)

## Features

- Track daily goals.
- View pending and completed goals.
- Utilizes Common Table Expressions (CTE) for efficient database queries.
- Fully responsive frontend built with TailwindCSS.
- Backend built with Node.js, Fastify, and Drizzle ORM.
- Efficient data fetching with React Query.
- Form management with React Hook Form.

## Getting Started

To run this project locally, follow the instructions below.

### Clone the Repository

```bash
git clone https://github.com/renatosilveira99/in.orbit.git
```

### Running the Backend (Server)

1. Navigate to the server directory:

```bash
cd server
```

2. Install the dependencies:

```bash
npm install
```

3. Run the database migrations:

```bash
npx drizzle-kit migrate
```

4. (Optional) Populate the database with sample data:

```bash
npm run seed
```

5. Start the backend server:

```bash
npm run dev
```

The backend server will now be running at `http://localhost:3333`.

### Running the Frontend (Web)

1. Navigate to the web directory:

```bash
cd web
```

2. Install the dependencies:

```bash
npm install
```

3. Start the frontend development server:

```bash
npm run dev
```

The frontend will be accessible at `http://localhost:5173`.

## Technologies Used

### Backend
- Node.js
- Fastify
- Drizzle ORM
- PostgreSQL
- Docker Compose
- Zod
- Common Table Expressions (CTE)

### Frontend
- React.js
- Vite
- TailwindCSS
- React Query
- React Hook Form
