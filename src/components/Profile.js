import React, { Component } from 'react';
import { Route } from 'react-router-dom';

export default class Profile extends Component {
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
          <div class="row">
            <ul id="nav-mobile" className="right hide-on-med-down">
              <li>
                {/* <a href="/profile">{this.props.auth.displayName}</a> */}
              </li>
              <li>
                <a href="/api/logout">Logout</a>
              </li>
            </ul>
            <div className="col s12 m7">
              <div className="card">
                <div className="card-image">
                  <img src="images/techelpLogo.png" />
                  <span className="card-title" style={{ color: 'black' }}>
                    My Story
                  </span>
                </div>
                <div className="card-content" style={{ color: 'black' }}>
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                </div>
                <div className="card-action">
                  <a href="#">This is a my facebook</a>
                </div>
              </div>
            </div>
          </div>
        );
    }
  }

  render() {
    return <div>hi {this.renderContent()}</div>;
  }
}
