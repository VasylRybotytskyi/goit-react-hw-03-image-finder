import React, { Component } from 'react';
import { GalleryImage, GalleryListItem } from './ImageGalleryItem.styled';
export class ImageGalleryItem extends Component {
  render() {
    const { items } = this.props;
    return (
      <>
        {items &&
          items.hits &&
          items.hits.map(el => (
            <GalleryListItem key={el.id}>
              <GalleryImage
                src={el.webformatURL}
                alt={el.user}
                onClick={this.props.toggleModal}
              />
            </GalleryListItem>
          ))}
      </>
    );
  }
}
