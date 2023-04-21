import React, { Component } from 'react';
// import { toast } from 'react-toastify';
export class Searchbar extends Component {
  state = {
    search: '',
  };
  handleSearchChange = e => {
    this.setState({ search: e.target.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.search.trim() === '') {
      alert('Wow so easy !');
      return;
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };
  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.search}
            onChange={this.handleSearchChange}
          />
        </form>
      </header>
    );
  }
}
