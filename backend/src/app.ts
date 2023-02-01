import "dotenv/config"
import express from "express";
import path from "path";
import cors from "cors";
import morgan from "morgan";
import { task_router } from "./routes/task";
import db from "./config/mongo";

const PORT = process.env.PORT || 3001;
const app = express();


app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", task_router);

// DB connection
db().then(() => console.log("Database connected"));
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));