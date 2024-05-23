export const getGifs = async(category) => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=wKqGVTtYfQwPBtUPKYp7TlzTaejVf84B&q=${category}&limit=20`);
    const { data } = await response.json();
    const gifs = data.map( (data) => ({
        title: data.title,
        id: data.id,
        image: data.images.original.url
    }))
    return gifs
}
