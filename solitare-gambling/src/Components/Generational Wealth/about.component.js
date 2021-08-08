import React, { useEffect, useState, useRef } from 'react'
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import { GenerationTheme } from '../../Helper Functions/styler-helper';
import { useSpring, animated } from 'react-spring'
import { fadeOutAndSwitchPages } from '../../Helper Functions/animation-helper-functions';
const About = ({changePage}) => {
    const [style, api] = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }},[])
  return (
    <animated.div style={style}>
        <div className={"title"}>
            <header>
                <h1>About Generational Wealth</h1>
            </header>
            <p className={"midWidth"}>Idle games may seem at first the most unpolitical genre of game. The entire concept is literally make number go up.
    However, this concept in itself is actually a potent distillation of the current dominant economic system we live in. 
    That being, capitalism. Just as we grow numbers so high they become meaningless so do companies and their executives. 
    It could be said that the idle game is the encapsulation of the must pure power fantasy of the common man, to become a millionaire even zillionaire over night with ease. 
    And this distillation has thus created political messages even where there are none intended. 
    Games like wizard idle, progress knight or idle to rule the gods have the underlying message that in order to progress in status, wealth and power all one need do is work hard and the natural rewards will follow.
    This is evidently not true, life is not so simple that a step by step guide is all it takes. 
    And essentially that’s where the idea to make generational wealth came from. It is refutation. 
    Generational wealth puts you as a black man made a slave and asks you to continue your familial line to modern day and to make yourself rich & successful.{"\n How hard can it be?"}</p>
            <div className={"itemList"}> 
                <ThemeProvider theme ={GenerationTheme}>
                    <Button onClick={() =>{fadeOutAndSwitchPages(api, changePage,'main')}}> Back</Button>
                </ThemeProvider>
            </div>
        </div>
    </animated.div>
  )
}
export default About;