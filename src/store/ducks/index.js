// Responsável pelos reducers e actions
// Responsável por fazer o CombineReducers

import { combineReducers } from 'redux';
import projects from './projects';

export default combineReducers({
  projects,
});
