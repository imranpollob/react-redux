import { ADD_ARTICLE } from "./../constants/action-types";

const initialState = {
  articles: [
    { id: 1, title: "first" },
    { id: 2, title: "second" },
    { id: 3, title: "third" }
  ]
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  return state;
}

export default rootReducer;
