import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { initialCats } from "../featurs/catsSlice";
import { catsReducer } from "../featurs/catsSlice";

const store = createStore(combineReducers({
    cats: catsReducer
}),{
    cats:initialCats
},applyMiddleware(thunk))

export default store