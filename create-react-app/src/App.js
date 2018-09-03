import React, { Component } from 'react';

import MonthsInKorean from './MonthsInKorean';

class TextClass {
  static var1 = 'staticVal1';
  instanceVar2 = 123;
  constructor(prop) {
    console.log('test');
  }
}

class App extends Component {
  static defaultProps = {
    name: 'Justin',
  };
  render() {
    return (
      <div>
        <h1>글로벌 SW 아카데미 3강 - React 와 Front-end 기술 - {this.props.name}</h1>
        <MonthsInKorean />
      </div>
    );
  }
}

export default App;
