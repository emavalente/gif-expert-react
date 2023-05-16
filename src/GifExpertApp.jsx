import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


// Este componente es el componente principal o punto de entrada de nuestra app.
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);
  //console.log(categories);

  const addCategory = (newCategory) => {
    const exist = categories.includes(newCategory);
    if (!exist) {
      setCategories([newCategory, ...categories]);
    } else {
      alert("Categoria ya existe");
    }
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(newValue) => addCategory(newValue)}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
