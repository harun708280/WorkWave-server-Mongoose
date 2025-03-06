import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; 
import userRoute from "./routes/userRoutes.js"
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use('api/users',userRoute)

app.get("/", (req, res) => {
    res.send("Hello from WorkWave Server");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
