import React from "react";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 30,
      }}
    >
      <CircularProgress sx={{ color: "#06AF7F" }} />
    </Box>
  );
};

export default Loading;
