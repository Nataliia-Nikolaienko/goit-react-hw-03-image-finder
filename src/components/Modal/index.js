// import * as basicLightbox from 'basiclightbox';
import { Component } from 'react';
// import ImageCreate from '../ImageCreate';

class Modal extends Component {
  backDropClose = e => {
    e.target === e.currentTarget && this.props.onClose(e);
  };
  render() {
    return (
      <div
        onClick={this.backDropClose}
        className="modal fade show"
        style={{ display: 'block', backdropFilter: 'blur(5px)' }}
      >
        <div>{this.props.children}</div>
      </div>
    );
  }
}
export default Modal;
