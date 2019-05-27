export const REQUEST_OUTPUT_DATA = 'REQUEST_OUTPUT_DATA';
export const UPDATE_OUTPUT_DATA = 'UPDATE_OUTPUT_DATA';

export const REQUEST_INFO_DATA = 'REQUEST_INFO_DATA';
export const UPDATE_INFO_DATA = 'UPDATE_INFO_DATA';

export const rootReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_OUTPUT_DATA:
      return { ...state, outputData: { ...state.outputData, loading: true } };
    case UPDATE_OUTPUT_DATA:
      return {
        ...state,
        outputData: { ...state.outputData, ...action.data, loading: false },
      };
    case REQUEST_INFO_DATA:
      return { ...state, infoData: { ...state.infoData, loading: true } };
    case UPDATE_INFO_DATA:
      return {
        ...state,
        infoData: { ...state.infoData, data: action.data, loading: false },
      };
    default:
      return state;
  }
};

// export const algoReducer = (state, action) => {
//   switch (action.type) {

//     default:
//       return state;
//   }
// };

// export const encodeReducer = (state, action) => {
//   switch (action.type) {

//     default:
//       return state;
//   }
// };
