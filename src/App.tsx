import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import {Header} from "./components/Header";
import Dashboard from "./components/Dashboard";
import { CssBaseline } from "@mui/material";
import Products from "./components/Products";
import Customers from "./components/Customers";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Router>
      <Header toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
      <Routes>
        <Route path="/" element={<Dashboard drawerOpen={drawerOpen} />} />
        <Route
          path="/dashboard"
          element={<Dashboard drawerOpen={drawerOpen} />}
        />
        <Route
          path="/products"
          element={<Products drawerOpen={drawerOpen} />}
        />
        <Route
          path="/customers"
          element={<Customers drawerOpen={drawerOpen} />}
        />
      </Routes>
    </Router>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "dark" ? "#21295c" : "#f0f0f0",
          },
          secondary: {
            main: mode === "dark" ? "#fff6e0" : "#665429",
          },
          background: {
            default: mode === "dark" ? "#191f45" : "#FFFFFF",
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export { ColorModeContext };
