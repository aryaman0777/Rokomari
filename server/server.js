import cookieParser from "cookie-parser";
import cors from "cors";
import 'dotenv/config';
import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
connectDB();
const port = process.env.PORT || 4000;

const allowedOrigins = ['http://localhost:5173']

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:allowedOrigins, credentials:true}))

app.get('/', (req, res) => res.send("API is Working fine"));

app.use('/api/auth', authRoutes);
app.use('/api/job', jobRoutes);
app.use('/api/user/',userRoutes)



app.listen(port, () => console.log(`Server started on Port:${port}`));
