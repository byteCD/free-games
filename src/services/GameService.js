import axios from "axios";

class GameService {
  async getGames({ platform, category }) {
    let query;

    if (platform && category) {
      query = `platform=${platform}&category=${category}`;
    } else if (platform) {
      query = `platform=${platform}`;
    } else if (category) {
      query = `category=${category}`;
    } else {
      query = "";
    }

    return axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?${query}`,
      {
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      }
    );
  }

  async getGame(id) {
    return axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      {
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      }
    );
  }
}

export default new GameService();
