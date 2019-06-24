export const Types = {
  GET_REQUEST: '/users/GET_REQUEST',
  GET_SUCCESS: '/users/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.tye) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getUsersRequest: () => ({ type: Types.GET_REQUEST }),
  getUsersSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
