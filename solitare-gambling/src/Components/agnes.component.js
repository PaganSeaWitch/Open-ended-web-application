import {useWindowDimensions} from "./helper-functions.componet";
import React, { useState, useEffect} from "react";
import Grid from '@material-ui/core/Grid';
import PlayingCard from "./card.component";
import InvisibleCard from "./invisible-card.component";
import PlayingCards from "./cards.component";
import { pile1,pile2,pile3,pile4,pile5,pile6,pile7, whereIsPileCard } from "./pile-helper-functions";
import { CheckAgnesRulesForTransferingToPiles, CheckAgnesRulesForTransferingToFoundation } from "./agnes-helper-functions";
import { suite1, suite2, suite3, suite4 } from './card-helper-functions.component';
import { foundation1, foundation2, foundation3, foundation4, WhereIsFoundationCard} from './foundation-helper-functions.js'
import GameOverDialogue from "./Game-over-dialogue.component";
import {getStandardDeckOfCards, getRandomCard, getRandomCards, addCardProperties, getRandomInt} from "./game-helper-functions"
import BlankCardSpace from "./blank-card-space.component";

const Agnes = () =>{

    const { height, width } = useWindowDimensions();

    const containerHeight = height 
    const containerWidth = width  - 300

    const [cardsLeft, setCardsLeft] = useState(getStandardDeckOfCards)
    const [gameEnd, setGameEnd] = useState(false);
    const [gameStart, setGameStart] = useState(true)
    const [firstFoundation, setFirstFoundation] = useState([{}]);
    const [secondFoundation, setSecondFoundation] = useState([{}])
    const [thirdFoundation, setThirdFoundation] = useState([{}]);
    const [fourthFoundation, setFourthFoundation] = useState([{}]);

    const [currentLeadingValue, setCurrentLeadingValue] = useState(1)

    const [firstPile, setFirstPile] = useState([{}]);
    const [secondPile, setSecondPile] = useState([{}]);
    const [thirdPile, setThirdPile] = useState([{}]);
    const [fourthPile, setFourthPile] = useState([{}]);
    const [fifthPile, setFifthPile] = useState([{}]);
    const [sixthPile, setSixthPile] = useState([{}]);
    const [seventhPile, setSeventhPile] = useState([{}]);


    const foundationDictionary ={
        [foundation1] : firstFoundation,
        [foundation2] : secondFoundation,
        [foundation3] : thirdFoundation,
        [foundation4] : fourthFoundation,
    }


    const pileDictionary = {
        [pile1] : firstPile,
        [pile2] : secondPile,
        [pile3] : thirdPile,
        [pile4] : fourthPile,
        [pile5] : fifthPile,
        [pile6] : sixthPile,
        [pile7] : seventhPile,
    }


    const setPile = (tempArray, pile) =>{
        switch(pile){
            case(pile1):
                setFirstPile([...tempArray]);
                break;
            case(pile2):
                setSecondPile([...tempArray]);
                break;
            case(pile3):
                setThirdPile([...tempArray]);
                break;
            case(pile4):
                setFourthPile([...tempArray]);
                break;
            case(pile5):
                setFifthPile([...tempArray]);
                break;
            case(pile6):
                setSixthPile([...tempArray]);
                break;
            case(pile7):
                setSeventhPile([...tempArray]);
                break;
            default:
                console.log(pile)
                break;
        }
    }


    const addToPile = (tempArray, pile) =>{
        switch(pile){
            case(pile1):
                setFirstPile([...firstPile,...tempArray]);
                break;
            case(pile2):
                setSecondPile([...secondPile,...tempArray]);
                break;
            case(pile3):
                setThirdPile([...thirdPile,...tempArray]);
                break;
            case(pile4):
                setFourthPile([...fourthPile,...tempArray]);
                break;
            case(pile5):
                setFifthPile([...fifthPile,...tempArray]);
                break;
            case(pile6):
                setSixthPile([...sixthPile,...tempArray]);
                break;
            case(pile7):
                setSeventhPile([...seventhPile,...tempArray]);
                break;
            default:
                console.log(pile)
                break;
        }
    }


    const getPile = (pileName) =>{
        switch(pileName){
            case(pile1):
                return firstPile
            case(pile2):
                return secondPile
            case(pile3):
                return thirdPile
            case(pile4):
                return fourthPile
            case(pile5):
                return fifthPile
            case(pile6):
                return sixthPile
            case(pile7):
                return seventhPile
            default:
                return null;
        }
    }


    const addToFoundation = (tempArray, foundationName) =>{
        let array;
        switch(foundationName){
            case(foundation1):
                array = firstFoundation;
                array = array.map( x => {return {suite:x.suite, value:x.value, revealCard:true, draggable:false}})
                console.log(array)
                setFirstFoundation([...array,...tempArray])
                break;
            case(foundation2):
                 array = secondFoundation;
                 array = array.map( x => {return {suite:x.suite, value:x.value, revealCard:true, draggable:false}})
                 console.log(array)
                setSecondFoundation([...array,...tempArray])
                break;
            case(foundation3):
                array = thirdFoundation;
                array = array.map( x => {return {suite:x.suite, value:x.value, revealCard:true, draggable:false}})
                console.log(array)
                setThirdFoundation([...array,...tempArray])
                break;
            case(foundation4):
                array = fourthFoundation;
                array = array.map( x => {return {suite:x.suite, value:x.value, revealCard:true, draggable:false}})
                console.log(array)
                setFourthFoundation([...array,...tempArray])
                break;
            default:
                console.log(foundationName)
                break;
        }
    }


    const getFoundation = (foundationName) =>{
        switch(foundationName){
            case(foundation1):
                return firstFoundation
            case(foundation2):
                return secondFoundation
            case(foundation3):
                return thirdFoundation
            case(foundation4):
                return fourthFoundation
            default:
                return null;
        }
    }


    const setFoundation = (tempArray, foundationName) =>{
        switch(foundationName){
            case(foundation1):
                setFirstFoundation([...tempArray])
                break;
            case(foundation2):
                setSecondFoundation([...tempArray])
                break;
            case(foundation3):
                setThirdFoundation([...tempArray])
                break;
            case(foundation4):
                setFourthFoundation([...tempArray])
                break;
            default:
                console.log(foundationName)
                break;
                
        }
    }


    const transferPileToPile = (tempArray, oldPile, newPile, index) =>{
        
        const transferArray = tempArray.slice(index);
        const oldArray = tempArray.slice(0, index);
        if(oldArray.length !== 1){
            oldArray[oldArray.length-1].draggable = true;
            oldArray[oldArray.length-1].revealCard = true;
        }
        setPile(oldArray, oldPile);
        addToPile(transferArray, newPile);
    }


    const transferPileToFoundation = (tempArray, oldPile, newFoundation) =>{
        const transferArray = tempArray.slice(tempArray.length-1);
        const oldArray = tempArray.slice(0, tempArray.length-1);
        if(oldArray.length !== 1){
            oldArray[oldArray.length-1].draggable = true;
            oldArray[oldArray.length-1].revealCard = true;
        }
        setPile(oldArray, oldPile);
        addToFoundation(transferArray, newFoundation);
    }


    const transferFoundationToPile = (tempArray, oldFoundation, newPile) =>{
        const transferArray = tempArray.slice(tempArray.length-1);
        const oldArray = tempArray.slice(0, tempArray.length-1);
        if(oldArray.length !== 1){
            oldArray[oldArray.length-1].draggable = true;
            oldArray[oldArray.length-1].revealCard = true;
        }
        setFoundation(oldArray, oldFoundation);
        addToPile(transferArray, newPile);
    }


    const transferFoundationToFoundation = (tempArray, oldFoundation, newFoundation) =>{
        const transferArray = tempArray.slice(tempArray.length-1)
        const oldArray = tempArray.slice(0, tempArray.length-1)
        if(oldArray.length !== 1){
            oldArray[oldArray.length-1].draggable = true;
            oldArray[oldArray.length-1].revealCard = true;
        }
        setFoundation(oldArray, oldFoundation);
        addToFoundation(transferArray, newFoundation);
    }


    const pileCardStopHandler = (data, cardPosition) =>{
        let newLocation = whereIsPileCard({x:data.x, y:data.y},cardPosition.pileName, containerHeight, containerWidth);
        const tempArray = pileDictionary[cardPosition.pileName];
        for(let i = 0; i < tempArray.length; i++){
            if(i >= cardPosition.index){
                    
                tempArray[i].newPosition = {x:0, y: 0};
                tempArray[i].z = 0;
            }
        }
        
        if(newLocation === cardPosition.pileName){
            setPile(tempArray, cardPosition.pileName);
        }
        const foundation = getFoundation(newLocation)
        const pile = getPile(newLocation)
        console.log(foundation)
        console.log(pile)
        if(newLocation === cardPosition.pileName){
            setFoundation(tempArray, cardPosition.pileName);
        }
        else if(foundation !== null){
            (CheckAgnesRulesForTransferingToFoundation(tempArray[tempArray.length-1], foundation, currentLeadingValue) ? transferPileToFoundation(tempArray, cardPosition.pileName, newLocation) : setPile(tempArray, cardPosition.pileName))
        }
        else if(pile !== null){
            (CheckAgnesRulesForTransferingToPiles(tempArray[cardPosition.index], pile) ?  transferPileToPile(tempArray, cardPosition.pileName, newLocation, cardPosition.index):    setPile(tempArray, cardPosition.pileName))
        }
        else{
            console.log("Error:No Pile or foundation Found");
        }
    }


    const foundationCardStopHandler = (data, cardPosition) =>{
        const tempArray = foundationDictionary[cardPosition.pileName];

        for(let i = 0; i < tempArray.length; i++){
            if(i >= cardPosition.index){
                    
                tempArray[i].newPosition = {x:0, y: 0};
                tempArray[i].z = 0;
            }
        }
        let newLocation = WhereIsFoundationCard({x:data.x, y:data.y}, cardPosition.pileName, containerHeight, containerWidth)
        console.log(newLocation)
        const foundation = getFoundation(newLocation)
        const pile = getPile(newLocation)
        console.log(foundation)
        console.log(pile)
        if(newLocation === cardPosition.pileName){
            setFoundation(tempArray, cardPosition.pileName);
        }
        else if(foundation !== null){
            (CheckAgnesRulesForTransferingToFoundation(tempArray[tempArray.length-1], foundation, currentLeadingValue) ? transferFoundationToFoundation(tempArray, cardPosition.pileName, newLocation) : setFoundation(tempArray, cardPosition.pileName))
        }
        else if(pile !== null){
            (CheckAgnesRulesForTransferingToPiles(tempArray[tempArray.length-1], pile) ? transferFoundationToPile(tempArray, cardPosition.pileName, newLocation): setFoundation(tempArray, cardPosition.pileName))
        }
        else{
            console.log("Error:No Pile or foundation Found");
        }
    }

    const resetGame = () =>{
        setFirstFoundation([{}])
        setSecondFoundation([{}])
        setThirdFoundation([{}])
        setFourthFoundation([{}])
        setFirstPile([{}])
        setSecondPile([{}])
        setThirdPile([{}])
        setFourthPile([{}])
        setFifthPile([{}])
        setSixthPile([{}])
        setSeventhPile([{}])
        setGameStart(true)
    }

    const startGame = () =>{
        const cards = getRandomCards(29, cardsLeft, setCardsLeft);
        console.log(cards.length)
        const foundation1Cards = addCardProperties(cards.splice(0,1))

        addToFoundation(foundation1Cards, foundation1);
        setCurrentLeadingValue(foundation1Cards[0].value);
        const pile1Cards = addCardProperties(cards.splice(0,1));
        const pile2Cards = addCardProperties(cards.splice(0,2));
        const pile3Cards = addCardProperties(cards.splice(0,3));
        const pile4Cards = addCardProperties(cards.splice(0,4));
        const pile5Cards = addCardProperties(cards.splice(0,5));
        const pile6Cards = addCardProperties(cards.splice(0,6));
        const pile7Cards = addCardProperties(cards.splice(0,7));
        addToPile(pile1Cards, pile1);
        addToPile(pile2Cards, pile2);
        addToPile(pile3Cards, pile3);
        addToPile(pile4Cards, pile4);
        addToPile(pile5Cards, pile5);
        addToPile(pile6Cards, pile6);
        addToPile(pile7Cards, pile7);
    }

    const addMoreCards = () =>{
        console.log("adding more cards")
        const cards = getRandomCards(7, cardsLeft, setCardsLeft);
        console.log(cards)
        const pile1Cards = addCardProperties(cards.splice(0,1));
        const pile2Cards = addCardProperties(cards.splice(0,1));
        addToPile(pile1Cards, pile1);
        addToPile(pile2Cards, pile2);
       
        if(cards.length !== 0){
            const pile3Cards = addCardProperties(cards.splice(0,1));
            const pile4Cards = addCardProperties(cards.splice(0,1));
            const pile5Cards = addCardProperties(cards.splice(0,1));
            const pile6Cards = addCardProperties(cards.splice(0,1));
            const pile7Cards = addCardProperties(cards.splice(0,1));

            addToPile(pile3Cards, pile3);
            addToPile(pile4Cards, pile4);
            addToPile(pile5Cards, pile5);
            addToPile(pile6Cards, pile6);
            addToPile(pile7Cards, pile7);
        }
    }

    useEffect(() => {
        if(firstFoundation.length !== 14){
            return;
        }
        if(secondFoundation.length !== 14){
            return;
        }
        if(thirdFoundation.length !== 14){
            return;
        }
        if(fourthFoundation.length !== 14){
            return;
        }
        setGameEnd(true);
    }, [firstFoundation,secondFoundation,thirdFoundation,fourthFoundation])

    useEffect(() => {
        if(gameStart === true){
            setGameStart(false)
            startGame()
        }
    }, [gameStart])

    return (
        <div>
            <Grid container justifyContent="center" spacing={5}>
                <Grid item>
                    {cardsLeft.length !== 0 ?<div style={{'cursor':"pointer"}} onClick={addMoreCards}>
                    <PlayingCard  card={{suite:"diamond", value:"12", revealCard:false}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                    </div> : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                </Grid>
                <Grid item>
                    <InvisibleCard containerHeight={containerHeight} containerWidth={containerWidth}/>
                </Grid>
                <Grid item>
                    <InvisibleCard containerHeight={containerHeight} containerWidth={containerWidth}/>
                </Grid>
                <Grid item>
                    <PlayingCards  type={'foundation'} cards={firstFoundation}    currentPile={foundation1} containerHeight={containerHeight} containerWidth={containerWidth}  stopHandler={foundationCardStopHandler} /> 
                </Grid>
                <Grid item>
                    <PlayingCards type={'foundation'}  cards={secondFoundation}    currentPile={foundation2} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={foundationCardStopHandler}  /> 
                </Grid>
                <Grid item>      
                    <PlayingCards  type={'foundation'} cards={thirdFoundation} currentPile={foundation3} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={foundationCardStopHandler}  /> 
                </Grid>
                <Grid item>
                    <PlayingCards  type={'foundation'} cards={fourthFoundation} currentPile={foundation4} containerHeight={containerHeight} containerWidth={containerWidth}  stopHandler={foundationCardStopHandler}/> 
                </Grid>
            </Grid>
            <br/>
            <Grid container justifyContent={"center"} spacing={5}>
                <Grid item>
                    <PlayingCards  type={'pile'} cards={firstPile}    currentPile={pile1} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={pileCardStopHandler}  /> 
                </Grid>
                <Grid item>
                     <PlayingCards type={'pile'} cards={secondPile}  currentPile={pile2} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={pileCardStopHandler} />  
                </Grid>
                <Grid item>
                    <PlayingCards  type={'pile'} cards={thirdPile}   currentPile={pile3} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={pileCardStopHandler} />
                </Grid>
                <Grid item>
                    <PlayingCards type={'pile'} cards={fourthPile}  currentPile={pile4} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={pileCardStopHandler} />       
                </Grid>
                <Grid item>
                     <PlayingCards  type={'pile'} cards={fifthPile}   currentPile={pile5} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={pileCardStopHandler}  />
                </Grid>
                <Grid item>
                    <PlayingCards type={'pile'} cards={sixthPile}   currentPile={pile6} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={pileCardStopHandler}  />
                </Grid>
                <Grid item>
                     <PlayingCards type={'pile'} cards={seventhPile} currentPile={pile7} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={pileCardStopHandler} />
                </Grid>
            </Grid>
            <GameOverDialogue title={"The Game Is OVER!"} open={gameEnd} setOpen={setGameEnd} onConfirm={resetGame}> Would you like to Reset the Game? You can do so later.</GameOverDialogue>
        </div>
        );
};
export default Agnes;