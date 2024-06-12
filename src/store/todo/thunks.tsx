import { Status, TodoInterface } from "../../interfaces/interTodo";
import { AppDispatch, RootState } from "../store";
import { agregarTarea, cambiarStatus, quitarTarea } from "./todoSlice";

export const StartInsertTarea = (newtarea: NewTarea) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { listatareas } = getState().todo;

    const bodyNuevaTarea: TodoInterface = {
      ...newtarea,
      id: listatareas.length + 1,
      status: Status.noRealizada,
    };

    dispatch(agregarTarea(bodyNuevaTarea));

    return true;
  };
};

export const StartUpdateTarea = (id: number) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { listatareas } = getState().todo;

    const tarea = listatareas.find((tarea) => tarea.id === id);
    const nuevoStatus = tarea!.status === "S" ? "N" : "S";

    dispatch(cambiarStatus({ id, status: nuevoStatus }));

    return true;
  };
};

export const StartBorrarTarea = (id: number) => {
  return async (dispatch: AppDispatch, _: () => RootState) => {
    dispatch(quitarTarea(id));

    return true;
  };
};

export interface NewTarea {
  title: string;
  body: string;
}
