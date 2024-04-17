import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { blue, red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "../../store/hoocks";
import { Grid } from "@mui/material";
import { Tarefa } from "../../store/modules/typesStore";
import { deleteTarefa, getTarefas } from "../../store/modules/tarefas/tarefasSlice";
import { ModalDefault } from "../modalDefault";

export const CardDefault = () => {
  const tarefas = useAppSelector((state) => state.tarefas);

  const [openModal, setOpenModal] = React.useState(false);
  const [tarefaSelecionada, setTarefaSelecionada] = useState<Tarefa>();

  const dispatch = useAppDispatch();

    const handleEdit = (tarefa: Tarefa) => {
      setTarefaSelecionada(tarefa);
      setOpenModal(true);
    };

    const handleDelete = (id: string) => {
      dispatch(deleteTarefa(id)).then(() => {
        dispatch(getTarefas());
      });
    };

    const handleCloseModal = () => {
      setOpenModal(false);
    };

  return (
    <>
      {Object.values(tarefas.entities).map((tarefa, index) => (
        <Grid
          item
          key={index}
          xs={12}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <Card
            sx={{
              minWidth: 275,
              margin: 2,
              borderRadius: "10px",
              boxShadow: "10px 10px 5px 0px rgba(158,181,242,1);",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Tarefa
              </Typography>
              <Typography variant="body2">{tarefa.description}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <EditIcon
                sx={{ color: blue[900], marginRight: 2 }}
                onClick={() => handleEdit(tarefa)}
              />
              <DeleteIcon
                sx={{ color: red[900], marginRight: 2 }}
                onClick={() => handleDelete(tarefa?.id)}
              />
            </CardActions>
          </Card>
          <ModalDefault
            open={openModal}
            handleClose={handleCloseModal}
            tarefa={tarefaSelecionada || { id: "", description: "" }}
          />
        </Grid>
      ))}
    </>
  );
};
