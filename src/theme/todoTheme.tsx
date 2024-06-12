import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import * as locales from "@mui/material/locale";

//se define una interface, para que acepte el children como argumento
interface AppThemeProps {
  children: React.ReactNode;
}

export const AppTheme = ({ children }: AppThemeProps) => {
  //children son los componentes hijos
  return (
    <ThemeProvider theme={todoTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

// tema de la aplicacion
export const todoTheme = createTheme(
  {
    palette: {
      mode: "light",
      primary: {
        main: "#092142",
      },
      secondary: {
        main: "#F27920",
      },
    },
    shape: {
      borderRadius: 4,
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
  },
  locales["esES"]
);
