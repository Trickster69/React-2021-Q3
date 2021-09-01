import * as constants from '../constants';

export function setDetailsData(payload) {
  return {
    type: constants.setDetailData,
    payload,
  };
}

export function setDetailsIsLoading(payload) {
  return {
    type: constants.setIsLoadingDetails,
    payload,
  };
}

export function setStatusDetailsServer(payload) {
  return {
    type: constants.setStatusDEtails,
    payload,
  };
}

export function setErrorMessage(payload) {
    return {
      type: constants.setErrorMessage,
      payload,
    };
  }
