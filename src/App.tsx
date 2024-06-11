import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SideDrawer from "./components/SideDrawer";
import Button from "@mui/material/Button";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = (newOpen: boolean) => () => {
    setDrawerOpen(newOpen);
  };

  return (
    <Router>
      <div>
        <Button onClick={toggleDrawer(true)} className="absolute top-4 left-4">
          <MenuOutlinedIcon />
        </Button>
        <SideDrawer toggleDrawer={toggleDrawer} open={drawerOpen} />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
