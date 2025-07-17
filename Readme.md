Here is the **full `README.md`** content for your Job Listing Application — including setup, features, folder structure, technologies used, API info, and contribution guide:

---

```markdown
# 🧑‍💼 Job Listing Application

A full-stack job listing application built using **React**, **Redux Toolkit**, **Tailwind CSS**, **Node.js**, **Express**, and **MongoDB**. This project allows users to explore job listings, filter them by location, view detailed job information, and interact with a clean, responsive UI.

---

## 🔗 Live Demo

🚧 *Coming soon...*

---

## 📁 Project Structure

```

job-listing-app/
├── backend/              # Node.js backend with Express
│   ├── controllers/      # Controller logic
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   ├── server.js         # Entry point
│   ├── .env              # Environment variables
│   └── package.json
└── frontend/             # React frontend
├── src/
│   ├── components/   # Reusable UI components
│   ├── redux/        # Redux store and slices
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── tailwind.config.js
└── package.json

````

---

## 🚀 Features

### ✅ Frontend (React + Redux + Tailwind)

- Paginated job listings
- Filter jobs by **location**
- View detailed job information
- Highlight selected job card
- Cached results to avoid duplicate API calls
- Search box with **clear input** button
- Reusable UI with **common Tailwind components**

### ✅ Backend (Node.js + Express + MongoDB)

- RESTful API with pagination
- Filter jobs using location query
- MongoDB integration with **Mongoose**
- Proper error handling and modular structure

---

## 🛠️ Tech Stack

### 🧭 Frontend

- React.js
- Redux Toolkit
- Axios
- Tailwind CSS
- Lucide React Icons

### 🧪 Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- nodemon

---

## 📦 Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
````

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/jobDB
```

4. Start the backend server:

```bash
nodemon server.js
```

> 📍 Server will run at: [http://localhost:5000](http://localhost:5000)

---

## 💻 Frontend Setup

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

> 🌐 Frontend will run at: [http://localhost:3000](http://localhost:3000)

---

## 📡 API Endpoints

| Method | Endpoint           | Description                   |
| ------ | ------------------ | ----------------------------- |
| GET    | `/api/jobs`        | Fetch paginated job listings  |
|        | `?page=1&limit=10` | (optional) Pagination         |
|        | `&location=Delhi`  | (optional) Filter by location |

**Example Request:**

```
GET http://localhost:5000/api/jobs?page=2&limit=10&location=Hyderabad
```

**Example Response:**

```json
{
  "jobs": [...],
  "currentPage": 1,
  "totalPages": 10,
  "totalJobs": 100
}
```

---

## ✨ UI Highlights

* 📄 **JobCard**: Displays title, company, location, experience, and salary
* 📋 **JobDetails**: View full job description and attributes like posted date, employment type, etc.
* 🔍 **SearchBox**: Location search input with clear (`×`) button
* 📦 **Pagination**: Loads jobs page-wise with cache for faster repeat loads

---

## 🌈 Common Tailwind Utility Classes

Defined in `index.css` under `@layer components`:

* `.btn-primary`, `.btn-secondary`, `.btn-danger`
* `.heading-lg`, `.heading-md`, `.heading-sm`
* `.card`, `.input-field`, `.label`, `.divider`

---

## 📷 Screenshots

> *Add images of your UI here — Job list view, detail view, and filter in action*

---

## 📄 .gitignore (backend)

```bash
node_modules/
.env
logs/
*.log
```

---

## 🧑‍💻 Contribution Guide

1. Fork the repository
2. Create your feature branch:

```bash
git checkout -b feature/your-feature-name
```

3. Commit your changes:

```bash
git commit -m "✨ Add your message"
```

4. Push to GitHub and create a Pull Request

---

## 📃 License

This project is licensed under the **MIT License** — feel free to use and adapt it.

---

## 🙋 Author

**Saksham Shrivastava**
Frontend Developer | Full Stack Learner
📧 [sakshamshrivastav58@gmail.com](mailto:sakshamshrivastav58@gmail.com)
🔗 [GitHub](https://github.com/sakshamshrivastav58) | [LinkedIn](https://www.linkedin.com/in/sakshamshrivastav/)

```

---

Let me know if you'd like this as a downloadable `.md` file or want to auto-generate a version with badges, GitHub repo, or deployment steps!
```
