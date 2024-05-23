import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGif = (category) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState( true );


    const getImage = async (category) =>{
      const imageArray = await getGifs(category)
      setGifs(imageArray);
      setIsLoading( false );
    }

    useEffect( () => {
      getImage( category );

      // getGifs(category).then(array => setGifs(array)) //esta es una forma de manejarlos datos como se gestiona una promesa
    }, [ category ])

  return {
    gifs,
    isLoading
  }
}
