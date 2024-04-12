import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../store/hoocks";
import { Grid } from "@mui/material";

export const CardDefault = () => {
  const tarefas = useAppSelector((state) => state.tarefas);

  return (
    // <Grid item spacing={2} xs={12} sx={{ display: { xs: "flex", md: "none" } }}>
    <>
      {Object.values(tarefas.entities).map((tarefa, index) => (
        <Grid item xs={12} sx={{ display: { xs: "flex", md: "none" } }}>
          <Card sx={{ minWidth: 275, margin: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Tarefa
              </Typography>
              <Typography variant="body2">{tarefa.description}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};
