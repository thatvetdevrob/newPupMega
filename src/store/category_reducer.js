/** 
 * Categories store
 * @component store
 */

import axios from 'axios';

// STORE
const initialState = {
  categories: [ "Weapons","Accessories","Armor","Items"],
  activeCategory: {
}
}

// REDUCERS
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_CATEGORY':
      return {...state, activeCategory: payload };
    case 'FETCH_CATEGORIES':
      return {...state, categories: payload};
    default:
      return state;
  }
}

// ACTIONS
export const changeCategory = (categoryName) => {
  return {
    type: 'CHANGE_CATEGORY',
    payload: categoryName,
  }
}

export const fetchCategories = () => async (dispatch, getState) => {
  const response = await axios.get('http://localhost:3001/categories');
  dispatch({
    type: 'FETCH_CATEGORIES',
    payload: response.data,
  });
}