import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Icon,
  Typography,
} from "@mui/material";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { TodoInterface } from "../interfaces/interTodo";
import { setMsgActualizacionWithTimeout } from "../store/todo/todoSlice";
import { StartBorrarTarea } from "../store/todo/thunks";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

interface ListatareaInterf {
  setTarea: Function;
}

/**
Create: 12/06/24 
Author: Pedro Itzmoyotl
Purpose: mostrar la lista de tareas creadas o en su defecto un aviso de que no hay ninguna creada
 **/
export const ListaTareas = ({ setTarea }: ListatareaInterf) => {
  const { listatareas } = useAppSelector((state: RootState) => state.todo);
  const dispatch = useAppDispatch();

  const handleBorrar = (id: number) => {
    dispatch(StartBorrarTarea(id)).then((e) =>
      e ? dispatch(setMsgActualizacionWithTimeout("Tarea borrada")) : null
    );
  };

  const Tarea = ({ tarea }: { tarea: TodoInterface }) => {
    return (
      <Grid item sx={{ p: 1 }}>
        <Card
          onClick={() => setTarea(tarea)}
          key={tarea.id}
          sx={{
            backgroundColor:
              tarea.status === "S" ? "lightgreen" : "lightyellow",
          }}
        >
          <CardContent>
            <Typography>Titulo: {tarea.title}</Typography>
            <Typography>Tarea: {tarea.body}</Typography>
            <Typography>
              Status: {tarea.status === "S" ? "Realizada" : "No Realizada"}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" onClick={() => handleBorrar(tarea.id)}>
              Borrar
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  };

  return (
    <Grid container sx={{ p: 2 }}>
      {listatareas.length > 0 ? (
        listatareas.map((t) => {
          return <Tarea tarea={t} key={t.id} />;
        })
      ) : (
        <SinTareas />
      )}
    </Grid>
  );
};

const SinTareas = () => {
  return (
    <Card>
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography>Sin tareas creadas</Typography>
        <Icon>
          <SentimentSatisfiedAltIcon />
        </Icon>
      </CardContent>
    </Card>
  );
};
