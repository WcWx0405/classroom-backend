import express, { Request, Response } from "express";

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());

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