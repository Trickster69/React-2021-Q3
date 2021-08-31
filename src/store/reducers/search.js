import * as consts from '../constants/index';

const inititalState = {
  searchValue: '',
  dataNews: '',
  page: 1,
  countNews: 1,
  sort: 'relevancy',

};

export default function searchReducer(state = inititalState, action) {
    // debugger;
  const { type, payload } = action;

  switch (type) {
    case consts.setValue:
      return {
        ...state,
        searchValue: payload,
      };

      case consts.setData:
      return {
        ...state,
        dataNews: payload,
      };

      case consts.setSort:
        console.log(state.sort);
      return {
        ...state,
        sort: payload,
      };

    default:
      return state;
  }
}
