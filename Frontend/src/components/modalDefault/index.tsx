import { Box, Button, Grid, Modal, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hoocks";
import { Tarefa } from "../../store/modules/typesStore";
import { getTarefas, putTarefa } from "../../store/modules/tarefas/tarefasSlice";
import { Height } from "@mui/icons-material";

interface ModalDefaultProps {
  open: boolean;
  handleClose: () => void;
  tarefa: Tarefa;
}

export const ModalDefault = ({ open, handleClose, tarefa }: ModalDefaultProps) => {
  const styleModal = {
    position: "absolute" as "absolute",
    width:"90%",
    top: "50%",
    left: "50%",
    borderRadius: "2px",
    transform: "translate(-50%, -50%)",
    boxShadow: "10px 10px 5px 0px rgba(158,181,242,1)",
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
    <Modal
      sx={{ ...styleModal, width: { xs: "90%", md: "auto" } }}
      open={open}      
    >
      <Box
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          padding: "20px",
          borderRadius: "2px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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