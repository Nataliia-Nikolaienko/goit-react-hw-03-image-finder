// import * as basicLightbox from 'basiclightbox';
import { Component } from 'react';
// import ImageCreate from '../ImageCreate';
import { Children } from 'react';

class Modal extends Component {
  // const backDropClose = e => {
  //   e.target === e.currentTarget && close();
  // };
  render() {
    return (
      <div
        // onClick={backDropClose}
        className="modal fade show"
        style={{ display: 'block', backdropFilter: 'blur(5px)' }}
      >
        <div>{Children}</div>
      </div>
    );
  }
}

export default Modal;
