import cardListReducer from './cardListReducer';
import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import cardRevealReducer from './cardListReducer';
import { suite1, suite2, suite3, suite4 } from '../Helper Functions/card-helper-functions.component';
function clockReducers(state, action){
    switch (action.type){
        case 'RESET':{
            return {
                suite1: cardRevealReducer([ false, false, false, false, false, false, false, false, false, false, false, false, false], action, suite1),
                suite2: cardRevealReducer([ false, false, false, false, false, false, false, false, false, false, false, false, false], action, suite2),
                suite3: cardRevealReducer([ false, false, false, false, false, false, false, false, false, false, false, false, false], action, suite3),
                suite4: cardRevealReducer([ false, false, false, false, false, false, false, false, false, false, false, false, false], action, suite4),
            }
        }
        case 'REVEAL':{
            return {
                suite1: cardRevealReducer(state.suite1, action, suite1),
                suite2: cardRevealReducer(state.suite2, action, suite2),
                suite3: cardRevealReducer(state.suite3, action, suite3),
                suite4: cardRevealReducer(state.suite4, action, suite4),
            }
        }
        default:
            return {
                suite1: cardRevealReducer([ false, false, false, false, false, false, false, false, false, false, false, false, false], action, suite1),
                suite2: cardRevealReducer([ false, false, false, false, false, false, false, false, false, false, false, false, false], action, suite2),
                suite3: cardRevealReducer([ false, false, false, false, false, false, false, false, false, false, false, false, false], action, suite3),
                suite4: cardRevealReducer([ false, false, false, false, false, false, false, false, false, false, false, false, false], action, suite4),
            }

    }
}

export default clockReducers;