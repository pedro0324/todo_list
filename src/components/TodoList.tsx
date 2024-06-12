import {
  Alert,
  Button,
  Dialog,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import { ListaTareas } from "./ListaTareas";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { FormTarea } from "./FormTarea";
import { TodoInterface } from "../interfaces/interTodo";
import { isEmptyObject } from "../helpers/isEmptyObject";
import { RootState, useAppSelector } from "../store/store";

/**
Create: 12/06/24 
Author: Pedro Itzmoyotl
Purpose: cuerpo de la aplicacion, esta se divide en header, body y footer
 **/
export const TodoList = () => {
  const [open, setOpen] = useState(false);
  const [tarea, settarea] = useState({} as TodoInterface);

  const { msgActualizacion, listatareas } = useAppSelector(
    (state: RootState) => state.todo
  );

  useEffect(() => {
    if (!isEmptyObject(tarea) && listatareas.find((e) => e.id === tarea.id)) {
      setOpen(true);
    }
  }, [tarea]);

  const handleAdd = () => {
    settarea({} as TodoInterface);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    settarea({} as TodoInterface);
  };

  return (
    <>
      <Grid container sx={{ height: "100vh" }}>
        {/* header */}
        <Grid
          container
          alignContent={"space-between"}
          justifyContent={"center"}
          sx={{ p: 1 }}
        >
          <Grid item>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleAdd}
            >
              Agregar tarea
            </Button>
          </Grid>
        </Grid>

        {/* body */}
        <Grid
          container
          alignContent={"space-between"}
          justifyContent={"center"}
          sx={{ p: 1, height: "80vh" }}
        >
          <ListaTareas setTarea={settarea} />
        </Grid>

        {/* footer */}
        <Grid
          container
          alignContent={"space-between"}
          justifyContent={"center"}
          sx={{ p: 1, height: "13vh" }}
        >
          <Typography>Desarrollado por: Pedro Itzmoyotl Toxqui</Typography>
        </Grid>
      </Grid>

      {/* formulario */}
      <Dialog open={open} onClose={handleClose} fullWidth>
        <FormTarea handleClose={handleClose} tarea={tarea} />
      </Dialog>

      {/* aviso de borrado, por ahora solo funciona cuando se borrar una tarea  */}
      <Snackbar open={msgActualizacion !== ""} autoHideDuration={6000}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {msgActualizacion}
        </Alert>
      </Snackbar>
    </>
  );
};
