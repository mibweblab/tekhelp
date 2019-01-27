import React, { Component } from 'react';
// import logo from './techelpLogo.png';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { Route } from 'react-router-dom';
import Profile from './Profile';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'Your network is not so good.. please refresh your browser';
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <ul id="nav-mobile" className="right hide-on-med-down">
            <li>
              <a href="/profile">{this.props.auth.displayName}</a>
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </ul>
        );
    }
  }
  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <a path="/" className="left brand-logo">
            TecHelp
          </a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
        <Route path="/dashboard" component={Dashboard} />
        <Route component={Profile} />
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
