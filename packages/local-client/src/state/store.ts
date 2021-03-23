import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { ActionType } from "./action-types";
import { persistMiddlware } from "./middlewares/persist-middleware";

export const store = createStore(
  reducers,
  {},
  applyMiddleware(persistMiddlware, thunk)
);

// //Below portion represent the manual testing of redux store

// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: "",
//     type: "code",
//   },
// });

// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: {
//     id: "",
//     type: "text",
//   },
// });

// console.log(store.getState());
