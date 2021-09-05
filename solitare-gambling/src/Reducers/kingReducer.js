const defaultState = {"suite" : "?", "value" : "?", "reveal" : false} 
const kingReducer = (state = defaultState, action, suite) =>{
    switch(action.type){
        case('REVEAL_NEW_VALUE'):
           if(action.suite === suite){
                return action.execute(state);
           }
           return state;

        case('REVEAL_KING'):
           if(action.suite === suite){
               return action.execute(state);
           }
           return state;

        default:
            return state;
    }
}

export default kingReducer;