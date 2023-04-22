import { ModalWrapper, ModalContent, ModalImage } from './Modal.styled';
import React, { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.image;

    return (
      <ModalWrapper onClick={this.handleBackdropClick}>
        <ModalContent>
          <ModalImage src={largeImageURL} alt={tags} />
        </ModalContent>
      </ModalWrapper>
    );
  }
}
