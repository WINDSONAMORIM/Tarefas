import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { blue, red } from "@mui/material/colors";

import { useAppDispatch, useAppSelector } from "../../store/hoocks";
import { Grid } from "@mui/material";
import { ModalDefault } from "../modalDefault";
import { deleteTarefa, getTarefas } from "../../store/modules/tarefas/tarefasSlice";
import { Tarefa } from "../../store/modules/typesStore";

export default function TableHome() {
  const tarefas = useAppSelector((state) => state.tarefas);

  const [openModal, setOpenModal] = useState(false);
  // const [idSelecionado, setIdSelecionado] = useState('');
  const [tarefaSelecionada, setTarefaSelecionada] = useState<Tarefa>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTarefas())
    console.log("oi")
  }, [dispatch]);

  const handleEdit = (tarefa: Tarefa) => {
    setTarefaSelecionada(tarefa);
    setOpenModal(true);
  };

  const handleDelete = (id: string) => {
    // setIdSelecionado(id);
    dispatch(deleteTarefa(id)).then(()=>{
      dispatch(getTarefas());
    });
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


  return (
    <Grid item md={12} margin={1} sx={{ display: { xs: "none", md: "flex" } }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead sx={{ backgroundColor: " #040d5e6e " }}>
            <TableRow>
              <TableCell>#</TableCell>
              {/* <TableCell>Titulo</TableCell> */}
              <TableCell>Descrição</TableCell>
              <TableCell align="center">Ação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(tarefas.entities).map((tarefa, index) => (
              <TableRow
                key={tarefa?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{tarefa?.description}</TableCell>
                <TableCell align="center">
                  <EditIcon
                    sx={{ color: blue[900], marginRight: 2 }}
                    onClick={() => handleEdit(tarefa)}
                  />
                  <DeleteIcon
                    sx={{ color: red[900], marginRight: 2 }}
                    onClick={() => handleDelete(tarefa?.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalDefault
        open={openModal}
        handleClose={handleCloseModal}
        tarefa={tarefaSelecionada || { id: "", description: "" }}
      />
    </Grid>
  );
}
