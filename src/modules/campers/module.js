const SORT_BY = 'SORT_BY'

export const changeSort = sortBy => ({
  sortBy,
  type: SORT_BY,
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
    default:
      return state
  }
}
