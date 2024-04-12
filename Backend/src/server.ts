import express from "express";
import "dotenv/config";
import cors from "cors";

import { routesApp } from "./config/routes";
import { listTarefasFirebase } from "./database";

const app = express();
app.use(cors());
app.use(express.json());

routesApp(app);

app.listen(process.env.PORT, () => console.log("servidor iniciado"));
