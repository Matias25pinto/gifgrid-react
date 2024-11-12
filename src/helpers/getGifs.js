export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=8d5Blo73KhLIm9uzPUMw0UOe6rU54yhk&q=${category}&limit=20`;
    const resp = await fetch( url );

    const {data} = await resp.json();

   const gif = data.map( (img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
   });
 
   return gif;
}