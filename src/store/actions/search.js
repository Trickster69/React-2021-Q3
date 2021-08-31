import * as constants from '../constants';

export function setSearchValueAC(payload) {
  return {
    type: constants.setValue,
    payload,
  };
}

export function setDataAC(payload) {
  return {
    type: constants.setData,
    payload,
  };
}

export function setSortingAC(payload) {
  return {
    type: constants.setSort,
    payload,
  };
}

export function setPageAC(payload) {
  return {
    type: constants.setPage,
    payload,
  };
}

export function nextPageAC(payload) {
  return {
    type: constants.nextPage,
    payload,
  };
}

export function prevPageAC(payload) {
  return {
    type: constants.prevPage,
    payload,
  };
}

export function setResultCount(payload) {
    return {
      type: constants.setResultCount,
      payload,
    };
  }

export function setStatsuServer(payload) {
return {
    type: constants.setStatusServer,
    payload,
};
}
