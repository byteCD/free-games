import React from "react";
import AppRouter from "../AppRouter/AppRouter";
import Container from "../Container/Container";
import Header from "../Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth={1200} padding={"0 20px"}>
        <AppRouter />
      </Container>
    </>
  );
};

export default App;
