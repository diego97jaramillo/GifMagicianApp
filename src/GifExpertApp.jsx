import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const handleAddCategory = (str) => {
        setCategories([str, ...categories]);
     }
    const [categories, setCategories] = useState(['Action']);

  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory
        onNewValue={ handleAddCategory }
      // setCategories={ setCategories }
       />

      {categories.map((category) =>
          (< GifGrid key={category} category={category}/>)
        )}

    </>
  )
}

