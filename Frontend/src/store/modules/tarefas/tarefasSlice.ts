import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../..";
import { apiDelete, apiGet, apiPost, apiPut } from "../../../services/ApiService";
import { ResponseAPI } from "../../../services/types";
import { Tarefa } from "../typesStore";

const adapter = createEntityAdapter<Tarefa>();

export const { selectAll: buscarTarefas, selectById: buscarTarefaPorId } =
  adapter.getSelectors((state: RootState) => state.tarefas);

export const getTarefas = createAsyncThunk("tarefa/getTarefas", async () => {
  const resposta = await apiGet("/tarefa");
  return resposta;
});

export const postTarefa = createAsyncThunk("tarefa/postTarefa",
  async (dados: any) => {
    const resposta = await apiPost(`/tarefa`, dados);
    return resposta;
  }
);

export const deleteTarefa = createAsyncThunk(
  "users/deleteTarefa",
  async (dados: any) => {
    const resposta = await apiDelete(`/tarefa/${dados}`,);
    return resposta;
  }
);

export const putTarefa = createAsyncThunk(
  "users/putTarefa",
  async (dados: any) => {
    const resposta = await apiPut(`/tarefa/${dados.id}`,dados);
    console.log(`id: ${dados.id} descrição: ${dados.description}`)
    return resposta;
  }
);

const tarefasSlice = createSlice({
  name: "tarefas",
  initialState: adapter.getInitialState(),
  reducers: {
    //adicionarNovoRecado: adapter.addOne,
    //adicionarRecados: adapter.addMany,
    /*atualizarRecado: adapter.updateOne,
    deletarRecado: adapter.removeOne,
    limparRecados: adapter.removeAll,*/
  },
  extraReducers: (builder) => {
    builder.addCase(
      postTarefa.fulfilled,
      (state, action: PayloadAction<ResponseAPI>) => {
        if (action.payload.success) {
          adapter.addOne(state, action.payload.data);
        }
      }
    );
    builder.addCase(
      getTarefas.fulfilled,
      (state, action: PayloadAction<ResponseAPI>) => {
        if (action.payload.success) {
          adapter.setAll(state, action.payload.data);
        }
      }
    );
    builder.addCase(
      deleteTarefa.fulfilled,
      (state, action: PayloadAction<ResponseAPI>) => {
        if (action.payload.success) {
          adapter.removeOne(state, action.payload.data.id);
        }
      }
    );
    builder.addCase(
      putTarefa.fulfilled,
      (state, action: PayloadAction<ResponseAPI>) => {
        if (action.payload.success) {
          adapter.updateOne(state, action.payload.data);
        }
      }
    );
  },
});

export const {} = tarefasSlice.actions;
export const tarefasReducer = tarefasSlice.reducer;
