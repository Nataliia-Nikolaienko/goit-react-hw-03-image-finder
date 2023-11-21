import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, onClick }) => {
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
