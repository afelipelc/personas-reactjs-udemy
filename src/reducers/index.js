import { combineReducers } from 'redux';
import { getUsers, getUserById } from './UserReducer';
// para tener más de un reducer y pasarlos a la conexión del front

// dentro de {} irán los reducers
export default combineReducers({
  getUsers,
  getUserById,
});
