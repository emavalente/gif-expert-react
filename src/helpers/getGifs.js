// llamado a la API
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Zf1TlGn8e0tQh4pNOoSnFBnMMz85bzw2&q=${category}&limit=20`;
    
    // Peticion HTTP:
    const response = await fetch(url);
    const { data } = await response.json();
    
    // Manejo la data que necesito...
    const gifs = data.map((image) => ({ 
      id: image.id,
      title: image.title,
      url: image.images.downsized_medium.url
    }));
    
    return gifs;
  };