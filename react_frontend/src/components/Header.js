import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

export default function Header({ error }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.replace("http://localhost:3000");
  };
  return (
    <AppBar position="static">
      <Toolbar>
        {/*Inside the IconButton, we
		can render various icons*/}

        {/*This is a simple Menu
			Icon wrapped in Icon */}

        {/* The Typography component applies
		default font weights and sizes */}

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        {!error && (
          <Button onClick={() => navigate("/create-link")} color="inherit">
            Add Links
          </Button>
        )}
        <Button onClick={() => navigate("/change-password")} color="inherit">
          Change Password
        </Button>
        <Button onClick={() => handleLogout()} color="inherit">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
