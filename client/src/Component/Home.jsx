import NarBar from "./Home/NarBar";
import Banner from "./Home/Banner";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const Component = styled(Box)({
  padding: "10px",
  background: "#F2F2F2",
});

const Home = () => {
  return (
    <>
      <NarBar />
      <Component>
        <Banner />
      </Component>
    </>
  );
};

export default Home;
