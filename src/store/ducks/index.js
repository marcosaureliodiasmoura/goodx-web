// Responsável pelos reducers e actions
// Responsável por fazer o CombineReducers

import { combineReducers } from 'redux';
import projects from './projects';
import users from './users';
import donations from './donations';
import projectsDetails from './projectsDetails';

export default combineReducers({
  projects,
  users,
  donations,
  projectsDetails,
});
