import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getGames, setGamesSlice } from "../../redux/actions/gameActions";
import Container from "../Container/Container";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  const toHomePage = () => {
    dispatch(getGames(""));
    dispatch(setGamesSlice([0, 48]));
  };

  return (
    <header className="Header">
      <Container maxWidth={1200} padding={"0 20px"}>
        <Link to="/">
          <h2 onClick={toHomePage}>Free Games</h2>
        </Link>
      </Container>
    </header>
  );
};

export default Header;
