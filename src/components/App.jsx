import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { GlobalStyle } from './GlobaStyle';
// import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    search: '',
  };

  handleFormSubmit = search => {
    this.setState({ search: search });
  };
  render() {
    return (
      <>
        <GlobalStyle />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery search={this.state.search} />
      </>
    );
  }
}
