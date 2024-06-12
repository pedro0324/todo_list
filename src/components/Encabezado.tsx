import { Grid, Typography } from "@mui/material";

/**
Create: 12/06/24
Author: Pedro Itzmoyotl
Purpose: Encabezado de la aplicacion
 **/
export const Encabezado = () => {
  return (
    <Grid container alignContent={"center"} justifyContent={"center"} sx={{p:1}}>
      <Typography
        color={"secondary.main"}
        variant="h5"
        fontStyle={"italic"}
        sx={{ mr: 2}}
      >
        TODO
      </Typography>
      <Typography color={"secondary.main"} variant="subtitle1">
        Lista de tareas para demostración
      </Typography>
    </Grid>
  );
};
