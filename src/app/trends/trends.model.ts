export class Gif {
    getImages(response){
        let imagesArray = []
        response.forEach(element => {
            imagesArray.push({
                image: element.images.downsize.url
            })
        });
        return imagesArray
    }

}