import React, { useEffect, useState, useRef } from 'react'
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import { GenerationTheme } from '../../Helper Functions/styler-helper';
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/core';
const Beginning = ({changePage}) => {
    const [upperLid, upperLidAPI] = useSpring(() => ({ to: async(next, cancel)=> {
        await next({bottom: '65vh' }) 
        await next({bottom: '50vh'})
        await next({bottom: '70vh'})
        await next({bottom: '50vh'})
        await next({bottom: '100vh'})

    }, from: { bottom: "50vh"}}))
    const [lowerLid, lowerLidAPI] = useSpring(() => ({ to: async(next, cancel)=> {
        await next({top: '65vh' }) 
        await next({top: '50vh'})
        await next({top: '70vh'})
        await next({top: '50vh'})
        await next({top: '100vh'})

    }, from: { top: "50vh"}}))
    const planetStyle = makeStyles({
    
        sky: {
            position:'absolute',
            right: 0,
            left:0,
            top:0,
            bottom:'40vh',
            backgroundColor:'skyblue',
    
        },
        ground: {
            position:'absolute',
            right: 0,
            left:0,
            top:0,
            bottom:(100/6),
            backgroundColor:'green',

        },});
    const classes = planetStyle();
    return (
        
        <div className={"place"}>
            
            <div className={'sky'}></div>
            <div className={'grass'}></div>
            <animated.div
            style={{left:0, right:0, top:0, backgroundColor:'black',position:'absolute',...upperLid}}/>
            <animated.div
            style={{left:0, right:0, bottom:0, backgroundColor:'black',position:'absolute',...lowerLid}}/>
        </div>
  )
}
export default Beginning;