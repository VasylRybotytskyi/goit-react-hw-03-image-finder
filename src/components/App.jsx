import React, { Component } from 'react';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

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
        <Searchbar />
        <button onClick={this.toggleModal}>Відкрити</button>
        {this.state.showModal && <Modal onClose={this.toggleModal} />}
      </>
    );
  }
}
