import s from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem'
import PropTypes from 'prop-types'

const ImageGallery = ({hits, onClick}) => {
  return (
    <ul className={s.ImageGallery}>
      {hits.map(({ id, webformatURL, tags, largeImageURL }) => (
        
          <ImageGalleryItem
          key={id}
          webformat={webformatURL}
          tags={tags}
          largeImage={largeImageURL}
          openModal={onClick} />
       
      ))}
</ul>
  )
}


ImageGallery.propTypes = {
    hits: PropTypes.array.isRequired
}

export default ImageGallery 