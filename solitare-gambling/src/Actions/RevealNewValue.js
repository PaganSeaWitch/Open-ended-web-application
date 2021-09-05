const revealNewValue = (newCard, kingSuite) =>{
    return {
        type: 'REVEAL_NEW_VALUE',
        suite: kingSuite,
        execute : (state) =>{state.value = newCard.value; state.suite = newCard.suite; state.reveal = newCard.reveal; return state;},
    }
}

export default revealNewValue;