import express, { Application, Request, Response } from "express";
import { initialPage } from "./initialPage";
import { tarefaRoutes } from "../features/tarefa/tarefa.routes";

const routesApp = (app: Application) => {
  const router = express.Router();

  app.use("/", router);

  router.get("/", (request: Request, response: Response) => 
    response.send(initialPage)
  );

  tarefaRoutes(router);
};

export { routesApp };
