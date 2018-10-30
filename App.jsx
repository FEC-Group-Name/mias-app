import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from './List'
import Dashboard from './Dashboard'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'main',
    };
  }

  componentDidMount() {
    fetch('/api/users')
    .then(res => res.json())
    .then(res => {
      let data = res.data;
      this.setState({
        users: data,
        view: 'list',
      })
    })
  }
  
  render() {
    const { view, list } = this.state;
    return (
      <div>
        {view === 'main' ? <Dashboard /> : null}
        {view === 'list' ? <List /> : null}
      </div>
    );
  }
}

export default App;


// this is a comment