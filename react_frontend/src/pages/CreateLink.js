import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axiosInstance from "../service/axiosConfig";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function CreateLink() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
    axiosInstance
      .post("social-link/create-get-social-link/", {
        links: data.get("link"),
      })
      .then((res) => {
        console.log(res.status);
        if (res.status == 201) {
          navigate("/");
        }
      })
      .catch((e) => {
        enqueueSnackbar(JSON.stringify(e.response.data), { variant: "error" });
        console.log("yyyy");
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Create Link
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="link"
              label="Enter Your Link"
              name="link"
              autoComplete="link"
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Link
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
