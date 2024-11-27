import axios from "axios";
import { apikey } from "./getApikey";

const BASE_URL = "https://api.themoviedb.org/3";

export const tmdbService = {
  getMovieList: (page: string, query: string) => {
    const endpoint = query
      ? `${BASE_URL}/search/movie?api_key=${apikey}&query=${query}&page=${page}`
      : `${BASE_URL}/discover/movie?api_key=${apikey}&sort_by=popularity.desc&page=${page}`;

    return axios.get(endpoint);
  },
};
