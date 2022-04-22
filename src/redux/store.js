import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from 'redux-persist';
import thunk from "redux-thunk"; 
import  persistReducer from "./reducers/index";


const middleware = [thunk];


export const store = createStore(
    persistReducer,
    compose(
        applyMiddleware(...middleware),
        compose
    )
);
export const persistor = persistStore(store);