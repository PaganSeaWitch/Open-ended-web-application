import {useWindowDimensions} from "../../Helper Functions/helper-functions.componet";
import React, { useState, useEffect} from "react";
import Grid from '@material-ui/core/Grid';
import PlayingCard from "./card.component";
import InvisibleCard from "./invisible-card.component";
import PlayingCards from "./cards.component";
import { pile1,pile2,pile3,pile4,pile5,pile6,pile7, whereIsPileCard, getPileName} from "../../Helper Functions/pile-helper-functions";
import { CheckAgnesRulesForTransferingToPiles, CheckAgnesRulesForTransferingToFoundation,CheckAgnesRulesForTransferingToPilesSingle } from "./agnes-helper-functions";
import { foundation1, foundation2, foundation3, foundation4, WhereIsFoundationCard} from '../../Helper Functions/foundation-helper-functions.js'
import GameOverDialogue from "./Game-over-dialogue.component";
import {getStandardDeckOfCards, getRandomCards, addCardProperties, removePrexistingCards, addPrexistingCards} from "../../Helper Functions/game-helper-functions"
import BlankCardSpace from "./blank-card-space.component";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import {ThemeProvider } from "@material-ui/core/styles";
import { buttonTheme } from "../../Helper Functions/styler-helper";
import _ from "lodash" // Import the entire lodash library
import { getTitleOfValue } from "../../Helper Functions/card-helper-functions.component";
const Agnes = () =>{

    const { height, width } = useWindowDimensions();

    const containerHeight = height 
    const containerWidth = width  - 300

    const [cardsLeft, setCardsLeft] = useState(getStandardDeckOfCards)
    const [thisGamesCards, setThisGamesCards] = useState([])
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
    const [manuallyResetGame,setManuallyResetGame] = useState(false);
    const [manuallyStartNewGame,setManuallyStartNewGame] = useState(false);
    const [turns, setTurns] = useState([])
    const [currentTurn, setCurrentTurn] = useState(-1)
    const [firstDraw, setFirstDraw] = useState([])
    const [secondDraw, setSecondDraw] = useState([])
    const [thirdDraw, setThirdDraw] = useState([])
    const [fourthDraw, setFourthDraw] = useState([])
    const [numOfDraws, setNumOfDraws] = useState(-1);
    const [hints, setHints] = useState([])
    const [getHint, setGetHint] = useState(false)
    const [prevHint, setPrevHint] = useState('')
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

//#region set and get pile/foundation functions
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


    const addToPile = (tempArray, pile, stopDrag) =>{
        let array;
        switch(pile){
            case(pile1):
                array = firstPile;
                if(stopDrag){
                    array = array.map( x => {return {suite:x.suite, value:x.value, revealCard:x.revealCard, draggable:false}})
                }
                setFirstPile([...array,...tempArray]);
                break;
            case(pile2):
                array = secondPile;
                if(stopDrag){
                    array = array.map( x => {return {suite:x.suite, value:x.value, revealCard:x.revealCard, draggable:false}})

                }
                setSecondPile([...array,...tempArray]);
                break;
            case(pile3):
                array = thirdPile;

                if(stopDrag){

                    array = array.map( x => {return {suite:x.suite, value:x.value, revealCard:x.revealCard, draggable:false}})

                }
                setThirdPile([...array,...tempArray]);
                break;
            case(pile4):
                array = fourthPile;

                if(stopDrag){

                    array = array.map( x => {return {suite:x.suite, value:x.value, revealCard:x.revealCard, draggable:false}})

                }
                setFourthPile([...array,...tempArray]);
                break;
            case(pile5):
                array = fifthPile;

                if(stopDrag){

                    array = array.map( x => {return {suite:x.suite, value:x.value, revealCard:x.revealCard, draggable:false}})

                }
                setFifthPile([...array,...tempArray]);
                break;
            case(pile6):
                array = sixthPile;

                if(stopDrag){

                    array = array.map( x => {return {suite:x.suite, value:x.value, revealCard:x.revealCard, draggable:false}})

                }
                setSixthPile([...array,...tempArray]);
                break;
            case(pile7):
                array = seventhPile;

                if(stopDrag){

                    array = array.map( x => {return {suite:x.suite, value:x.value, revealCard:x.revealCard, draggable:false}})

                }
                setSeventhPile([...array,...tempArray]);
                break;
            default:
                console.log(pile)
                break;
        }
        return [...array,...tempArray]

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
                setFirstFoundation([...array,...tempArray])
                break;
            case(foundation2):
                 array = secondFoundation;
                 array = array.map( x => {return {suite:x.suite, value:x.value, revealCard:true, draggable:false}})
                setSecondFoundation([...array,...tempArray])
                break;
            case(foundation3):
                array = thirdFoundation;
                array = array.map( x => {return {suite:x.suite, value:x.value, revealCard:true, draggable:false}})
                setThirdFoundation([...array,...tempArray])
                break;
            case(foundation4):
                array = fourthFoundation;
                array = array.map( x => {return {suite:x.suite, value:x.value, revealCard:true, draggable:false}})
                setFourthFoundation([...array,...tempArray])
                break;
            default:
                console.log(foundationName)
                break;
        }
        return [...array,...tempArray]

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
//#endregion

    const CheckForDragErrors = (tempArray) =>{
        let lastCard = tempArray[tempArray.length-1]
        for(let i = tempArray.length-2; i> -1; i--){
            const currentCard = tempArray[i];
            if(currentCard.revealCard === true && currentCard.draggable === false){
                if(CheckAgnesRulesForTransferingToPilesSingle(lastCard, currentCard)){
                    currentCard.draggable = true;
                    tempArray[i] = currentCard;
                }
            }
            if(currentCard.revealCard === false){
                break;
            }
            lastCard = currentCard;
        }
    }

//#region transferFunctions
    const transferPileToPile = (tempArray, oldPile, newPile, index) =>{
        const deepCopy = _.cloneDeep(tempArray)
        setCurrentTurn(currentTurn +1);
        const transferArray = tempArray.slice(index);
        const oldArray = tempArray.slice(0, index);
        
        if(oldArray.length !== 1){
            const card = oldArray[oldArray.length-1];
            card.draggable = true;
            card.revealCard = true;
            oldArray[oldArray.length-1] = card;
        }

        CheckForDragErrors(oldArray);
        const redoMove = addToPile(transferArray, newPile);
        const turnArray = turns;

        if(currentTurn +1 !== turns.length){
            turnArray.splice(currentTurn+1,turnArray.length);
        }
        setTurns([...turnArray, {undoFirst:{location:oldPile, cards:deepCopy}, undoSecond:{location:newPile, cards:getPile(newPile)}, redoFirst:{location:oldPile, cards:oldArray}, redoSecond:{location:newPile, cards:redoMove}}])
        setPile(oldArray, oldPile);

    }


    const transferPileToFoundation = (tempArray, oldPile, newFoundation) =>{
        const deepCopy = _.cloneDeep(tempArray)
        const transferArray = tempArray.slice(tempArray.length-1);
        const oldArray = tempArray.slice(0, tempArray.length-1);
        
        if(oldArray.length !== 1){
            const card = oldArray[oldArray.length-1];
            card.draggable = true;
            card.revealCard = true;
            oldArray[oldArray.length-1] = card;
        }

        const redoMove = addToFoundation(transferArray, newFoundation);
        const turnArray = turns;
        if(currentTurn +1 !== turns.length){
            turnArray.splice(currentTurn+1,turnArray.length);
        }
        setCurrentTurn(currentTurn + 1)
        
        setTurns([...turnArray, {undoFirst:{location:oldPile, cards:deepCopy}, undoSecond:{location:newFoundation, cards:getFoundation(newFoundation)}, redoFirst:{location:oldPile, cards:oldArray}, redoSecond:{location:newFoundation, cards:redoMove}}])
        setPile(oldArray, oldPile);

    }


    const transferFoundationToPile = (tempArray, oldFoundation, newPile) =>{
        const deepCopy = _.cloneDeep(tempArray)
        const transferArray = tempArray.slice(tempArray.length-1);
        const oldArray = tempArray.slice(0, tempArray.length-1);
        
        if(oldArray.length !== 1){
            const card = oldArray[oldArray.length-1];
            card.draggable = true;
            card.revealCard = true;
            oldArray[oldArray.length-1] = card;
        }
        
        const redoMove = addToPile(transferArray, newPile);
        const turnArray = turns;

        if(currentTurn +1 !== turns.length){
            turnArray.splice(currentTurn+1,turnArray.length);
        }
        setCurrentTurn(currentTurn +1);
        setTurns([...turnArray, {undoFirst:{location:oldFoundation, cards:deepCopy}, undoSecond:{location:newPile, cards:getPile(newPile)}, redoFirst:{location:oldFoundation, cards:oldArray}, redoSecond:{location:newPile, cards:redoMove}}])
        setFoundation(oldArray, oldFoundation);

    }


    const transferFoundationToFoundation = (tempArray, oldFoundation, newFoundation) =>{
        const deepCopy = _.cloneDeep(tempArray)
        setCurrentTurn(currentTurn +1);
        const transferArray = tempArray.slice(tempArray.length-1)
        const oldArray = tempArray.slice(0, tempArray.length-1)
        
        if(oldArray.length !== 1){
            const card = oldArray[oldArray.length-1];
            card.draggable = true;
            card.revealCard = true;
            oldArray[oldArray.length-1] = card;
        }
        const redoMove =addToFoundation(transferArray, newFoundation);
        const turnArray = turns;

        if(currentTurn +1 !== turns.length){
            turnArray.splice(currentTurn+1,turnArray.length);
        }
        setTurns([...turnArray, {undoFirst:{location:oldFoundation, cards:deepCopy}, undoSecond:{location:newFoundation, cards:getFoundation(newFoundation)}, redoFirst:{location:oldFoundation, cards:oldArray}, redoSecond:{location:newFoundation, cards:redoMove}}])
        setFoundation(oldArray, oldFoundation);

    }
//#endregion

//#region stopHandlers
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
        const tempArray = foundationDictionary[cardPosition.pileName]

        for(let i = 0; i < tempArray.length; i++){
            if(i >= cardPosition.index){
                    
                tempArray[i].newPosition = {x:0, y: 0};
                tempArray[i].z = 0;
            }
        }
        let newLocation = WhereIsFoundationCard({x:data.x, y:data.y}, cardPosition.pileName, containerHeight, containerWidth)
        const foundation = getFoundation(newLocation)
        const pile = getPile(newLocation)
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
//#endregion

//#region GameSetters
    const newGame = () =>{
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
        setCardsLeft(getStandardDeckOfCards());
        setThisGamesCards([])
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
        setCardsLeft(getStandardDeckOfCards());

    }


    const startGame = () =>{
        let cards;
        if(thisGamesCards.length !== 0){
            cards = thisGamesCards;
            removePrexistingCards(cards,cardsLeft, setCardsLeft)
            setThisGamesCards([...cards])
        }
        else{
            cards = getRandomCards(29, cardsLeft, setCardsLeft);
            setThisGamesCards([...cards]);
        }
        
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
//#endregion

    const addMoreCards = () =>{
        let newDraw = false;
        let cards = [];
        
        switch(numOfDraws + 1){
            case(0):
                cards = _.cloneDeep(firstDraw);
                break;
            case(1):
                cards = _.cloneDeep(secondDraw);
                break;
            case(2):
                cards = _.cloneDeep(thirdDraw);
                break;
            case(3):
                cards = _.cloneDeep(fourthDraw);
                break;
            default:
                break;
        }
        removePrexistingCards(cards, cardsLeft, setCardsLeft)

        const everyPile = [_.cloneDeep(firstPile), _.cloneDeep(secondPile), _.cloneDeep(thirdPile), _.cloneDeep(fourthPile), _.cloneDeep(fifthPile), _.cloneDeep(sixthPile), _.cloneDeep(seventhPile)]
        let cardArray = []

        if(cards.length === 0)
        {
            cards = getRandomCards(7, cardsLeft, setCardsLeft);
            cardArray = _.cloneDeep(cards)
            switch(numOfDraws +1){
                case(0):
                    setFirstDraw(cardArray);
                    break;
                case(1):
                    setSecondDraw(cardArray);
                    break;
                case(2):
                    setThirdDraw(cardArray);
                    break;
                case(3):
                    setFourthDraw(cardArray);
                    break;
                default:
                    break;
                
            }
            setCurrentTurn(currentTurn + 1)
            newDraw = true;
            
        }
        console.log(numOfDraws + 1)
        setNumOfDraws(numOfDraws + 1)

        const pile1Cards = addCardProperties(cards.splice(0,1));
        const pile2Cards = addCardProperties(cards.splice(0,1));
        const redo1 = addToPile(pile1Cards, pile1,!CheckAgnesRulesForTransferingToPiles(pile1Cards[0],firstPile));
        const redo2 = addToPile(pile2Cards, pile2,!CheckAgnesRulesForTransferingToPiles(pile2Cards[0],secondPile));
        const turnArray = turns;


        if(cards.length !== 0){
            const pile3Cards = addCardProperties(cards.splice(0,1));
            const pile4Cards = addCardProperties(cards.splice(0,1));
            const pile5Cards = addCardProperties(cards.splice(0,1));
            const pile6Cards = addCardProperties(cards.splice(0,1));
            const pile7Cards = addCardProperties(cards.splice(0,1));

            const redo3 = addToPile(pile3Cards, pile3,!CheckAgnesRulesForTransferingToPiles(pile3Cards[0],thirdPile));
            const redo4 = addToPile(pile4Cards, pile4,!CheckAgnesRulesForTransferingToPiles(pile4Cards[0],fourthPile));
            const redo5 = addToPile(pile5Cards, pile5,!CheckAgnesRulesForTransferingToPiles(pile5Cards[0],fifthPile));
            const redo6 = addToPile(pile6Cards, pile6,!CheckAgnesRulesForTransferingToPiles(pile6Cards[0],sixthPile));
            const redo7 = addToPile(pile7Cards, pile7,!CheckAgnesRulesForTransferingToPiles(pile7Cards[0],seventhPile));
            const everyRedoPile = [redo1, redo2, redo3, redo4, redo5, redo6, redo7]
            if(newDraw){
                console.log("new Draw!")
                setTurns([...turnArray, {undoFirst:{location:"deck", cards:cardArray}, undoSecond:{location:"allPiles", cards:everyPile}, redoFirst:{location:"deck", cards:cardArray}, redoSecond:{location:"allPiles", cards:everyRedoPile}}])
            }

        }
        else{
            const somePiles = [redo1, redo2]
            if(newDraw){
                console.log("new Draw!")
                setTurns([...turnArray, {undoFirst:{location:"deck", cards:cardArray}, undoSecond:{location:"allPiles", cards:everyPile}, redoFirst:{location:"deck", cards:cardArray}, redoSecond:{location:"somePiles", cards:somePiles}}])
            }
        }

    }

//#region redoUndoFunctions

    const undoMove = () =>{
        console.log(currentTurn)
        if(currentTurn === -1){
            resetGame();
            return;
        }
        if(turns[currentTurn].undoFirst.location === "deck"){
            addPrexistingCards(turns[currentTurn].undoFirst.cards,cardsLeft, setCardsLeft)
            setPile(turns[currentTurn].undoSecond.cards[0],pile1)
            setPile(turns[currentTurn].undoSecond.cards[1],pile2)
            setPile(turns[currentTurn].undoSecond.cards[2],pile3)
            setPile(turns[currentTurn].undoSecond.cards[3],pile4)
            setPile(turns[currentTurn].undoSecond.cards[4],pile5)
            setPile(turns[currentTurn].undoSecond.cards[5],pile6)
            setPile(turns[currentTurn].undoSecond.cards[6],pile7)
            setCurrentTurn(currentTurn - 1)
            setNumOfDraws(numOfDraws - 1);
            return;
        }
        setPile(turns[currentTurn].undoFirst.cards, turns[currentTurn].undoFirst.location)
        setFoundation(turns[currentTurn].undoFirst.cards, turns[currentTurn].undoFirst.location)
        setPile(turns[currentTurn].undoSecond.cards, turns[currentTurn].undoSecond.location)
        setFoundation(turns[currentTurn].undoSecond.cards, turns[currentTurn].undoSecond.location)
        setCurrentTurn(currentTurn - 1)
    }


    const redoMove = () =>{

        if(currentTurn +1 === turns.length){
            console.log("NOPE")
            return;
        }
        if(turns[currentTurn+1].redoFirst.location === "deck"){
            removePrexistingCards(turns[currentTurn+1].redoFirst.cards,cardsLeft, setCardsLeft)
            setPile(turns[currentTurn+1].redoSecond.cards[0],pile1)
            setPile(turns[currentTurn+1].redoSecond.cards[1],pile2)
            if(turns[currentTurn+1].redoSecond.location !== "somePiles"){
                setPile(turns[currentTurn+1].redoSecond.cards[2],pile3)
                setPile(turns[currentTurn+1].redoSecond.cards[3],pile4)
                setPile(turns[currentTurn+1].redoSecond.cards[4],pile5)
                setPile(turns[currentTurn+1].redoSecond.cards[5],pile6)
                setPile(turns[currentTurn+1].redoSecond.cards[6],pile7)
            }
            setNumOfDraws(numOfDraws + 1);
            setCurrentTurn(currentTurn + 1)
            return;
        }
        setPile(turns[currentTurn+1].redoFirst.cards, turns[currentTurn+1].redoFirst.location)
        setFoundation(turns[currentTurn+1].redoFirst.cards, turns[currentTurn+1].redoFirst.location)
        setPile(turns[currentTurn+1].redoSecond.cards, turns[currentTurn+1].redoSecond.location)
        setFoundation(turns[currentTurn+1].redoSecond.cards, turns[currentTurn+1].redoSecond.location)
        setCurrentTurn(currentTurn + 1)

    }
//#endregion

//#region hintFunctions

    const checkPiles = (movingPile, stayingPile) =>{
        const newHints = []
        if(movingPile === stayingPile){
            return newHints
        }
        for(let i = movingPile.length -1; i > -1; i--){
            if(movingPile[i].draggable !== true){
                return newHints
            }
            if(CheckAgnesRulesForTransferingToPiles(movingPile[i], stayingPile)){
                newHints.push("move the "+ getTitleOfValue(movingPile[i].value) + " of " + movingPile[i].suite + "s to the " + getTitleOfValue(stayingPile[stayingPile.length-1].value) + " of " + stayingPile[stayingPile.length-1].suite + "s.");
            }
        }

        return newHints;
    }

    const checkFoundations = (movingPile, foundation) =>{
        const newHints = []
        if(movingPile === foundation){
            return newHints
        }
        
        if(movingPile[movingPile.length-1].draggable !== true){
            return newHints
        }
        if(CheckAgnesRulesForTransferingToFoundation(movingPile[movingPile.length-1], foundation,currentLeadingValue)){
            if(foundation.length === 1){
                newHints.push("move the "+ getTitleOfValue(movingPile[movingPile.length-1].value) + " of " + movingPile[movingPile.length-1].suite + "s to an empty foundation slot.")
            }
            else{
                newHints.push("move the "+ getTitleOfValue(movingPile[movingPile.length-1].value) + " of " + movingPile[movingPile.length-1].suite + "s to the " + getTitleOfValue(foundation[foundation.length-1].value) + " of " + foundation[foundation.length-1].suite + "s.");
            }
        }
        return newHints;
    }

    const getPossibleMoves= (pile) =>{
        const hintsForPile = [];
        hintsForPile.push(...checkPiles(pile, firstPile))
        hintsForPile.push(...checkPiles(pile, secondPile))
        hintsForPile.push(...checkPiles(pile, thirdPile))
        hintsForPile.push(...checkPiles(pile, fourthPile))
        hintsForPile.push(...checkPiles(pile, fifthPile))
        hintsForPile.push(...checkPiles(pile, sixthPile))
        hintsForPile.push(...checkPiles(pile, seventhPile))
        hintsForPile.push(...checkFoundations(pile, firstFoundation))
        hintsForPile.push(...checkFoundations(pile, secondFoundation))
        hintsForPile.push(...checkFoundations(pile, thirdFoundation))
        hintsForPile.push(...checkFoundations(pile, fourthFoundation))
        return hintsForPile;
    }


    const addHints = () =>{
        for(let i = 1; i < 8; i++){
            hints.splice(i-1, 1);
            hints.unshift(getPossibleMoves(getPile(getPileName(i))))

        }
        setHints([...hints]);
    }
    const getHintForDialogue = () =>{
        for(let i = 0; i < hints.length;i++){
            let hintSection = hints[i];
            if(typeof(hintSection) !== 'undefined' && hintSection.length !== 0){
                return hintSection[0];   
            }
            
        }
        if(cardsLeft.length !== 0){
            return "draw cards"
        }
        return "No hints avalible, try moving cards around or restart/start new game"
    }


    const hint = getHintForDialogue();
//#endregion

//#region useEffects

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


    useEffect(() => {
        if(typeof(currentLeadingValue) !== 'undefined'){
            addHints();
        }
    }, [firstPile,secondPile,thirdPile,fourthPile,fifthPile,sixthPile,seventhPile])
    
//#endregion


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
          marginLeft:"auto",
          marginRight:"auto",
          marginBottom:"auto",
        },
        pos: {
          marginBottom: 12,
        },
    });
    const classes = useStyles();


    const handleButtonClick =(type) =>{
        switch(type){
            case("New Game"):
                setManuallyStartNewGame(true);
                break;
            case("Reset Game"):
                setManuallyResetGame(true);
                break;
            case("Undo Move"):
                undoMove();
                break;
            case("Redo Move"):
                redoMove();
                break;
            case("Hint"):
                setGetHint(true);
                break;
            default:
                console.log("type")
                break;
        }
    }
    
    
    return (
        <div className={classes.outer}>
                <header className={classes.title}>AISLERIOT AGNES SOLITARE</header>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item>
                        <ThemeProvider theme ={buttonTheme}>
                            <Button onClick={() =>handleButtonClick("New Game")}>New Game</Button>
                        </ThemeProvider>
                    </Grid>
                    <Grid item>
                        <ThemeProvider theme ={buttonTheme}>
                            <Button onClick={() =>handleButtonClick("Reset Game")}>Reset Game</Button>
                        </ThemeProvider>

                    </Grid>
                    <Grid item>
                        <ThemeProvider theme ={buttonTheme}>
                            <Button onClick={() =>handleButtonClick("Undo Move")} >Undo Move</Button>
                        </ThemeProvider>

                    </Grid>
                    <Grid item>
                        <ThemeProvider theme ={buttonTheme}>
                            <Button onClick={() =>handleButtonClick("Redo Move")}>Redo Move</Button>
                        </ThemeProvider>
                    </Grid>
                    <Grid item>
                        <ThemeProvider theme ={buttonTheme}>
                            <Button onClick={() =>handleButtonClick("Hint")} >Hint</Button>
                        </ThemeProvider>
                    </Grid>
                </Grid>
            <div className={classes.root}>
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
                <GameOverDialogue title={"The Game Is OVER!"} open={gameEnd} setOpen={setGameEnd} onConfirm={resetGame}> The Game is Over! Would you like to Reset the Game? You can do so later.</GameOverDialogue>
                <GameOverDialogue title={"Reset Game?"} open={manuallyResetGame} setOpen={setManuallyResetGame} onConfirm={resetGame}> Would you like to Reset the Game?</GameOverDialogue>
                <GameOverDialogue title={"start new Game?"} open={manuallyStartNewGame} setOpen={setManuallyStartNewGame} onConfirm={newGame}> Would you like to start a new Game?</GameOverDialogue>
                <GameOverDialogue title={"Hint"} open={getHint} setOpen={setGetHint} onConfirm={() => {}}>{hint}</GameOverDialogue>

            </div>
        </div>
        );
};
export default Agnes;