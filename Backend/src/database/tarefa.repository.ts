import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./config";

const tarefasCollectionRef = collection(db, "tarefas");

export class TarefaRepository {
  async getTarefas(): Promise<any> {
    const data = await getDocs(tarefasCollectionRef);
    const listTarefas = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(listTarefas);
    return listTarefas;
  }

  async createTarefa(tarefaData: any): Promise<any> {
    try {
      const docRef = await addDoc(tarefasCollectionRef, tarefaData);
      return { id: docRef.id, ...tarefaData };
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error;
    }
  }

  async deleteTarefa(tarefaId: string): Promise<void> {
    try {
      await deleteDoc(doc(db, "tarefas", tarefaId));
    } catch (error) {
      console.error("Error deleting document: ", error);
      throw error;
    }
  }

  async putTarefa(tarefaId: string, newData: any): Promise<void> {
    try {
      const tarefaRef = doc(db, "tarefas", tarefaId);
      await updateDoc(tarefaRef, newData);
    } catch (error) {
      console.error("Error updating document: ", error);
      throw error;
    }
  }
}

// TarefaRepository();
