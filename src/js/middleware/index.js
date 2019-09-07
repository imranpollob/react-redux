import { ADD_ARTICLE, FOUND_BAD_WORD } from "./../constants/action-types";

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === ADD_ARTICLE) {
        if (["spam", "money"].some(word => action.payload.title.includes(word))) {
          return dispatch({
            type: FOUND_BAD_WORD
          });
        }
      }

      return next(action);
    };
  };
}
