import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserPost from './UserPost';

class UserDetailBody extends Component {
  constructor(props) {
    super(props); // si se van a usar las props, se deben declarar
    this.state = {
      messages: props.messages,
    };
  }
  render() {
    const messages = this.state.messages.map((currentValue) => {
      return (<UserPost
        key={currentValue.id}
        title={currentValue.title}
        message={currentValue.message}
      />);
    });

    return (
      <div className="UserDetailBody">
        <div>
          {messages}
        </div>
      </div>
    );
  }
}

UserDetailBody.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default UserDetailBody;
