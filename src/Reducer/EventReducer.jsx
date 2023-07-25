import { produce } from "immer";

const initialState = {};

export const EventReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "EVENT_DETAILS":
      return produce(state, (draft) => {
        draft.user = payload;
      });

      case "SAVE_EVENT_DETAILS":
      return produce(state, (draft) => {
        draft.details = payload;
      });

    default:
      return state;
  }
};