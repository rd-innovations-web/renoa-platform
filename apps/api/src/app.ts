import cors from "cors";
import express from "express";
import helmet from "helmet";

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: process.env.WEB_ORIGIN ?? "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    service: "renoa-api",
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

export { app };