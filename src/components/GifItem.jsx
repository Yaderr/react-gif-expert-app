import propTypes from 'prop-types'

export const GifItem = ({ gif }) => {
    return (
        <>
           <div className="gif-card">
                <img src={gif.url} alt="" width="100%" />
                <div className="gif-card-title">
                    <h6>{gif.title}</h6>
                </div>
           </div>
        </>
    )
}

GifItem.propTypes = {
    gif: propTypes.shape({
        url: propTypes.string.isRequired,
        title: propTypes.string.isRequired
    })
}