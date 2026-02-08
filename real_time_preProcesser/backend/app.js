import express from "express";
import cors from "cors";
import recordRoutes from "./routes/record.rout.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/records", recordRoutes);

export default app;
