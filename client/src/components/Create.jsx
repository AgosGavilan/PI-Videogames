import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createVideogame, getByGenres, getPlatforms } from "../redux/actions";
import NavBar from "./NavBar";

const Create = () => {
  const [input, setInput] = useState({
    name: "",
    image: "",
    description: "",
    released: "",
    rating: "",
    genres: [],
    platforms: []
  });

  const dispatch = useDispatch();
  const generos = useSelector((state) => state.genres);
  const plataformas = useSelector(state => state.platforms)
  // console.log('p:', plataformas)
  // console.log('g:', generos)

  useEffect(() => {
      dispatch(getByGenres());
      dispatch(getPlatforms())
  }, [dispatch])

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createVideogame(input));
    setInput({
      name: "",
      image: "",
      description: "",
      released: "",
      rating: "",
      genres: [],
      platforms: [],
    });
    alert("Congratulations, videogame successfully created");
  }

  function handleChange(e) {
    e.preventDefault();
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleGenres(e) {
    setInput({
      ...input,
      genres: [...input.genres, e.target.value],
    });
  }

  function handlePlatforms(e) {
    setInput({
      ...input,
      platforms: [...input.platforms, e.target.value]
    })
  }

  function handleDeleteG(e) {
    setInput({
      ...input,
      genres: input.genres.filter((gen) => gen !== e)
    });
  }

  function handleDeleteP(e) {
    setInput({
      ...input,
      platforms: input.platforms.filter((plat) => plat !== e)
    });
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>CREA TU PROPIO VIDEOJUEGO</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Imagen: </label>
          <input
            type="text"
            name="image"
            value={input.image}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Descripcion: </label>
          <input
            type="text"
            name="description"
            value={input.description}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Fecha de lanzamiento: </label>
          <input
            type="text"
            name="released"
            value={input.released}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Rating: </label>
          <input
            type="text"
            name="rating"
            value={input.rating}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Generos: </label>
          <select id="genres" defaultValue="" onChange={(e) => handleGenres(e)}>
            <option value='' disabled hidden>Elija los géneros...</option>
            {generos.map((g) => {
              return (
                <option key={g.id} value={g.name}>{g.name}</option>
              );
            })}
          </select>
          {input.genres.map((g) => (
            <div>
              <span>{g}</span>
              <button onClick={() => handleDeleteG(g)}>X</button>
            </div>
      ))}
        </div>
        <div>
            <label>Plataformas:  </label>
            <select id="platforms" defaultValue="" onChange={(e) => handlePlatforms(e)}>
                <option value="" disabled hidden>Elija las plataformas...</option>
                {plataformas?.map(p => {
                    return (
                        <option value={p} key={p}>{p}</option>
                    );
                })}
            </select>
            {input.platforms.map((p) => (
              <div>
                <span>{p}</span>
                <button onClick={() => handleDeleteP(p)}>X</button>
              </div>
            ))}
        </div>
        <div>
          <button type="submit">Create Videogame</button>
        </div>
      </form>
      {/* {input.genres.map((g) => (
        <div>
          <span>{g}</span>
          <button onClick={() => handleDeleteG(g)}>X</button>
        </div>
      ))} */}
      {/* {input.platforms.map((p) => (
        <div>
          <span>{p}</span>
          <button onClick={() => handleDeleteP(p)}>X</button>
        </div>
      ))} */}

    </div>
  );
};

export default Create;
