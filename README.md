# 💬 ChatCRUD App

A simple **CRUD-based Chat Application** built using **Node.js, Express, MongoDB, and EJS**.
This project demonstrates how basic backend operations work in a real-world chat system.

---

## 🚀 Features

- 📝 Create new chats
- 📄 View all chats
- ✏️ Edit messages _(can be added)_
- ❌ Delete chats _(can be added)_
- 🕒 Timestamp for each message
- 📦 MongoDB database integration

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Frontend:** EJS (Embedded JavaScript Templates)
- **Styling:** CSS

---

## 📁 Folder Structure

```
ChatCRUD-App/
│── models/
│   └── chat.js
│
│── views/
│   ├── index.ejs
│   └── new.ejs
│
│── public/
│   └── style.css
│
│── index.js
│── init.js
│── package.json
│── .gitignore
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/Siddhartha03112004/ChatCRUD-App.git
cd ChatCRUD-App
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Start MongoDB

Make sure MongoDB is running locally on:

```
mongodb://127.0.0.1:27017/whatsapp
```

### 4️⃣ Run the server

```
node index.js
```

### 5️⃣ Open in browser

```
http://localhost:8080/chats
```

---

## 🧠 What I Learned

- How to build RESTful routes in Express
- How to connect MongoDB using Mongoose
- How CRUD operations work (Create, Read, Update, Delete)
- How to render dynamic data using EJS
- Handling form data using `req.body`

---

## 🚧 Future Improvements

- 🔐 Add authentication (Login/Signup)
- ✏️ Implement Edit & Update functionality
- ❌ Add Delete route with confirmation
- 💬 Real-time chat using Socket.io
- 🎨 Improve UI with modern design

---

## 👨‍💻 Author

**Siddhartha Singh**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub
