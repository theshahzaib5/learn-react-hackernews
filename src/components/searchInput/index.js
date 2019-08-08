import React, {Component} from 'react';

export default class SearchInput extends Component {
  render() {
    const {
      props: {
        inputValue,
        onChange
      },
    } = this
    
    return (
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
      />
    );
  }
}