import cardRevealReducer from './cardListReducer';
import kingReducer from './kingReducer';
import { suite1, suite2, suite3, suite4 } from '../Helper Functions/card-helper-functions.component';
function clockReducers(state, action){
    switch (action.type){
        case 'RESET':{
            return {
                suite1: cardRevealReducer([ false, false, false, false, false, false, false, false, false, false, false, false, false], action, suite1),
                suite2: cardRevealReducer([ false, false, false, false, false, false, false, false, false, false, false, false, false], action, suite2),
                suite3: cardRevealReducer([ false, false, false, false, false, false, false, false, false, false, false, false, false], action, suite3),
                suite4: cardRevealReducer([ false, false, false, false, false, false, false, false, false, false, false, false, false], action, suite4),
                king1: kingReducer({"suite" : suite1, "value" : "?", "reveal" : true} , action, suite1),
                king2: kingReducer({"suite" : suite2, "value" : "?", "reveal" : false} , action, suite2),
                king3: kingReducer({"suite" : suite3, "value" : "?", "reveal" : false} , action, suite3),
                king4: kingReducer({"suite" : suite4, "value" : "?", "reveal" : false} , action, suite4),
            }
        }
        case 'REVEAL':{
            return {
                suite1: cardRevealReducer(state.suite1, action, suite1),
                suite2: cardRevealReducer(state.suite2, action, suite2),
                suite3: cardRevealReducer(state.suite3, action, suite3),
                suite4: cardRevealReducer(state.suite4, action, suite4),
                king1: kingReducer(state.king1 , action, suite1),
                king2: kingReducer(state.king2 , action, suite2),
                king3: kingReducer(state.king3 , action, suite3),
                king4: kingReducer(state.king4 , action, suite4),
            }
        }
        case 'REVEAL_NEW_VALUE':{
            return {
                suite1: cardRevealReducer(state.suite1, action, suite1),
                suite2: cardRevealReducer(state.suite2, action, suite2),
                suite3: cardRevealReducer(state.suite3, action, suite3),
                suite4: cardRevealReducer(state.suite4, action, suite4),
                king1: kingReducer(state.king1 , action, suite1),
                king2: kingReducer(state.king2 , action, suite2),
                king3: kingReducer(state.king3 , action, suite3),
                king4: kingReducer(state.king4 , action, suite4),
            }
        }
        case 'REVEAL_KING':{
            return{
                suite1: cardRevealReducer(state.suite1, action, suite1),
                suite2: cardRevealReducer(state.suite2, action, suite2),
                suite3: cardRevealReducer(state.suite3, action, suite3),
                suite4: cardRevealReducer(state.suite4, action, suite4),
                king1: kingReducer(state.king1 , action, suite1),
                king2: kingReducer(state.king2 , action, suite2),
                king3: kingReducer(state.king3 , action, suite3),
                king4: kingReducer(state.king4 , action, suite4),
            }
        }
        default:
            return {
                suite1: cardRevealReducer([ false, false, false, false, false, false, false, false, false, false, false, false, false], action, suite1),
                suite2: cardRevealReducer([ false, false, false, false, false, false, false, false, false, false, false, false, false], action, suite2),
                suite3: cardRevealReducer([ false, false, false, false, false, false, false, false, false, false, false, false, false], action, suite3),
                suite4: cardRevealReducer([ false, false, false, false, false, false, false, false, false, false, false, false, false], action, suite4),
                king1: kingReducer({"suite" : suite1, "value" : "?", "reveal" : true} , action, suite1),
                king2: kingReducer({"suite" : suite2, "value" : "?", "reveal" : false} , action, suite2),
                king3: kingReducer({"suite" : suite3, "value" : "?", "reveal" : false} , action, suite3),
                king4: kingReducer({"suite" : suite4, "value" : "?", "reveal" : false} , action, suite4),
            }

    }
}

export default clockReducers;