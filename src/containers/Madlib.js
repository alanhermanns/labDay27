import React, { Component } from 'react';
import Form from '../components/madlib/Form';
import Result from '../components/madlib/Result';

export default class Madlib extends Component{
  state = {
    showResult: false,
    words: [],
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleSubmit = event => {
    event.preventDefault();
    let inputHTML = (event.target.children);
    let inputArr = [...inputHTML];
    let wordsMap = inputArr.map(child => child.value);
    this.setState(state => ({ ...state, words: wordsMap }));
    this.toggleResult();
  }

  render() {
    const { showResult } = this.state;
    return (
      <>
        {!showResult && <Form onSubmit={this.handleSubmit} />}
        {showResult && <Result words={this.state.words} closeResult={this.toggleResult} />}
      </>
    );
  }
}
