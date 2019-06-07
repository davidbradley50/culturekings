import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Block = styled.div`
  margin: 20px auto 0 auto;
  width: 100%;
`;

const Filter = styled.div`
  border: 1px solid grey;
  box-shadow: 0 0 0 1px rgba(0,0,0,.1), 0 2px 4px 1px rgba(1,1,1,.18);
  color: rgba(0, 0, 0, 0, 0.73);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  width: 100%;
  margin: 15px auto;
`;

const Search = styled.input`
  border: none;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0, 0.73);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  outline: none;
  padding: 10px 5px;
  width: 100%;
  text-transform: uppercase;
`;

const List = styled.ul`
  border-top: 1px solid grey;
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: left;
`;

const ListItem = styled.li`
  cursor: pointer;
  padding: 10px 5px;
`;

export default class AutoCompleteText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: '',
    };
  }

  onTextChanged = (e) => {
    const { items, runFilter } = this.props;
    const { value } = e.target;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value.toLowerCase()}`);
      suggestions = items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
    runFilter(value);
  }

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <List>
        {suggestions.map(item => (
          <ListItem
            onClick={() => this.suggestionSelected(item)}
            key={item}
          >
            {item}
          </ListItem>
        ))}
      </List>
    );
  }

  render() {
    const { text } = this.state;
    return (
      <Block>
        <Filter>
          <Search type="text" value={text} onChange={this.onTextChanged} />
          {this.renderSuggestions()}
        </Filter>
      </Block>
    );
  }
}

AutoCompleteText.propTypes = {
  items: PropTypes.node.isRequired,
  runFilter: PropTypes.func.isRequired,
};
