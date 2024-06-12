import { createSlice } from "@reduxjs/toolkit";
import { TodoInterface } from "../../interfaces/interTodo";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    listatareas: [] as TodoInterface[],
    msgActualizacion: "",
  },
  reducers: {
    agregarTarea: (state, { payload }) => {
      state.listatareas.push(payload);
    },
    quitarTarea: (state, { payload }) => {
      const nuevastareas = state.listatareas.map((item) => {
        if (item.id !== payload) {
          return item;
        } else {
          return undefined; // Devolver undefined cuando el item debe ser eliminado
        }
      });

      state.listatareas = nuevastareas.filter(
        (item): item is TodoInterface => item !== undefined
      ); // Filtrar los elementos undefined
    },
    setMsgActualizacion: (state, { payload }) => {
      state.msgActualizacion = payload;
    },
    cambiarStatus: (state, { payload }) => {
      const { id, status } = payload;

      state.listatareas = state.listatareas.map((item) => {
        if (item.id === id) {
          return { ...item, status: status };
        }
        return item;
      });
    },
  },
});

let timeoutId: any; // Variable para almacenar el identificador del timeout

export const { setMsgActualizacion, quitarTarea, agregarTarea, cambiarStatus } =
  todoSlice.actions;

// Este es el método que actualiza el mensaje y programa el timeout
export const setMsgActualizacionWithTimeout =
  (payload: string) => (dispatch: any) => {
    dispatch(setMsgActualizacion(payload));

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      dispatch(setMsgActualizacion(""));
      timeoutId = null;
    }, 5000);
  };
