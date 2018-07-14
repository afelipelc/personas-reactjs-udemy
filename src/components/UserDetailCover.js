import React, { Component } from 'react';
import './index.css';

class UserDetailCover extends Component {
  constructor() {
    super();
    this.state = {
      cover: 'https://ssl.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png',
    };
  }

  render() {
    return (
      <div className="UserDetailCover">
        <img
          className="UserDetailCover-image"
          src={this.state.cover}
          alt="avatar"
        />
      </div>
    );
  }
}

export default UserDetailCover;
