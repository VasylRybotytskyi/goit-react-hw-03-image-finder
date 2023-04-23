import { Modal } from 'components/Modal/Modal';
import React, { Component } from 'react';
import { GalleryImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    shownModal: false,
  };
  onModal = () => {
    this.setState(({ shownModal }) => ({ shownModal: !shownModal }));
  };
  render() {
    const { item } = this.props;
    const { webformatURL } = item;
    return (
      <li>
        <GalleryImage onClick={this.onModal} src={webformatURL} alt="img" />
        {this.state.shownModal && <Modal onClose={this.onModal} image={item} />}
      </li>
    );
  }
}
