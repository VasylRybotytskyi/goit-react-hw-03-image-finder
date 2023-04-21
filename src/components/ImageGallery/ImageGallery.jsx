import React, { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    search: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.search !== this.props.search) {
      console.log('Change search');
      console.log('prevProps.search було:', prevProps.search);
      console.log('this.props.search стало:', this.props.search);

      fetch(
        `https://pixabay.com/api/?key=34394933-ad173a1c8d35ea2c9bf0e731e&q=${this.props.search}`
      )
        .then(res => res.json())
        .then(search => this.setState({ search: search }));
    }
  }

  render() {
    return (
      <GalleryList>
        <ImageGalleryItem
          items={this.state.search}
          toggleModal={this.props.toggleModal}
        />
      </GalleryList>
    );
  }
}
