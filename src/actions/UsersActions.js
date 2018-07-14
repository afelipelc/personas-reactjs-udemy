import http from './http';
import {
  START_GET_USERS,
  COMPLETE_GET_USERS,
  ERROR_GET_USERS,
  START_GET_USER_BY_ID,
  COMPLETE_GET_USER_BY_ID,
  ERROR_GET_USER_BY_ID,
} from '../actions/types';

const startGetUsers = () => ({ type: START_GET_USERS, ready: false });
const completeGetUsers = data => ({ type: COMPLETE_GET_USERS, data });
const errorGetUsers = err => ({ type: ERROR_GET_USERS, err });
// getUsers
// se auto arregla por eslint-babel (forma ideal)
// (dispatch, getState) es la parte del return, retorna una funcion con esos params
//  export const getUsers = () => { return (dispatch, getState) => { logic... };
const startGetUserById = () => ({ type: START_GET_USER_BY_ID, ready: false });
const completeGetUserById = data => ({ type: COMPLETE_GET_USER_BY_ID, data });
const errorGetUserById = err => ({ type: ERROR_GET_USER_BY_ID, err });

export const getUsers = () => (dispatch, getState) => {
  dispatch(startGetUsers()); // informar al reducer el inicio de la acción
  http.get('users/')
    .then((response) => {
      // console.log(response.data);
      if (response.data) {
        dispatch(completeGetUsers(response.data));
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(errorGetUsers(err));
    });
};

export const getUserById = userId => (dispatch, getState) => {
  dispatch(startGetUserById()); // informar al reducer el inicio de la acción
  http.get(`users/${userId}`)
    .then((response) => {
      // console.log(response.data);
      if (response.data) {
        dispatch(completeGetUserById(response.data));
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(errorGetUserById(err));
    });
};
