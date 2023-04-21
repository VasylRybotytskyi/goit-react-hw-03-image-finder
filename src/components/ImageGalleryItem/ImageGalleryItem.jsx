import React, { Component } from 'react';
export class ImageGalleryItem extends Component {
  render() {
    const { items } = this.props;
    return (
      <>
        {items &&
          items.hits &&
          items.hits.map(el => (
            <li key={el.id}>
              <img src={el.previewURL} alt={el.user} />
            </li>
          ))}
      </>
    );
  }
}
