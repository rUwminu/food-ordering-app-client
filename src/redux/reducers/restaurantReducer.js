import {
  RECIPES_DETAILS_FAIL,
  RECIPES_DETAILS_REQUEST,
  RECIPES_DETAILS_SUCCESS,
  RES_DETAILS_FAIL,
  RES_DETAILS_REQUEST,
  RES_DETAILS_SUCCESS,
  SINGLE_RES_DETAILS_FAIL,
  SINGLE_RES_DETAILS_REQUEST,
  SINGLE_RES_DETAILS_SUCCESS,
} from '../constants/restaurantConstant'

export const resDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case RES_DETAILS_REQUEST:
      return { location: true, allRes: [] }
    case RES_DETAILS_SUCCESS:
      return { location: false, allRes: [...action.payload] }
    case RES_DETAILS_FAIL:
      return { ...state, location: false, allResError: 'There An Error' }
    case SINGLE_RES_DETAILS_REQUEST:
      return { ...state, loading: true }
    case SINGLE_RES_DETAILS_SUCCESS:
      return { ...state, loading: true, singleRes: action.payload }
    case SINGLE_RES_DETAILS_FAIL:
      return { ...state, loading: true, singleResError: 'There An Error' }
    default:
      return state
  }
}

export const recipesListReducer = (state = {}, action) => {
  switch (action.type) {
    case RECIPES_DETAILS_REQUEST:
      return { loading: true }
    case RECIPES_DETAILS_SUCCESS:
      return { loading: false, recipes: [...action.payload] }
    case RECIPES_DETAILS_FAIL:
      return { loading: false, recipesError: 'There An Error' }
    default:
      return state
  }
}
