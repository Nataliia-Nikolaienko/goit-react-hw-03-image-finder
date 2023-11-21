import * as basicLightbox from 'basiclightbox';

const ImageInModal = ({ url }) => {
  basicLightbox
    .create('<img src={url} alt="cat" width="800" height="600" />')
    .show();
};

export default ImageInModal;
