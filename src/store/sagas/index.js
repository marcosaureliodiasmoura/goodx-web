import { all, takeLatest } from 'redux-saga/effects';

import { Types as ProjectsTypes } from '../ducks/projects';
import { Types as UsersTypes } from '../ducks/users';
import { Types as DonatesTypes } from '../ducks/donations';

import { getProjects } from './projects';
import { getUsers } from './users';
import { getDonates } from './donates';

export default function* rootSaga() {
  yield all([
    takeLatest(ProjectsTypes.GET_REQUEST, getProjects),
    takeLatest(UsersTypes.GET_REQUEST, getUsers),
    takeLatest(DonatesTypes.GET_REQUEST, getDonates),
  ]);
}
