import { AppTheme } from "./theme/todoTheme";
import { Encabezado } from "./components/Encabezado";
import { TodoList } from "./components/TodoList";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <AppTheme>
      <Grid
        container
        alignContent={"center"}
        justifyContent={"center"}
        height={"100%"}
      >
        <Grid container sx={{ backgroundColor: "primary.main" }}>
          <Encabezado />
        </Grid>
        <Grid container sx={{ backgroundColor: "whitesmoke" }} height={"100%"}>
          <TodoList />
        </Grid>
      </Grid>
    </AppTheme>
  );
}

export default App;
