import React, { Component } from 'react';
import { GalleryImage, GalleryListItem } from './ImageGalleryItem.styled';
import { Modal } from './Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    image: {},
  };

  toggleModal = image => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      image,
    }));
  };

  render() {
    const { items } = this.props;
    const { showModal, image } = this.state;

    return (
      <>
        {items &&
          items.hits &&
          items.hits.map(el => (
            <GalleryListItem key={el.id}>
              <GalleryImage
                src={el.webformatURL}
                alt={el.user}
                onClick={() => this.toggleModal(el)}
              />
            </GalleryListItem>
          ))}

        {showModal && (
          <Modal image={image} onClose={() => this.toggleModal({})} />
        )}
      </>
    );
  }
}
