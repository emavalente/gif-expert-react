import React, { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

// Ejemplo de useEffect - quiero que cuando se renderize el componente por primera vez se dispare un efecto.
// llamese efecto a alguna tarea o reaccion.

export const GifGrid = ({ category }) => {
 
  const { gifs, isLoading } = useFetchGifs(category);
  console.log({ gifs, isLoading });
  return (
    <>
      <h3>{category}</h3>
      { isLoading && ( <h2>LOADING...</h2>)}
      <div className="card-grid">
        {/* Con el estado genero la lista */}
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};

// {...gif} -> exparso las propiedades del elemento.
