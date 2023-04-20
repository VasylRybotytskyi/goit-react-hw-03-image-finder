import React, { Component } from 'react';
import { Modal } from './Searchbar/Modal/Modal';

export class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    return (
      <>
        <button onClick={this.toggleModal}>Відкрити</button>
        {this.state.showModal && <Modal onClose={this.toggleModal} />}
      </>
    );
  }
}
