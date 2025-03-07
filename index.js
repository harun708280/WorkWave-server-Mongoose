import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; 
import userRoutes from "./routes/userRoutes.js"
import TaskRoutes from "./routes/taskRoutes.js"
dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));
app.use(express.json());
app.use('/api/users',userRoutes)
app.use('/api/tasks',TaskRoutes)

app.get("/", (req, res) => {
    res.send("Hello from WorkWave Server");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
