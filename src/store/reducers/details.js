import * as constants from '../constants';

const initialState = {
  detailsData: '',
  load: false,
  statusResp: '',
  errorMessage: '',
};

export default function detailsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case constants.setDetailData:
      return {
        ...state,
        detailsData: payload,
      };

    case constants.setIsLoadingDetails:
      return {
        ...state,
        load: !state.load,
      };

    case constants.setStatusDEtails:
      return {
        ...state,
        statusResp: payload,
      };

    case constants.setErrorMessage:
      return {
        ...state,
        errorMessage: payload,
      };

    default:
      return state;
  }
}
