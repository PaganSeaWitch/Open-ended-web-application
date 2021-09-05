const revealKing = (king) =>{
    return {
        type: 'REVEAL_KING',
        suite : king.suite,
        execute : (state) =>{state.value = king.value; state.suite = king.suite; state.reveal = king.reveal; return state;},
    }
}

export default revealKing;