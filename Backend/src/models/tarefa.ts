import { randomUUID } from "crypto";

export interface  TarefaDTO {
    description: string;
}

export class Tarefa {
    id: string;
    description: string;

    constructor(params: TarefaDTO){
        this.id = randomUUID();
        this.description = params.description
    }
}