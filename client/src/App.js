import { Box } from "@mui/material";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home";
import ContextProvider from "./Context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Header />
      <Box
        style={{
          marginTop: "54px",
        }}
      >
        <Home />
      </Box>
    </ContextProvider>
  );
}

export default App;
