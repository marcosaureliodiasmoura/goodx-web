import { all, takeLatest } from 'redux-saga/effects';

import { Types as ProjectsTypes } from '../ducks/projects';
import { Types as UsersTypes } from '../ducks/users';

import { getProjects } from './projects';
import { getUsers } from './users';

export default function* rootSaga() {
  yield all([
    takeLatest(ProjectsTypes.GET_REQUEST, getProjects),
    takeLatest(UsersTypes.GET_REQUEST, getUsers),
  ]);
}
