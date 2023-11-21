import * as basicLightbox from 'basiclightbox';

const ImageInModal = ({ largeImageURL }) => {
  const instance = basicLightbox.create(
    '<img src={largeImageURL} alt="cat" width="800" height="600" />'
  );
  instance.show();
};

export default ImageInModal;
