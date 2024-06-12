import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { TodoInterface } from "../interfaces/interTodo";
import { useAppDispatch } from "../store/store";
import { isEmptyObject } from "../helpers/isEmptyObject";
import { StartInsertTarea, StartUpdateTarea } from "../store/todo/thunks";

interface FNT {
  handleClose: Function;
  tarea: TodoInterface; // mostrar u ocultar campos de registro,
}

export const FormTarea = ({ handleClose, tarea }: FNT) => {
  const dispatch = useAppDispatch();
  const [titulo, settitulo] = useState(tarea.title ? tarea.title : "");
  const [body, setbody] = useState(tarea.body ? tarea.body : "");
  const [realizada, setrealizada] = useState(
    tarea.status ? tarea.status === "S" : true ? false : false
  );

  const esNuevo=isEmptyObject(tarea);

  const [errorTitulo, setErrorTitulo] = useState(false);
  const [errorBody, setErrorBody] = useState(false);

  const handleChangeTitulo = (e: any) => {
    const value = e.target.value;
    settitulo(value);
  };

  const handleChangeBody = (e: any) => {
    const value = e.target.value;
    setbody(value);
  };

  const handleChangeRealizada = (e: any) => {
    const value = e.target.checked;
    setrealizada(value);

    dispatch(StartUpdateTarea(tarea.id));

  };

  const handleUpdateCreateTarea = () => {
    if (tarea.title) {
      handleClose();
    } else {
      // create
      setErrorTitulo(titulo.length <= 0 ? true : false);
      setErrorBody(body.length <= 0 ? true : false);

      if (titulo.length <= 0 || body.length <= 0) return;

      dispatch(
        StartInsertTarea({
          title: titulo,
          body: body,
        })
      ).then((e) => (e ? handleClose() : null));
    }
  };

  return (
    <>
      <DialogTitle>
        {" "}
        <Typography>
          {tarea.id ? `Tarea N#:  ${tarea.id}` : "Nueva Tarea"}
        </Typography>
      </DialogTitle>
      <DialogContent>
        {/* titulo */}
        <FormControl sx={{ width: "100%", mt: 1 }}>
          <InputLabel htmlFor={"titulo"}>TITULO</InputLabel>
          <OutlinedInput
            id={"titulo"}
            label={"TITULO"}
            name={"titulo"}
            value={titulo}
            onChange={handleChangeTitulo}
            error={errorTitulo}
            disabled={!esNuevo}
          />
          <FormHelperText>{errorTitulo ? "Escriba" : ""}</FormHelperText>
        </FormControl>

        {/* body */}
        <FormControl sx={{ width: "100%", mt: 1 }}>
          <InputLabel htmlFor={"body"}>TAREA</InputLabel>
          <OutlinedInput
            id={"body"}
            label={"TAREA"}
            name={"body"}
            value={body}
            onChange={handleChangeBody}
            error={errorBody}
            disabled={!esNuevo}
          />
          <FormHelperText>{errorBody ? "Escriba" : ""}</FormHelperText>
        </FormControl>

        {/* status */}
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ mt: 1, opacity: !isEmptyObject(tarea) ? 1 : 0.5 }}
        >
          <Typography>No Realizada</Typography>
          <FormControlLabel
            control={<Switch checked={realizada} />}
            label=""
            disabled={isEmptyObject(tarea)}
            onChange={handleChangeRealizada}
          />
          <Typography>Realizada</Typography>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          width={"100%"}
          sx={{
            mt: 1,
          }}
        >
          <Button
            onClick={() => handleClose()}
            variant="outlined"
            color="warning"
          >
            Cerrar
          </Button>
          <Button
            onClick={() => handleUpdateCreateTarea()}
            variant="contained"
            color="success"
          >
            Aceptar
          </Button>
        </Stack>
      </DialogActions>
    </>
  );
};
