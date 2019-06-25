import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ProjectsDetailsActions } from '../ducks/projectsDetails';

// ProjectDetails: Recebemos o id do payload na action
export function* getProjectsDetails(action) {
  try {
    // Chama a api
    // Vai retornar o projeto (seu id) e todas as doações relacionadas a ele.
    const response = yield call(api.get, `/projects/${action.payload.id}?_embed=donations`);
    // Envia os dados
    yield put(ProjectsDetailsActions.getProjectsDetailsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
