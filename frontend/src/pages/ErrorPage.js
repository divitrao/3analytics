import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { CLIENT_BASE_URL } from "../esg_project_config";
import UFOLogo from "../assets/ufo-green.png";

const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "1.5rem",
            sm: "1.5rem",
            md: "1.8rem",
            lg: "1.8rem",
            xl: "2rem",
          },
          fontWeight: "bold",
          color: "#047857",
          fontFamily: "-apple-system, sans-serif",
          mt: 5,
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          // navigate("/");
          window.location.href = `${CLIENT_BASE_URL}`;
        }}
      >
        Environment, Social and Governance (ESG) Risk Ratings
      </Typography>
      <Card
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          mt: 5,
          elevation: 5,

          justifyContent: "center",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
          borderRadius: "10px",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "-apple-system, sans-serif",
                fontSize: {
                  xs: "1rem",
                  sm: "1rem",
                  md: "1.2rem",
                  lg: "1.2rem",
                  xl: "1.5rem",
                },
              }}
            >
              It seems that you are in the wrong place. Please click the button
              to go to the Dashboard
            </Typography>
            <Box
              component="img"
              src={UFOLogo}
              sx={{
                width: "10rem",
                height: "10rem",
                opacity: "0.8",
              }}
            />
            <Button
              variant="contained"
              onClick={() => {
                // navigate("/");
                window.location.href = `${CLIENT_BASE_URL}`;
              }}
              size="medium"
              sx={{
                backgroundColor: "#047857",
                color: "#fff",
                transition: "all 0.3s linear",
                "&:hover": {
                  backgroundColor: "#10b981",
                },
                border: "1px solid #10b981",

                // p: { xs: 1, sm: 1, md: 1, lg: 2, xl: 2 },

                textAlign: "center",
                fontFamily: "-apple-system, sans-serif",
                textTransform: "none",
                fontWeight: "100",
              }}
            >
              Back to ESG Dashboard
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ErrorPage;
