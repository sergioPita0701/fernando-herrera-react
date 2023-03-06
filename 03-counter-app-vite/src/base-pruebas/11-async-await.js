export const getImagen = async () => {

    try {

        const apiKey = 'x4AFEivD31fEBcJ4OwZmihqhYPiTEPU2';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();

        const { url } = data.images.original;
        return url;

    } catch (error) {
        return 'No se encontro la imagen'
    }

}




