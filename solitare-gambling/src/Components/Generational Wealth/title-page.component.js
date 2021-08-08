import React, { useEffect, useState, useRef } from 'react'
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import { GenerationTheme } from '../../Helper Functions/styler-helper';
import { fadeOutAndSwitchPages } from '../../Helper Functions/animation-helper-functions';
import { useSpring, animated } from 'react-spring'

const TitlePage = ({changePage}) => {
    const [style, api] = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }},[])

  return (
    <animated.div style={style}>
        <div className={"title"}>
            <header>
                <h1>Generational Wealth</h1>
                <div>By</div>
                <br/>
                {' J.W.P.'}
            </header>
            <div className={"itemList"}>
                <ThemeProvider theme ={GenerationTheme}>
                    <Button onClick={()=>{fadeOutAndSwitchPages(api, changePage,'beginning')}}> Play</Button>
                </ThemeProvider >
            </div >
            <div className={"itemList"}>
                <ThemeProvider theme ={GenerationTheme}>
                    <Button onClick={()=>{fadeOutAndSwitchPages(api, changePage,'loadFromCookies')}}> Continue</Button>
                </ThemeProvider>
            </div>
            <div className={"itemList"}> 
                <ThemeProvider theme ={GenerationTheme}>
                    <Button onClick={()=>{fadeOutAndSwitchPages(api, changePage,'about')}}> About The Game</Button>
                </ThemeProvider>
            </div>
            <div className={"itemList"}> 
                <ThemeProvider theme ={GenerationTheme}>
                    <Button onClick={()=>{fadeOutAndSwitchPages(api, changePage,'saving')}}> About Saving The Game</Button>
                </ThemeProvider>
            </div>
        </div>
    </animated.div>

  )
}
export default TitlePage;