import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Hello from Node.js + Docker + Nodemon!, This is auto hot reload");
});

app.get("/api/todos", (req, res) => {
  res.json([
    { id: 1, task: "Learn Docker", done: false },
    { id: 2, task: "Write Node.js API", done: true },
    { id: 3, task: "Hot reload with Nodemon", done: false }
  ]);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
