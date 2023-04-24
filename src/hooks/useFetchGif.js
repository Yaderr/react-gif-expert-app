import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGifs"

export const useFetchGif = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsloading] = useState(true)


    const getImages = async () => {
        const newImages = await getGif(category)
        setImages(newImages)
        setIsloading(false)
    }

    useEffect(() =>{ 
        getImages()
    }, [])

    return {
        images,
        isLoading
    }
}