import axios from "axios";

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
});
//2.18 минут, сортировка не работает на стороне json
export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({data}) => {
        dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
});