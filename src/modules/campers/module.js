//const action = () => {
//  GET_CAMPER_LIST: 'GET_CAMPER_LIST',
//  SORT_BY: 'SORT_BY'
//}

const GET_CAMPER_LIST = 'GET_CAMPER_LIST'

const SORT_BY = 'SORT_BY'

export const changeSort = sortBy => ({
  sortBy,
  type: SORT_BY,
})

export const receiveCampers = campers => ({
  type: 'GET_CAMPER_LIST',
  payload: campers,
})

const initialState = { asc: true, sortBy: 'username' }

export default (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY:
      const sortBy = state.sortBy
      if (sortBy === action.sortBy) {
        return { ...state, asc: !state.asc }
      } else {
        return { ...state, sortBy: action.sortBy }
      }
    case 'HOME':
      console.log('Hello World!')
      return state
    case GET_CAMPER_LIST:
      return { ...state, campers: action.payload }
    default:
      return state
  }
}
