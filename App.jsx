import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from './List'
import Dashboard from './Dashboard'

class App extends Component {
  constructor() {
    super(props);

    this.state ={ view: 'main', };
  }

  componentWillMount() {
    fetch('/api/users')
    .then(res => res.json())
    .then(res => {
      let data = res.data;
      this.setState({users: data })
      this.setState({view: 'list'})
    })
  }
  
  render() {
    let {view,list} = this.state;
    return (
      <div>
        {view === 'main' ? <Dashboard /> : null}
        {view === 'list' ? <List /> : null}
      </div>
    );
  }
}

App.propTypes = {
  
};

export default App;
