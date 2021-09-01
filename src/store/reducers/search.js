import * as consts from '../constants/index';

const inititalState = {
  searchValue: '',
  dataNews: '',
  page: 1,
  countShowNews: 1,
  sort: 'relevancy',
  articlesCount: 0,
  totalPages: 1,
  error: '',
  isLoad: false,
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
      return {
        ...state,
        sort: payload,
      };

    case consts.setPage:
      return {
        ...state,
        page: payload,
      };

    case consts.nextPage:
      return {
        ...state,
        page: state.page + 1,
      };

    case consts.prevPage:
      return {
        ...state,
        page: state.page > 1 ? state.page - 1 : 1,
      };

    case consts.setResultCount:
      return {
        ...state,
        countShowNews: payload > 0 ? payload : 1,
      };

    case consts.setTotalPages:
      return {
        ...state,
        totalPages: Math.floor(payload / state.resultCount),
      };

    case consts.setStatusServer:
      return {
        ...state,
        error: payload,
      };

    case consts.setIsLoading:
      return {
        ...state,
        isLoad: !state.isLoad,
      };

    default:
      return state;
  }
}
