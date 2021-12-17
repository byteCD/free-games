import React from "react";
import { Route, Routes } from "react-router-dom";
import Game from "../../pages/Game/Game";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/game/:id" element={<Game />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
