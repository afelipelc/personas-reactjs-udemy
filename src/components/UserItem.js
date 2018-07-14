import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

export default class UserItem extends Component {
  constructor() {
    super();
    this.state = { // define el state del Component
      isRedirected: false,
    };
    this.onClick = this.onClick.bind(this); // asociar el evento al card
  }

  onClick(e) {
    // TOdo
    // Oferta: 3 meses (evaluación) se puede extender contrato indefinido a 18.500, mas prestaciones
    // 17 brutos():
    // uriel cordina el desarrollo.
    this.setState({ isRedirected: true });
  }

  render() {
    const {
      id, name, lastName, facebook,
    } = this.props;

    if (this.state.isRedirected) {
      return (<Redirect to={`/detail/${id}`} />); // se ha hecho clic sobre el card, se invoca al path
    }

    return (
      <div className="card" onClick={this.onClick}>
        <div className="card-content">
          <div className="UserItem-leftBox">
            <img
              className="UserItem-image"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              alt="Profile"
            />
          </div>
          <div className="UserItem-rightBox">
            <h2 className="UserItem-name">{`${name} ${lastName}`}</h2>
            <h3 className="UserItem-facebook">{facebook}</h3>
          </div>
        </div>
      </div>
    );
  }
}

UserItem.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  facebook: PropTypes.string,
};
