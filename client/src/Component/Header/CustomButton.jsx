import React, { useState, useContext } from "react";

import { Box, Typography, Button, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import LoginDialog from "../Login/LoginDialog";
import Profile from "./Profile";

import { LoginContext } from "../../Context/ContextProvider";

const Container = styled(Box)({
  display: "flex",
});

const Wrapper = styled(Box)(({ theme }) => ({
  margin: "0 3% 0 auto",
  display: "flex",
  "& > *": {
    marginRight: "40px !important",
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: 12,
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      color: "#2874f0",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      marginTop: 10,
    },
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)({
  color: "#2874f0",
  background: "#FFFFFF",
  textTransform: "none",
  fontWeight: 600,
  borderRadius: 2,
  padding: "5px 40px",
  height: 32,
  boxShadow: "none",
});

const CustomButton = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);

  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>

      <Container>
        <ShoppingCart />

        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
    </Wrapper>
  );
};

export default CustomButton;
