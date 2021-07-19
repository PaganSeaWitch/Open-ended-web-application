import React from 'react';
import {useWindowDimensions} from "./helper-functions.componet"
import PlayingCard from "./card.component";
import Grid from '@material-ui/core/Grid';
import { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Countdown from 'react-countdown';
const ClockSolitare = () => {
	
    const { height, width } = useWindowDimensions();
    const containerHeight = height 
    const containerWidth = width  - 300
    const suite1 = "diamond"
    const suite2 = "club"
    const suite3 = "heart"
    const suite4 = "spade"
    const miliSeconds = 30000
    const [countdownAPI, setCountdownAPI] = useState()
    const [stateOfGame, setStateOfGame] = useState("continue")
    const [timer, setTimer] = useState(Date.now()+miliSeconds)
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


    const [kingValues, setKingValues] = useState({
        [suite1] : suite1KingValues,
        [suite2]: suite2KingValues,
        [suite3]: suite3KingValues,
        [suite4]: suite4KingValues,
    })
    

    const [suite1Dictionary, setSuite1Dictionary] = useState({
        "1" : false,
        "2" : false,
        "3" : false,
        "4" : false,
        "5" : false,
        "6" : false,
        "7" : false,
        "8" : false,
        "9" : false,
        "10": false,
        "11": false,
        "12": false,
        "13": false
    })


    const [suite2Dictionary, setSuite2Dictionary] = useState({
        "1" : false,
        "2" : false,
        "3" : false,
        "4" : false,
        "5" : false,
        "6" : false,
        "7" : false,
        "8" : false,
        "9" : false,
        "10": false,
        "11": false,
        "12": false,
        "13": false
    })


    const [suite3Dictionary, setSuite3Dictionary] = useState({
        "1" : false,
        "2" : false,
        "3" : false,
        "4" : false,
        "5" : false,
        "6" : false,
        "7" : false,
        "8" : false,
        "9" : false,
        "10": false,
        "11": false,
        "12": false,
        "13": false
    })


    const [suite4Dictionary,setSuite4Dictionary]  = useState({
        "1" : false,
        "2" : false,
        "3" : false,
        "4" : false,
        "5" : false,
        "6" : false,
        "7" : false,
        "8" : false,
        "9" : false,
        "10": false,
        "11": false,
        "12": false,
        "13": false
    })


    const [visibleCardDictionary,setVisibleCardDictionary] = useState({
        [suite1] : suite1Dictionary,
        [suite2] : suite2Dictionary,
        [suite3] : suite3Dictionary,
        [suite4] : suite4Dictionary
    });


    const getSuite = (num) =>{
        switch(num){
            case(1):
                return suite1
            case(2):
                return suite2
            case(3):
                return suite3
            case(4):
                return suite4
            default:
                return "?"

        }
    }


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }


    const setRef = (countdown) => {
        if (countdown) {
            setCountdownAPI(countdown.getApi());
        }
    };


    const getRandomCard = () =>{
        let suite = getRandomInt(1, 5);
        let card = getRandomInt(1, 14);
        let suiteString = getSuite(suite);
        let isChosenCardVisible = visibleCardDictionary[suiteString][card];
        while(isChosenCardVisible){
            suite = getRandomInt(1, 5);
            card = getRandomInt(1, 14);
            suiteString = getSuite(suite);
            isChosenCardVisible = visibleCardDictionary[suiteString][card];
        }
        return {suiteString, card}
    }


    const SimulateRound = () =>{
        let currentValue;
        let currentKing;
        for(const key in kingValues){
            currentKing = key;
            let actualSuite;
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
                            setSuite1KingValues({...suite2KingValues,"suite": suite2, 
                            "value": "13",
                            "reveal": true})
                            break;
                        case(suite3):
                            setSuite1KingValues({...suite4KingValues,"suite": suite3, 
                            "value": "13",
                            "reveal": true})
                            break;
                        case(suite4):
                            setSuite1KingValues({...suite4KingValues,"suite": suite4, 
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
            console.log(currentValue)
            switch(currentKing){
                case(suite1):
                    setSuite1Dictionary({...suite1Dictionary, [currentValue]: true })
                    break;
                case(suite2):
                    setSuite2Dictionary({...suite2Dictionary, [currentValue]: true })
                    break;
                case(suite3):
                    setSuite3Dictionary({...suite3Dictionary, [currentValue]: true })
                    break;
                case(suite4):
                    setSuite4Dictionary({...suite4Dictionary, [currentValue]: true })
                    break;
            }
        }
        const newCard = getRandomCard();
        const cardString = "" + newCard.card;
        kingValues[currentKing] = cardString;

        const cardObject = {
            "suite" : newCard.suiteString, 
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
        }
        

    }


    useEffect(() => {
        SimulateRound();
    },[])

    useEffect(() => {
        console.log(suite4KingValues)
        console.log(suite1KingValues)
        console.log(suite3KingValues)
        console.log(suite2KingValues)
    },[suite1KingValues. suite2KingValues, suite3KingValues, suite4KingValues])
    useEffect(() => {
        console.log(suite1Dictionary)
        console.log(suite2Dictionary)
        console.log(suite3Dictionary)
        console.log(suite4Dictionary)
    },[suite1Dictionary. suite2Dictionary, suite3Dictionary, suite4Dictionary])
    // Renderer callback
    const renderer = ({seconds}) => {
        return <span>{seconds} seconds</span>;
    };


    const doNextAction = () =>{
        if(stateOfGame === "continue"){
            SimulateRound();
        }

        else if(stateOfGame === "end"){
        }

        setTimer(Date.now() + miliSeconds);
        
    }


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
                                <PlayingCard suite={suite1} value={"11"} revealCard={suite1Dictionary["11"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite2} value={"11"} revealCard={suite2Dictionary["11"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite3} value={"11"} revealCard={suite3Dictionary["11"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite4} value={"11"} revealCard={suite4Dictionary["11"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={suite1} value={"12"} revealCard={suite1Dictionary["12"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite2} value={"12"} revealCard={suite2Dictionary["12"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite3} value={"12"} revealCard={suite3Dictionary["12"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite4} value={"12"} revealCard={suite4Dictionary["12"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={suite1} value={"1"} revealCard={suite1Dictionary["1"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite2} value={"1"} revealCard={suite2Dictionary["1"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite3} value={"1"} revealCard={suite3Dictionary["1"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite4} value={"1"} revealCard={suite4Dictionary["1"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>   
                <br/>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={suite1} value={"10"} revealCard={suite1Dictionary["10"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite2} value={"10"} revealCard={suite2Dictionary["10"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite3} value={"10"} revealCard={suite3Dictionary["10"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite4} value={"10"} revealCard={suite4Dictionary["10"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={suite1} value={"2"} revealCard={suite1Dictionary["2"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite2} value={"2"} revealCard={suite2Dictionary["2"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite3} value={"2"} revealCard={suite3Dictionary["2"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite4} value={"2"} revealCard={suite4Dictionary["2"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br/>

                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={suite1} value={"9"} revealCard={suite1Dictionary["9"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite2} value={"9"} revealCard={suite2Dictionary["9"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite3} value={"9"} revealCard={suite3Dictionary["9"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite4} value={"9"} revealCard={suite4Dictionary["9"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={suite1KingValues["suite"]} value={suite1KingValues["value"]} revealCard={suite1KingValues["reveal"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={kingValues[suite2][0]} value={kingValues[suite2][1]} revealCard={kingValues[suite2][2]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={kingValues[suite3][0]} value={kingValues[suite3][1]} revealCard={kingValues[suite3][2]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={kingValues[suite4][0]} value={kingValues[suite4][1]} revealCard={kingValues[suite4][2]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={suite1} value={"3"} revealCard={suite1Dictionary["3"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite2} value={"3"} revealCard={suite2Dictionary["3"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite3} value={"3"} revealCard={suite3Dictionary["3"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite4} value={"3"} revealCard={suite4Dictionary["3"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br/>
                <header className={classes.title}>
                Next Move Begins IN: <Countdown date={timer} ref={setRef} renderer={renderer} onComplete={doNextAction} />
                </header>
                
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={suite1} value={"8"} revealCard={suite1Dictionary["8"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite2} value={"8"} revealCard={suite2Dictionary["8"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite3} value={"8"} revealCard={suite3Dictionary["8"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite4} value={"8"} revealCard={suite4Dictionary["8"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={suite1} value={"4"} revealCard={suite1Dictionary["4"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite2} value={"4"} revealCard={suite2Dictionary["4"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite3} value={"4"} revealCard={suite3Dictionary["4"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite4} value={"4"} revealCard={suite4Dictionary["4"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br/>

                <Grid container justifyContent="space-between"> 
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={suite1} value={"7"} revealCard={suite1Dictionary["7"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite2} value={"7"} revealCard={suite2Dictionary["7"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite3} value={"7"} revealCard={suite3Dictionary["7"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite4} value={"7"} revealCard={suite4Dictionary["7"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={suite1} value={"6"} revealCard={suite1Dictionary["6"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite2} value={"6"} revealCard={suite2Dictionary["6"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite3} value={"6"} revealCard={suite3Dictionary["6"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite4} value={"6"} revealCard={suite4Dictionary["6"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={suite1} value={"5"} revealCard={suite1Dictionary["5"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite2} value={"5"} revealCard={suite2Dictionary["5"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite3} value={"5"} revealCard={suite3Dictionary["5"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={suite4} value={"5"} revealCard={suite4Dictionary["5"]} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>  
            </div>
        </div>
    );
	
	
};

export default ClockSolitare