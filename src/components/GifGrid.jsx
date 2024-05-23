import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGif } from "../hooks/useFetchGif";



export const GifGrid = ({ category }) => {
    // const [gifs, setGifs] = useState([])

    // const getImage = async (category) =>{
    //   const imageArray = await getGifs(category)
    //   setGifs(imageArray)
    // }

    // useEffect( () => {
    //   getImage( category );
    //   // getGifs(category).then(array => setGifs(array)) //esta es una forma de manejarlos datos como se gestiona una promesa
    // }, [ category ])

    const { gifs, isLoading} = useFetchGif(category);

    console.log({ isLoading});
  return (
    <>
      <h2>{ category }</h2>
      {
        isLoading && ( <h3>Cargando...</h3> )
      }

        {gifs.map((data) =>
            <GifItem key={data.id} {...data} />
        )}
    </>

  )
}
