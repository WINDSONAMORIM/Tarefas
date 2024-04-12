import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLorm-fqAnEtY0htLwlor84LTiU4-Vau4",
  authDomain: "tarefas-5fce1.firebaseapp.com",
  projectId: "tarefas-5fce1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
