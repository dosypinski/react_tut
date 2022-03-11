import { createStore } from "redux";
import shortid from "shortid";
import initialState from "./initialState";

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(searchString.toLowerCase()));

const reducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_SEARCHSTRING':
            return {...state, searchString: action.payload};
        case 'ADD_COLUMN':
            return {...state, columns: [...state.columns, {...action.payload, id: shortid() }]};
        case 'ADD_CARD':
            return {...state, cards: [...state.cards, {...action.payload, id: shortid() }]};
        default:
            return state;
    }
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;