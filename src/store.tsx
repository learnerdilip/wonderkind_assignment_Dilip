import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./store/index";

import ReduxThunk from "redux-thunk";

const enhancer = compose(applyMiddleware(ReduxThunk));
const store: any = createStore(reducer, enhancer);
export default store;
