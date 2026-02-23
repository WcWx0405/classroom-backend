import express, { Request, Response } from "express";
import subjectsRouter from "./routes/subjects";
import cors from "cors";

const app = express();
const PORT = 8000;

// Cors
if(!process.env.FRONTEND_URL) throw new Error("FRONTEND_URL is required");

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}))

// Middleware
app.use(express.json());

// Subjects Route
app.use('/api/subjects', subjectsRouter)

// Root route
app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Server is running 🚀"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});