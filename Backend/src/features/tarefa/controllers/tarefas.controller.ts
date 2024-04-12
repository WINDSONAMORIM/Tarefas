import { Request, Response } from "express";
import { ResponseAPI } from "../../../types";
import { TarefaRepository } from "../../../database/tarefa.repository";

const repository = new TarefaRepository();

export class TarefaController{

    async createTarefa(request: Request, response: Response){
        try{
            const {description} = request.body;
            const data = {description}
            const newTarefa = await repository.createTarefa(data);

            const resposta: ResponseAPI = {
              success: true,
              message: "Tarefa cadastrado com sucesso.",
              data: newTarefa,
            };
            return response.status(200).send(resposta)
        } catch (error) {

        }
    }

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

    async putTarefa(request: Request, response: Response){
        try {
            const {idTarefa} = request.params;
            const {description} = request.body;
            const newData = {description};

            await repository.putTarefa(idTarefa, newData);
              const resposta: ResponseAPI = {
                success: true,
                message: "Tarefa editada com sucesso.",
                data: newData,
              };
              return response.status(200).send(resposta);
        } catch (error) {
            
        }
    }
    
    async deleteTarefa(request: Request, response: Response){
        try {
            const { idTarefa } = request.params;
            await repository.deleteTarefa(idTarefa) 
            
            const resposta: ResponseAPI = {
              success: true,
              message: "Tarefa excluida com sucesso.",
              data: idTarefa,
            };
            return response.status(200).send(resposta);
        } catch (error) {
            
        }
    }
}