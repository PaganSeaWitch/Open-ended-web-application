import React, { useEffect, useState, useRef } from 'react'
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import { GenerationTheme } from '../../Helper Functions/styler-helper';
import { useSpring, animated } from 'react-spring'
import { fadeOutAndSwitchPages } from '../../Helper Functions/animation-helper-functions';

const Saving = ({changePage}) => {
    const [style, api] = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }},[])

  return (
    <animated.div style={style}>

        <div className={"title"}>
            <header>
                <h1>About Saving</h1>
            </header>
            <p className={"midWidth"}>The game saves automatically in your browser's cookies. You cannot load saves.
            Please do not remove your cookies if you wish to preserve progress. 
            The reason for this harsh saving system is because this game has to have weight. harsh penalties add weight.</p>
            <div className={"itemList"}> 
                <ThemeProvider theme ={GenerationTheme}>
                    <Button onClick={() =>{fadeOutAndSwitchPages(api, changePage,'main')}}> Back</Button>
                </ThemeProvider>
            </div>
        </div>
    </animated.div>

  )
}
export default Saving;