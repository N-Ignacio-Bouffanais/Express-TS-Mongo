import "dotenv/config"
import express from "express";
import path from "path";
import cors from "cors";
import morgan from "morgan";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { task_router } from "./routes/task";
import db from "./config/mongo";
import { options } from "./config/swaggerOptions";

const especs = swaggerJSDoc(options)
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
app.use("/docs", swaggerUi.serve, swaggerUi.setup(especs));

// DB connection
db().then(() => console.log("Database connected"));
app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`),
  console.log(`Documentation will be available at http://localhost:${PORT}/docs`)
});