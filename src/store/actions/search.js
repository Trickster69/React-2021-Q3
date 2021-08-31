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
