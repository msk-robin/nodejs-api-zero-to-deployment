![Node](https://img.shields.io/badge/node-%3E%3D18-green)
![Tests](https://img.shields.io/badge/tests-jest-red)
![Docker](https://img.shields.io/badge/docker-ready-blue)
![License](https://img.shields.io/badge/license-MIT-yellow)

# 🚀 Node.js API: Zero → Deployment

> A production-ready REST API built while studying **Node.js for Beginners** by Ulises Gascón.

This repository is my implementation of the main project from the book.  
Instead of simply following along, the goal is to **build, break, test, refactor, and ship** a real-world Node.js application.

Because code that isn't deployed is just a hobby. 😄

---

## 📑 Table of Contents

- [Project Philosophy](#-project-philosophy)
- [Tech Stack](#-tech-stack)
- [Testing Philosophy](#-testing-philosophy)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Docker](#-docker)
- [Run Tests](#-run-tests)
- [Learning Goals](#-learning-goals)
- [Future Improvements](#-future-improvements)

---

# 🧠 Project Philosophy

This project focuses on **learning Node.js the right way**:

- Build a real REST API
- Write **tests first or alongside features**
- Use **clean architecture**
- Ensure **database abstraction**
- Make the app **production ready**
- Containerize with **Docker**
- Automate with **CI/CD**

The goal is not just to learn Node.js, but to learn **how to ship backend software professionally**.

---

# 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express | Web framework |
| MongoDB | Database |
| Jest | Testing |
| Supertest | API testing |
| Docker | Containerization |
| GitHub Actions | CI/CD |

---

# 🧪 Testing Philosophy

The project includes automated tests to act as a **refactoring safety net**.

This allows us to:

- Refactor with confidence
- Change databases easily
- Improve architecture safely

Example tools used:

- Jest
- Supertest

---

# 📁 Project Structure
```text
project
│
├── index.js
├── server.js
├── store.js
├── db.json
├── .babelrc
├── .nvmrc
├── jest.config.js
├── package.json
│
├── tests
│ ├── server.test.js
│ ├── store.test.js
│ ├── fixtures.js
│ └── utils.js
│
├── public
│ ├── index.html
│ ├── styles.css
│ ├── app.js
│ └── people.jpg
│
└── views
└── about.ejs
```

---

# ⚡ Getting Started

Clone the repository

```bash/zsh
git clone https://github.com/msk-robin/nodejs-api-zero-to-deployment.git
```
Move into the project directory
```bash/zsh
cd nodejs-api-zero-to-deployment
```
Install dependencies
```bash/zsh
npm install
```
Run the development server
```bash/zsh
npm run start
```
(Check scripts in package.json for additional commands.)

# 🐳 Docker

Start infrastructure
```bash/zsh
npm run infra:start
```
Stop infrastructure
```bash/zsh
npm run infra:stop
```
# 🧪 Run Tests

Tests are independent and should run successfully out of the box.

npm test
# 📚 Learning Goals

This repository explores:

REST API design

Express architecture

Database abstraction

Testing Node APIs

Dockerizing applications

CI/CD pipelines

Security practices

# 📖 Based On

Node.js for Beginners
by Ulises Gascón

Express Technical Committee member

Docker Captain

Microsoft MVP

Google Developer Expert

# 🤓 Nerd Notes

If future-me decides to swap:
```
MongoDB → PostgreSQL
Express → Fastify
REST → GraphQL
```
The architecture and tests should allow this with minimal pain.

That’s the whole point.

# 🚧 Work In Progress

This project evolves chapter-by-chapter.

Expect:

refactors

architectural changes

occasional chaos

All part of the learning process.

# 🛠 Future Improvements

authentication

rate limiting

API versioning

logging

observability

Kubernetes deployment
