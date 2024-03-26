import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
// Assigning a default port of 5000 if PORT is not defined in .env
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import { connecttoMongoDB } from "./db/connectToMongoDB.js";
import userRoutes from "./routes/user.routes.js";

//setting up routes
import { app, server } from "./socket/socket.js";

const __dirname = path.resolve();

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
server.listen(PORT, () => {
  connecttoMongoDB();

  console.log(`Server is running on port ${PORT}`);
});
