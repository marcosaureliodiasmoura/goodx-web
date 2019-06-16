import { all, takeLatest } from 'redux-saga/effects';

import { Types as ProjectsTypes } from '../ducks/projects';

import { getProjects } from './projects';

export default function* rootSaga() {
  yield all([takeLatest(ProjectsTypes.GET_REQUEST, getProjects)]);
}
