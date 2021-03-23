import s from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types'

const ImageGalleryItem = (({ tags, webformat, largeImage, openModal }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={webformat}
        alt={tags}
        className={s.ImageGalleryItemImage}
        onClick={() => {
        openModal(largeImage);
        }}
      />
    </li>
  )
})

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  }

export default ImageGalleryItem