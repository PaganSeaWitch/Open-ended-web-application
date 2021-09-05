import React from 'react';
import {useWindowDimensions} from "../../Helper Functions/helper-functions.componet"
import PlayingCard from "./card.component";
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Countdown from 'react-countdown';
import { suite1, suite2, suite3, suite4 } from '../../Helper Functions/card-helper-functions.component';
import { getStandardDeckOfCards, getRandomCard} from '../../Helper Functions/game-helper-functions';
import { useSelector, useDispatch } from 'react-redux';
import reveal from '../../Actions/Reveal';
import reset from '../../Actions/Reset';
import revealKing from '../../Actions/RevealKing';
import revealNewValue from '../../Actions/RevealNewValue';
const ClockSolitare = () => {
	
    const { height, width } = useWindowDimensions();
    const containerHeight = height 
    const containerWidth = width  - 300
    const dispatch = useDispatch()
    const miliSeconds = 15000
    const [countdownAPI, setCountdownAPI] = useState()
    const [stateOfGame, setStateOfGame] = useState("continue")
    const [timer, setTimer] = useState(Date.now()+miliSeconds)
    const [cardsLeft, setCardsLeft] = useState([])
    const king1CurrentValue = useSelector(state => state.king1.value)
    const king1ActualSuite = useSelector(state => state.king1.suite)
    const king2CurrentValue = useSelector(state => state.king2.value)
    const king2ActualSuite = useSelector(state => state.king2.suite)
    const king3CurrentValue = useSelector(state => state.king3.value)
    const king3ActualSuite = useSelector(state => state.king3.suite)
    const king4currentValue = useSelector(state => state.king4.value)
    const king4actualSuite = useSelector(state => state.king4.suite)

    const kingValues = [suite1, suite2, suite3, suite4];
    
    
    const setRef = (countdown) => {
        if (countdown) {
            setCountdownAPI(countdown.getApi());
        }
    };


    const SimulateRound = () =>{
        let currentValue;
        let actualSuite;
        let currentKing;
        
        for(let i = 0; i < kingValues.length; i++){

            currentKing = kingValues[i];
            switch(currentKing){
                case(suite1):
                    currentValue = king1CurrentValue
                    actualSuite = king1ActualSuite
                    break;
                case(suite2):
                    currentValue = king2CurrentValue
                    actualSuite = king2ActualSuite
                    break;
                case(suite3):
                    currentValue = king3CurrentValue
                    actualSuite = king3ActualSuite
                    break;
                case(suite4):
                    currentValue = king4currentValue
                    actualSuite = king4actualSuite
                    break;
                default:
                    currentValue = "?"
                    actualSuite ="?"
                    break;
            }
            console.log(currentValue)
            
            if(currentValue === "13"){
                console.log(actualSuite)
                console.log(currentKing)
                if(actualSuite !== currentKing){
                    currentValue = "?";
                    dispatch(revealKing({"value" : "13", "reveal" : true, "suite" : actualSuite}));
                }

            }
            if(currentValue !== "13"){
                break;
            }
            
        }

        if(currentValue === "13"){
            setStateOfGame("end");
            return;
        }

        console.log("WHAT IS VLAUE: ? :"+ currentValue)
        if(currentValue !== "?"){
            dispatch(reveal(currentValue, actualSuite));
        }

        const newCard = getRandomCard(cardsLeft, setCardsLeft);
        const cardString = "" + newCard.value;

        const cardObject = {
            "suite" : newCard.suite, 
            "value" : cardString,
            "reveal": true }
        
        dispatch(revealNewValue(cardObject, currentKing));
    }


    const setUpRound =()=>{        
        setCardsLeft(getStandardDeckOfCards())
    }


    const resetValues = ()=>{
        dispatch(reset());
        setStateOfGame("continue");
    }


    const doNextAction = () =>{
        if(stateOfGame === "continue"){
            SimulateRound();
        }

        else if(stateOfGame === "end"){
            setUpRound();
            resetValues();
        }

        setTimer(Date.now() + miliSeconds);
        
    }


    useEffect(() => {
        setUpRound();
    },[])


    useEffect(() => {
        console.log(cardsLeft)
        if(cardsLeft.length === 52){
            SimulateRound();
        }
    }, [cardsLeft])


    // Renderer callback
    const renderer = ({seconds}) => {
        if(stateOfGame === "end"){
            return <span>Next Game Begins in: {seconds} seconds</span>;
        }
        return <span>Next Move Begins in: {seconds} seconds</span>;
    };


    useEffect(() => {
        if(countdownAPI != null){
            countdownAPI.start();
        }
    }, [timer])



    const useStyles = makeStyles({
        root: {
          maxWidth: containerWidth,
          maxHeight:containerHeight,
          "background-color": "lightslategray",
          marginTop:"45px",
          marginLeft:"auto",
          marginRight:"auto",
          overflow:"visible",
        },
        outer: {
            minWidth:width,
            minHeight:height,
            "background-color": "lightslategray",
            margin:"auto",
            overflow:"hidden",
          
        },
        title: {
          fontSize: 35,
          textAlign:"center",
          marginTop:"10px",
        },
        pos: {
          marginBottom: 12,
        },
    });
    const classes = useStyles();


    return (
        <div className={classes.outer}>
            <header className={classes.title}>
                CLOCK SOLITARE
                
            </header>
            <br/>
            <div className={classes.root}>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard card={{suite:suite1, value:"11", revealCard:useSelector(state => state.suite1[11])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite2, value:"11", revealCard:useSelector(state => state.suite2[11])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite3, value:"11", revealCard:useSelector(state => state.suite3[11])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite4, value:"11", revealCard:useSelector(state => state.suite4[11])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard card={{suite:suite1, value:"12", revealCard:useSelector(state => state.suite1[12])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite2, value:"12", revealCard:useSelector(state => state.suite2[12])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite3, value:"12", revealCard:useSelector(state => state.suite3[12])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite4, value:"12", revealCard:useSelector(state => state.suite4[12])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard card={{suite:suite1, value:"1", revealCard:useSelector(state => state.suite1[1])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite2, value:"1", revealCard:useSelector(state => state.suite2[1])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite3, value:"1", revealCard:useSelector(state => state.suite3[1])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite4, value:"1", revealCard:useSelector(state => state.suite4[1])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>   
                <br/>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard card={{suite:suite1, value:"10", revealCard:useSelector(state => state.suite1[10])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite2, value:"10", revealCard:useSelector(state => state.suite2[10])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite3, value:"10", revealCard:useSelector(state => state.suite3[10])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite4, value:"10", revealCard:useSelector(state => state.suite4[10])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard card={{suite:suite1, value:"2", revealCard:useSelector(state => state.suite1[2])}}containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite2, value:"2", revealCard:useSelector(state => state.suite2[2])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite3, value:"2", revealCard:useSelector(state => state.suite3[2])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite4, value:"2", revealCard:useSelector(state => state.suite4[2])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br/>

                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard card={{suite:suite1, value:"9", revealCard:useSelector(state => state.suite1[9])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite2, value:"9", revealCard:useSelector(state => state.suite2[9])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite3, value:"9", revealCard:useSelector(state => state.suite3[9])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite4, value:"9", revealCard:useSelector(state => state.suite4[9])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard card={{suite:useSelector(state => state.king1.suite),value:useSelector(state => state.king1.value),revealCard:useSelector(state => state.king1.reveal)}}  containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:useSelector(state => state.king2.suite),value:useSelector(state => state.king2.value),revealCard:useSelector(state => state.king2.reveal)}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:useSelector(state => state.king3.suite),value:useSelector(state => state.king4.value),revealCard:useSelector(state => state.king3.reveal)}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:useSelector(state => state.king4.suite),value:useSelector(state => state.king4.value),revealCard:useSelector(state => state.king4.reveal)}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard card={{suite:suite1, value:"3", revealCard:useSelector(state => state.suite1[3])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite2, value:"3", revealCard:useSelector(state => state.suite2[3])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite3, value:"3", revealCard:useSelector(state => state.suite3[3])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite4, value:"3", revealCard:useSelector(state => state.suite4[3])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br/>
                <header className={classes.title}>
                 <Countdown date={timer} ref={setRef} renderer={renderer} onComplete={doNextAction} />
                </header>
                
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard card={{suite:suite1, value:"8", revealCard:useSelector(state => state.suite1[8])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite2, value:"8", revealCard:useSelector(state => state.suite2[8])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite3, value:"8", revealCard:useSelector(state => state.suite3[8])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite4, value:"8", revealCard:useSelector(state => state.suite4[8])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard card={{suite:suite1, value:"4", revealCard:useSelector(state => state.suite1[4])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite2, value:"4", revealCard:useSelector(state => state.suite2[4])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite3, value:"4", revealCard:useSelector(state => state.suite3[4])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite4, value:"4", revealCard:useSelector(state => state.suite4[4])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br/>

                <Grid container justifyContent="space-between"> 
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard card={{suite:suite1, value:"7", revealCard:useSelector(state => state.suite1[7])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite2, value:"7", revealCard:useSelector(state => state.suite2[7])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite3, value:"7", revealCard:useSelector(state => state.suite3[7])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite4, value:"7", revealCard:useSelector(state => state.suite4[7])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard card={{suite:suite1, value:"6", revealCard:useSelector(state => state.suite1[6])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite2, value:"6", revealCard:useSelector(state => state.suite2[6])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite3, value:"6", revealCard:useSelector(state => state.suite3[6])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite4, value:"6", revealCard:useSelector(state => state.suite4[6])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard card={{suite:suite1, value:"5", revealCard:useSelector(state => state.suite1[5])}}  containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite2, value:"5", revealCard:useSelector(state => state.suite2[5])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite3, value:"5", revealCard:useSelector(state => state.suite3[5])}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite4, value:"5", revealCard:useSelector(state => state.suite4[5])}}containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> 
            </div>
        </div>
    );
	
	
};
ClockSolitare.whyDidYouRender = true;
export default ClockSolitare