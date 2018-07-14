import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CircleLoader } from 'react-spinners';
import { getUsers } from '../actions';
import UserItem from '../components/UserItem';
import {
  START_GET_USERS,
  COMPLETE_GET_USERS,
  ERROR_GET_USERS,
} from '../actions/types';
import './index.css';
// se instaló npm i -S materialize-css y react-spinners
class Home extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.getUsers();
  }
  render() {
    let users = [];
    if (this.props.users.data) {
      users = this.props.users.data.map((currentValue, index, array) => (
        <UserItem
          key={currentValue.id}
          id={currentValue.id}
          name={currentValue.name}
          lastName={currentValue.last_name}
          facebook={currentValue.facebook}
        />
      ));
    }

    if (this.props.users.type === START_GET_USERS) {
      return (
        <div className="Home-preLoader">
          <CircleLoader
            color="#FFF"
            loading
          />
        </div>
      );
    }

    return (
      <div className="Home">
        { users }
      </div>
    );
  }
}

function mapStateToProps(state) {
  // los estados que quiero manejar dentro del componente
  // éste componente convierte el valor de la store que yo quiero
  // en propiedades para el componente
  return {
    users: state.getUsers,
  };
}

// función para que la funcion getUser pueda ser invocada dentro del componente (conectarlos)
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getUsers,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
