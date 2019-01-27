import React, { Component } from 'react';

// import '../css/app.css';
import { BrowserRouter, Route } from 'react-router-dom';
// import Route from 'react-router-dom/es/Route';
// import Switch from 'react-router-dom/es/Switch';
// import Root from './Root';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Dashboard from './Dashboard';

const Landing = () => <h2>Landing</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  } //action creator that will attempt to fetch the current user the instant the app starts to load
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Route path="/" component={Header} />
            <Route exact path="/Landing" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
