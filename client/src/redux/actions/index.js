import axios from "axios";

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_NAMES = "GET_NAMES";
export const GET_VIDEOGAME = "GET_VIDEOGAME";
export const GET_BY_GENRES = "GET_BY_GENRES";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const ORDER_BY = "ORDER_BY";
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";
export const FILTER_BY_GENRES = "FILTER_BY_GENRES";
export const GET_PLATFORMS = 'GET_PLATFORMS'

export const getAllVideogames = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/videogames");
      return dispatch({
        type: "GET_ALL_VIDEOGAMES",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getNames = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/videogames?name=${name}`
      );
      return dispatch({
        type: "GET_NAMES",
        payload: data,
      });
    } catch (err) {
      console.error(err);
      return dispatch({
        type: "GET_NAMES",
        payload: []
      })
    }
  };
};

export const getVideogame = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/videogame/${id}`);
      return dispatch({
        type: "GET_VIDEOGAME",
        payload: data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const getByGenres = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/genres`);
      return dispatch({
        type: "GET_BY_GENRES",
        payload: data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const createVideogame = (videogame) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3001/videogame`,
        videogame
      );
      return dispatch({
        type: "CREATE_VIDEOGAME",
        payload: data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const orderBy = (payload) => {
  return {
    type: "ORDER_BY",
    payload,
  };
};

export const filterBySource = (payload) => {
  return {
    type: "FILTER_BY_SOURCE",
    payload,
  };
};

export const filterByGenres = (payload) => {
  return {
    type: "FILTER_BY_GENRES",
    payload,
  };
};

export const getPlatforms = () => {
  return async (dispatch) => {
      const url = await axios.get('http://localhost:3001/videogames/platforms')
      //console.log(url)
      return dispatch({
          type: 'GET_PLATFORMS',
          payload: url.data
      })
  }
};