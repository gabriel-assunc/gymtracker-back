import cors from "cors";
import morgan from "morgan";
import express from "express";
import { router } from "./Router/router";

const app = express();
const MORGAN_PATTERN = ':method :url :status :res[content-length] - :response-time ms';

app.use(cors())
app.use(morgan(MORGAN_PATTERN));
app.use(express.json());
app.use(router);

export default app;
