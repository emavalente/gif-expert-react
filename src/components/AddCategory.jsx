import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  // Este estado guarda el valor escrito en input.
  const [inputValue, setinputValue] = useState("");

  // setea el estado con el valor actual del input.
  const handleOnChange = (e) => {
    console.log(e.target.value);
    setinputValue(e.target.value);
  };

  // ejecuta la funcion que viene de las props con el valor de estado.
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length < 1) return;

    // setCategories((categories) => [...categories, inputValue]);
    onNewCategory(inputValue.trim());

    // resetea el estado.
    setinputValue("");
  };

  return (
    <form
      //   onSubmit={(e) => {
      //     handleOnSubmit(e);
      //   }}
      onSubmit={handleOnSubmit}
    >
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={handleOnChange}
      />
    </form>
  );
};
