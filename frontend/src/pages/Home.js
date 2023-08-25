import * as React from "react";
import Header from "../components/Header";
import PinnedSubheaderList from "../components/List";
import { Box } from "@mui/material";
import axiosInstance from "../service/axiosConfig";
import Loading from "../components/Loading";

const Home = () => {
  const [showLoader, setShowLoader] = React.useState(true);
  const [linkList, setShowLinkList] = React.useState([]);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    axiosInstance
      .get("social-link/create-get-social-link/")
      .then((res) => {
        console.log(res.status);
        if (res.status == 200) {
          console.log(res.data);
          setShowLinkList(res.data);
          setShowLoader(false);
        }
      })
      .catch((e) => {
        setError(true);
        setShowLoader(false);
      });
  }, []);

  return (
    <>
      {showLoader ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {error ? (
              "you are not allowed to access data"
            ) : (
              <PinnedSubheaderList linkList={linkList} />
            )}
          </Box>
        </>
      )}
    </>
  );
};

export default Home;
