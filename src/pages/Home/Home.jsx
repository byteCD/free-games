import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import GamesList from "../../components/GamesList/GamesList";
import { getGames } from "../../redux/actions/gameActions";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames(""));
  }, []);

  return (
    <div className="Home">
      <GamesList />
    </div>
  );
};

export default Home;
