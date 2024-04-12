import { combineReducers } from "redux";
import { tarefasReducer } from "./tarefas/tarefasSlice";


const rootReducer = combineReducers({
  tarefas: tarefasReducer,
});

export { rootReducer };
