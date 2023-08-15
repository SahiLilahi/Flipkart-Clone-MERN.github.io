import { Box } from "@mui/material";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home";

function App() {
  return (
    <div>
      <Header />
      <Box
        style={{
          marginTop: "54px",
        }}
      >
        <Home />
      </Box>
    </div>
  );
}

export default App;
