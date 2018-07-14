import React, { Component } from 'react';
import { Route, Router } from 'react-router';
import Home from './views/Home';
import UserDetail from './views/UserDetail';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  render() {
    return (
      // van las rutas
      <Router history={this.props.history}>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/detail/:userId" component={UserDetail} />
        </div>
      </Router>
    );
  }
}

// proptypes es para anotar que el componente requerirá tales props
App.propTypes = {
  history: PropTypes.any.isRequired,
};

// // ./node_modules/.bin/eslint --init para iniciarlizar eslint
export default App;
