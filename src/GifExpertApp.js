import React, { useState } from "react";

import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
const GifExpertApp = () => {
  const categories = ["One Punch"];
  const [cat, setCat] = useState(categories);

  //   const handleAdd = () => {
  //     const newElement = "NewElement";
  //     setCat([...cat, newElement]);
  //   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCat={setCat} />
      <hr />

      <ol>
        {cat.map((element) => (
          <GifGrid key={element} category={element} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
