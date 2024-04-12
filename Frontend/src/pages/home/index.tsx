import { Button, Grid, TextField } from "@mui/material";
import { Wrapper } from "../../components/wrapper";
import TableHome from "../../components/tableHome";
import { CardDefault } from "../../components/cardDefault";
import { useAppDispatch } from "../../store/hoocks";
import { useEffect, useState } from "react";
import { postTarefa } from "../../store/modules/tarefas/tarefasSlice";

export const Home = () =>{
    const dispatch = useAppDispatch();

    const [description, setDescription] = useState("");

    const createTarefa = () => {
      const newTarefa = {
        description,
      };
      dispatch(postTarefa(newTarefa));
    }; 

    useEffect(()=>{},[])

    return (
      <Wrapper>
        <Grid container spacing={2} padding={2} alignItems="center">
          <Grid item xs={10}>
            <TextField
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="outlined-basic"
              label="Insira sua tarefa"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <Button size="large" onClick={createTarefa} variant="contained">
              Inserir
            </Button>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <TableHome />
          <CardDefault />          
        </Grid>
      </Wrapper>
    );
}