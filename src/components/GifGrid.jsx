import { GifItem } from "./GifItem"
import { useFetchGif } from "../hooks/useFetchGif"

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGif(category)
    
    return (
        <>
            <div className="content">
                <h2>{ category }</h2>
                {
                    isLoading 
                    ? (<h2>Loading...</h2>)
                    : null
                }
                <div className="gif-grid">
                    {images.map(img => (
                        <GifItem key={img.id} gif={img} />
                    ))}
                </div>
            </div>
        </>
    )
}