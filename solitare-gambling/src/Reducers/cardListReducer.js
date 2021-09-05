const defaultState = [ false, false, false, false, false, false, false, false, false, false, false, false, false]
const cardRevealReducer = (state = defaultState, action, suite) =>{
    switch(action.type){
        case("REVEAL"):
           if(suite === action.suite){
                return action.execute(state);
           }
           return state;
        default:
            return state;
    }
}

export default cardRevealReducer;