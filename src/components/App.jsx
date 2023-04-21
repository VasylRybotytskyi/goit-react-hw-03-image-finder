import React, { Component } from 'react';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { GlobalStyle } from './GlobaStyle';
// import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    showModal: false,
    search: '',
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleFormSubmit = search => {
    this.setState({ search: search });
  };
  render() {
    return (
      <>
        <GlobalStyle />
        {/* <ToastContainer autoClose={3000} /> */}
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          search={this.state.search}
          toggleModal={this.toggleModal}
        />
        <button onClick={this.toggleModal}>Відкрити</button>
        {this.state.showModal && <Modal onClose={this.toggleModal} />}
      </>
    );
  }
}
