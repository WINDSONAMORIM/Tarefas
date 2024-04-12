import { Request, Response } from "express";
import { ResponseAPI } from "../../../types";
import { TarefaRepository } from "../../../database/tarefa.repository";

const repository = new TarefaRepository();

export class TarefaController{

    // createTarefa(request: Request, response: Response){
    //     try{
    //         const {description} = request.body;
    //         const newTarefa = new Tarefa({description});
    //         // const index = listTarefas.findIndex((tarefa) => tarefa.id === idTarefa)
    //         listTarefas.push(newTarefa);

    //         const resposta: ResponseAPI = {
    //           success: true,
    //           message: "Tarefa cadastrado com sucesso.",
    //           data: newTarefa,
    //         };
    //         return response.status(200).send(resposta)
    //     } catch (error) {

    //     }
    // }

    async getTarefas(request: Request, response: Response){
        try {
            const tarefas = await repository.getTarefas();

            const resposta: ResponseAPI = {
              success: true,
              message: "Tarefas buscadas com sucesso.",
              data: tarefas,
            };
            return response.status(200).send(resposta);
        } catch (error) {
            
        }
    }

    // putTarefa(request: Request, response: Response){
    //     try {
    //         const {idTarefa} = request.params;
    //         const {description} = request.body
    //         const indexTarefa = listTarefas.findIndex((tarefa)=>tarefa.id === idTarefa)
    //         const oldTarefa = listTarefas[indexTarefa];
    //         listTarefas[indexTarefa].description = description ?? oldTarefa.description;
    //           const resposta: ResponseAPI = {
    //             success: true,
    //             message: "Tarefa editada com sucesso.",
    //             data: listTarefas[indexTarefa].description,
    //           };
    //           return response.status(200).send(resposta);
    //     } catch (error) {
            
    //     }
    // }
    
    // deleteTarefa(request: Request, response: Response){
    //     try {
    //         const { idTarefa } = request.params;
    //         const indexTarefa = listTarefas.findIndex(
    //           (tarefa) => tarefa.id === idTarefa
    //         );
    //         const [tarefaDeletada] = listTarefas.splice(indexTarefa,1);
    //         const resposta: ResponseAPI = {
    //           success: true,
    //           message: "Tarefa excluida com sucesso.",
    //           data: tarefaDeletada,
    //         };
    //         return response.status(200).send(resposta);
    //     } catch (error) {
            
    //     }

    // }

}