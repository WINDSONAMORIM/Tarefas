import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

const tarefasCollectionRef = collection(db, "tarefas");

export class TarefaRepository {
//   repository = new TarefaRepository();

  async getTarefas(): Promise<any> {
    const data = await getDocs(tarefasCollectionRef);
    const listTarefas = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(listTarefas);
    return listTarefas;
  }
};

// TarefaRepository();
