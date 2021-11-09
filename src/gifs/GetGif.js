
const apiKEY= "AQ7W19ZnQJNf4WRLRPmlJRYmupl5ACvQ"

export default function getGifs({keyword="morty"}={}){
    const apiURL= `https://api.giphy.com/v1/gifs/search?api_key=${apiKEY}&q=${keyword}&limit=5&offset=0&rating=g&lang=en`
    return fetch(apiURL)
    .then(res=> res.json())
    .then(response=>{
     const {data=[]}=response
     if(Array.isArray(data)) {
         const gifs= data.map(image=> {
             const{images, title, id}=image
            const{url}=image.images.downsized_medium
            return{ title, id, url}
        })
         return gifs}
    })
}