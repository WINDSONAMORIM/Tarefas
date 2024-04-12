import { Router } from "express";
import { TarefaController} from "./controllers";

export const tarefaRoutes = (router: Router) => {
    const tarefaController = new TarefaController();
    
    // router.post("/tarefa", tarefaController.createTarefa);
    router.get("/tarefa", tarefaController.getTarefas);
    // router.put("/tarefa/:idTarefa", tarefaController.putTarefa)
    // router.delete("/tarefa/:idTarefa", tarefaController.deleteTarefa)
}