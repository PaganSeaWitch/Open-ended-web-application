const reveal = (which, suite) =>{
    return {
        type: 'REVEAL',
        suite: suite,
        execute : (state) =>{state[parseInt(which)]=true; return state;},
    }
}

export default reveal;