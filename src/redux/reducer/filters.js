const initialState = {
    category: 0,
    sortBy: 'popular'
}

//1.14

const filters = (state = initialState,action) => {
    if (action.type === 'SET_SORT_BY') {
        return {
            ...state,
            sortBy: action.payload
        }
    }
    return state;
}

export default filters;