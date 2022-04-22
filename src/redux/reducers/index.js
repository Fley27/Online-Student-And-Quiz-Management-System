import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import alert from "./alert";
import auth from "./auth";
import user from "./user"


const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth'] 
}

const rootReducer =  combineReducers({
    alert,
    auth,
    user
});

export default persistReducer(persistConfig, rootReducer)