export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

const getEncryptedData = (data, state) => {
  return { ...state, encryptedData: data };
};

const requestFailure = (error, state) => ({ ...state, error });

export const encryptReducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return getEncryptedData(action.data, state);
    case FETCH_FAILURE:
      return requestFailure(action);
    default:
      return state;
  }
};

