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

    const [suite1KingValues, setSuite1KingValues] = useState({
        "suite" : "?",
        "value" : "?",
        "reveal" : false,
    })


    const [suite2KingValues, setSuite2KingValues] = useState({
        "suite" : "?",
        "value" : "?",
        "reveal" : false,
    })


    const [suite3KingValues, setSuite3KingValues] = useState({
        "suite" : "?",
        "value" : "?",
        "reveal" : false,
    })


    const [suite4KingValues, setSuite4KingValues] = useState({
        "suite" : "?",
        "value" : "?",
        "reveal" : false,
    })


    const [kingValues] = useState({
        [suite1] : suite1KingValues,
        [suite2]: suite2KingValues,
        [suite3]: suite3KingValues,
        [suite4]: suite4KingValues,
    })
    

    
    
    const setRef = (countdown) => {
        if (countdown) {
            setCountdownAPI(countdown.getApi());
        }
    };


    const SimulateRound = () =>{
        let currentValue;
        let actualSuite;
        let currentKing;
        for(const key in kingValues){
            currentKing = key;
            switch(currentKing){
                case(suite1):
                    currentValue = suite1KingValues["value"]
                    actualSuite = suite1KingValues["suite"]
                    break;
                case(suite2):
                    currentValue = suite2KingValues["value"]
                    actualSuite = suite2KingValues["suite"]
                    break;
                case(suite3):
                    currentValue = suite3KingValues["value"]
                    actualSuite = suite3KingValues["suite"]
                    break;
                case(suite4):
                    currentValue = suite4KingValues["value"]
                    actualSuite = suite4KingValues["suite"]
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
                    switch(actualSuite){
                        case(suite1):
                            setSuite1KingValues({...suite1KingValues,"suite": suite1, 
                            "value": "13",
                            "reveal": true})
                            break;
                        case(suite2):
                            setSuite2KingValues({...suite2KingValues,"suite": suite2, 
                            "value": "13",
                            "reveal": true})
                            break;
                        case(suite3):
                            setSuite3KingValues({...suite4KingValues,"suite": suite3, 
                            "value": "13",
                            "reveal": true})
                            break;
                        case(suite4):
                            setSuite4KingValues({...suite4KingValues,"suite": suite4, 
                            "value": "13",
                            "reveal": true})
                            break;
                        default:
                            return;
                    }
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


        if(currentValue !== "?"){
            dispatch(reveal(currentValue, actualSuite));
        }
        const newCard = getRandomCard(cardsLeft, setCardsLeft);
        const cardString = "" + newCard.value;
        kingValues[currentKing] = cardString;

        const cardObject = {
            "suite" : newCard.suite, 
            "value" : cardString,
            "reveal": true }


        switch(currentKing){
            case(suite1):
                setSuite1KingValues({...suite1KingValues,"suite": cardObject.suite, 
                "value": cardObject.value,
                "reveal": cardObject.reveal})
                break;
            case(suite2):
                setSuite2KingValues({...suite2KingValues,"suite": cardObject.suite, 
                "value": cardObject.value,
                "reveal": cardObject.reveal})
                break;
            case(suite3):
                setSuite3KingValues({...suite3KingValues,"suite": cardObject.suite, 
                "value": cardObject.value,
                "reveal": cardObject.reveal})
                break;
            case(suite4):
                setSuite4KingValues({...suite4KingValues,"suite": cardObject.suite, 
                "value": cardObject.value,
                "reveal": cardObject.reveal})
                break;
            default:
                console.log("Defaulted!")
                return;
        }
        

    }


    const setUpRound =()=>{        
        setCardsLeft(getStandardDeckOfCards())
    }


    const resetValues = ()=>{
        setSuite1KingValues({...suite1KingValues,"suite": "?", 
                "value": "?",
                "reveal": false})
        setSuite2KingValues({...suite2KingValues,"suite": "?", 
            "value": "?",
            "reveal": false})
        setSuite3KingValues({...suite3KingValues,"suite": "?", 
            "value": "?",
            "reveal": false})
        setSuite4KingValues({...suite4KingValues,"suite": "?", 
            "value": "?",
            "reveal": false})
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
                                <PlayingCard card={{suite:suite1KingValues["suite"],value:suite1KingValues["value"],revealCard:suite1KingValues["reveal"]}}  containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite2KingValues["suite"],value:suite2KingValues["value"],revealCard:suite2KingValues["reveal"]}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite3KingValues["suite"],value:suite3KingValues["value"],revealCard:suite3KingValues["reveal"]}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard card={{suite:suite4KingValues["suite"],value:suite4KingValues["value"],revealCard:suite4KingValues["reveal"]}} containerHeight={containerHeight} containerWidth={containerWidth}/>
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

export default ClockSolitare