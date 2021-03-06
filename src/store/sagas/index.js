import { all, takeLatest } from 'redux-saga/effects';

import { Types as ProjectsTypes } from '../ducks/projects';
import { Types as UsersTypes } from '../ducks/users';
import { Types as DonatesTypes } from '../ducks/donations';
import { Types as ProjectsDetailsTypes } from '../ducks/projectsDetails';

import { getProjects } from './projects';
import { getUsers } from './users';
import { getDonates } from './donates';
import { getProjectsDetails } from './projectsDetails';

export default function* rootSaga() {
  yield all([
    takeLatest(ProjectsTypes.GET_REQUEST, getProjects),
    takeLatest(UsersTypes.GET_REQUEST, getUsers),
    takeLatest(DonatesTypes.GET_REQUEST, getDonates),
    takeLatest(ProjectsDetailsTypes.GET_REQUEST, getProjectsDetails),
  ]);
}
