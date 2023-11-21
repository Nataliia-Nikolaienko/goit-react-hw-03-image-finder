// import * as basicLightbox from 'basiclightbox'
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, onClick }) => {
  //   const instance = basicLightbox.create(`
  //     <img src="assets/images/image.png" width="800" height="600">
  // `);
  return images.map(({ id, webformatURL, largeImageURL }) => (
    <li
      className={css.galleryItem}
      key={id}
      onClick={() => {
        onClick(largeImageURL);
      }}
    >
      <img src={webformatURL} alt="cat" className={css.galleryImage} />
    </li>
  ));
};

export default ImageGalleryItem;
