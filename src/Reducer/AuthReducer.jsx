import { produce } from "immer";

const initialState = {};

export const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "USER_LOGIN":
      return produce(state, (draft) => {
        draft.user = payload;
      });

    default:
      return state;
  }
};
