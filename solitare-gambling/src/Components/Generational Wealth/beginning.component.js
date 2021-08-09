import React, { useEffect, useState, useRef } from 'react'
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import { GenerationTheme } from '../../Helper Functions/styler-helper';
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/core';
import InputDialogue from './input-dialogue.component';
const Beginning = ({changePage}) => {
    const [upperLid, upperLidAPI] = useSpring(() => ({ to: {bottom: "50vh"}, from: { bottom: "50vh"}}))
    const [lowerLid, lowerLidAPI] = useSpring(() => ({ to:{ top: "50vh"}, from: { top: "50vh"}}))
    const [awaken, setAwaken] = useState(false);
    const [askName, setAskName] = useState(true);
    const inputLabels = ['Name']
    useEffect(() => {
        if(awaken){
            lowerLidAPI.start({ to: async(next, cancel)=> {
                await next({top: '65vh' }) 
                await next({top: '50vh'})
                await next({top: '70vh'})
                await next({top: '50vh'})
                await next({top: '100vh'})
        
            }, from: { top: "50vh"}})
            upperLidAPI.start({ to: async(next, cancel)=> {
                await next({bottom: '65vh' }) 
                await next({bottom: '50vh'})
                await next({bottom: '70vh'})
                await next({bottom: '50vh'})
                await next({bottom: '100vh'})
        
            }, from: { bottom: "50vh"}})
        }
    }, [awaken])

    const confirm = () =>{
        console.log("confirmed");
    }
    return (
        
        <div className={"place"}>
            
            <div className={'sky'}></div>
            <div className={'grass'}></div>
            <animated.div
            style={{left:0, right:0, top:0,bottom: "50vh", backgroundColor:'black',position:'absolute',...upperLid}}/>
            <animated.div
            style={{left:0, right:0, bottom:0, top: "50vh", backgroundColor:'black',position:'absolute',...lowerLid}}/>
            <InputDialogue title={"What is your name?"} open={askName} inputLabel={inputLabels[0]} setOpen={setAskName} onConfirm={confirm}/>
        </div>
  )
}
export default Beginning;