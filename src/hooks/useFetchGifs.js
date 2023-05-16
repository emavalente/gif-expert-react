import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  // Inicializo el estado que contendra la lista de gift
  const [gifs, setGifts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Realizo la petición asincrona por fuera del useEffect.
  const callGifts = async () => {
    const gifsList = await getGifs(category);

    // seteo el estado con la respuesta de la petición
    setGifts(gifsList);
    setIsLoading(false);
  };

  useEffect(() => {
    // Llamo a la funcion que genera la petición y setea el estado.
    callGifts();
  }, []);

  return {
    gifs: gifs,
    isLoading: isLoading,
  };
};
