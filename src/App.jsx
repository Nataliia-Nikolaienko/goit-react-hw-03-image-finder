import { Component } from 'react';
import { getImagesWithSearch } from './api/images';
import ImageGallery from './components/ImageGallery';
import FormikSearchBar from './components/Searchbar';
import ImageInModal from 'components/ImageInModal';
import Modal from './components/Modal';
// import Button from './components/Button';

class App extends Component {
  state = {
    query: '',
    page: 1,
    isLoading: false,
    url: '',
    isShowModal: false,
    error: '',
    images: [],
    // totalHits: 0,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.handleSearch();
    }
  }

  handleSearch = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await getImagesWithSearch(this.state.query);
      this.setState(({ images }) => {
        return {
          images: [...images, ...data.hits],
          error: '',
          isLoading: false,
        };
      });
    } catch (error) {
      this.setState({ error: error.response.data, isLoading: false });
    }
  };

  handleSubmit = ({ query }) => {
    this.setState({ query });
  };

  handleOpen = url => {
    this.setState(prev => ({ isShowModal: !prev.isShowModal, url }));
  };

  handleClose = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      this.setState(prev => ({ isShowModal: !prev.isShowModal }));
    }
  };

  // loadMore = () => {
  //   this.steState(prev => ({
  //     images: [...prev.images, ...hits],
  //     loadMore: this.state.page < Math.ceil(totalHits / 12),
  //   }));
  // };

  render() {
    const { images, isLoading, error, isShowModal, largeImageURL } = this.state;

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        {error && <h1>{error}</h1>}
        <FormikSearchBar submit={this.handleSubmit} />
        {isLoading && <h1>Loading...</h1>}
        {images && <ImageGallery images={images} onClick={this.handleOpen} />}
        {isShowModal && (
          <Modal onClose={this.handleClose}>
            <ImageInModal url={largeImageURL} />
          </Modal>
        )}
        {/* {images && <Button loading={this.loadMore} />} */}
      </div>
    );
  }
}

export default App;
