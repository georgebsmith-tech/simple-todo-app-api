import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";

import cors from "cors";
import { tasksRoutes } from "./routes";

dotenv.config();

const app: express.Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//@ts-ignore
const db: string = process?.env?.MONGO_URI;
connect(db, {})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.send("We're up and running");
});
app.use("/api/tasks", tasksRoutes);

app.use((req, res, next) => {
  const error: any = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500);
  res.json({
    error: {
      status: error.status || 500,
      message: error.message
    }
  });
});

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log("App is running at port " + PORT);
});
