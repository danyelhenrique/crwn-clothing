import data from "./shopData";

const INITIAL_STATE = {
  collections: data
};

function shopReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default shopReducer;
