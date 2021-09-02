import { createStore, combineReducers } from "redux";

// REDUCERS
import authReducer from "redux/reducers/reducerAuth";
import commonReducer from "redux/reducers/reducerCommon";
import catalogReducer from "redux/reducers/reducerCatalog";
import reducerCart from "redux/reducers/reducerCart";

// STORE CREATION
const rootReducer = combineReducers({
    auth: authReducer,
    common: commonReducer,
    catalog: catalogReducer,
    cart: reducerCart,
});

export default createStore(rootReducer);
