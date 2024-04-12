import { Box, Button, Grid, Modal, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hoocks";
import { Tarefa } from "../../store/modules/typesStore";
import { getTarefas, putTarefa } from "../../store/modules/tarefas/tarefasSlice";

interface ModalDefaultProps {
  open: boolean;
  handleClose: () => void;
  tarefa: Tarefa;
}

export const ModalDefault = ({ open, handleClose, tarefa }: ModalDefaultProps) => {
  const styleModal = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
   useEffect(() => {
     if (tarefa) {
       setTitle(tarefa.id);
       setDescription(tarefa.description);
     }
   }, [tarefa, dispatch]);


  const editTarefa = () => {
    const newTarefa = {
        id: tarefa.id,
        description,
      }; 
    dispatch(putTarefa(newTarefa)).then(() =>{
      dispatch(getTarefas());
    })
    handleClose();
  };

  return (
    <Modal sx={styleModal} open={open}>
      <Box
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          padding: "20px",
        }}
      >
        <Typography variant="h6">ALTERAR TAREFA</Typography>
        <Typography>Preencha os campos que deseja alterar</Typography>
        <Grid
          container
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ mt: 1 }}
        >
          <Grid item xs={12}>
            <TextField
              label="Altere o título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Altere a descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button variant="outlined" onClick={editTarefa}>
                Alterar
              </Button>
              <Button variant="outlined" onClick={handleClose}>
                Fechar
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}