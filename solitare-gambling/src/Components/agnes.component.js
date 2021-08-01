import DraggableCard from "./draggable-card.component";
import {useWindowDimensions} from "./helper-functions.componet";
import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import PlayingCard from "./card.component";
import BlankCardSpace from "./blank-card-space.component";
import InvisibleCard from "./invisible-card.component";
import PlayingCards from "./cards.component";
import { pile1,pile2,pile3,pile4,pile5,pile6,pile7, whereIsPileCardInRelationToPiles } from "./pile-helper-functions";
import { CheckAgnesRulesForTransferingToPiles, CheckAgnesRulesForTransferingToFoundation } from "./agnes-helper-functions";
import { suite1, suite2, suite3, suite4 } from './card-helper-functions.component';
import { foundation1, foundation2, foundation3, foundation4, WhereIsFoundationCardInRelationToPiles} from './foundation-helper-functions.js'
const Agnes = () =>{

    const { height, width } = useWindowDimensions();

    const containerHeight = height 
    const containerWidth = width  - 300


    const [firstFoundation, setFirstFoundation] = useState([{}]);
    const [secondFoundation, setSecondFoundation] = useState([{},{suite:suite1, value:"5", revealCard:true, draggable:true}])
    const [thirdFoundation, setThirdFoundation] = useState([{},{suite:suite1, value:"4", revealCard:true, draggable:true}]);
    const [fourthFoundation, setFourthFoundation] = useState([{},{suite:suite1, value:"2", revealCard:true},{suite:suite1, value:"3", revealCard:true, draggable:true}]);

    const currentLeadingValue ="5";

    const [firstPile, setFirstPile] = useState([{},{suite:suite1, value:"6", revealCard:true, draggable:true}]);
    const [secondPile, setSecondPile] = useState([{},{suite:suite1, value:"2", revealCard:true,draggable: true},{suite:suite2, value:"2", revealCard:true, draggable:true}]);
    const [thirdPile, setThirdPile] = useState([{},{suite:suite1, value:"7", revealCard:false},{suite:suite2, value:"7", revealCard:false},{suite:suite2, value:"7", revealCard:true, draggable:true}]);
    const [fourthPile, setFourthPile] = useState([{suite:suite1, value:"7", revealCard:false},{suite:suite2, value:"7", revealCard:false},{suite:suite2, value:"7", revealCard:false},{suite:suite2, value:"7", revealCard:true, draggable:true}]);
    const [fifthPile, setFifthPile] = useState([{},{suite:suite1, value:"7", revealCard:false},{suite:suite2, value:"7", revealCard:false},{suite:suite2, value:"7", revealCard:false},{suite:suite2, value:"7", revealCard:false},{suite:suite2, value:"7", revealCard:true, newPosition:{x:0, y:0}, draggable:true}]);
    const [sixthPile, setSixthPile] = useState([{},{suite:suite1, value:"7", revealCard:false},{suite:suite2, value:"7", revealCard:false},{suite:suite2, value:"7", revealCard:false},{suite:suite2, value:"7", revealCard:false},{suite:suite2, value:"7", revealCard:false},{suite:suite2, value:"8", newPosition:{x:0, y:0},revealCard:true, draggable:true}]);
    const [seventhPile, setSeventhPile] = useState([{},{suite:suite1, value:"10", revealCard:true, draggable:true},{suite:suite2, value:"9", revealCard:true, draggable:true},{suite:suite2, value:"8", revealCard:true, draggable:true},{suite:suite2, value:"6", revealCard:true, draggable:true,newPosition:{x:0, y:0},draggable:true},{suite:suite2, value:"5", revealCard:true,newPosition:{x:0, y:0},draggable:true},{suite:suite2, value:"4", revealCard:true,newPosition:{x:0, y:0},draggable:true},{suite:suite2, value:"3", revealCard:true, newPosition:{x:0, y:0},draggable:true}]);


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
        switch(foundationName){
            case(foundation1):
                setFirstFoundation([...firstFoundation,...tempArray])
                break;
            case(foundation2):
                setSecondFoundation([...secondFoundation,...tempArray])
                break;
            case(foundation3):
                setThirdFoundation([...thirdFoundation,...tempArray])
                break;
            case(foundation4):
                setFourthFoundation([...fourthFoundation,...tempArray])
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
        let newPile = whereIsPileCardInRelationToPiles(cardPosition.pileName, data.x, containerWidth);
        const tempArray = pileDictionary[cardPosition.pileName];
        for(let i = 0; i < tempArray.length; i++){
            if(i >= cardPosition.index){
                    
                tempArray[i].newPosition = {x:0, y: 0};
                tempArray[i].z = 0;
            }
        }
        
        if(newPile === cardPosition.pileName){
            setPile(tempArray, cardPosition.pileName);
        }
        (CheckAgnesRulesForTransferingToPiles(tempArray[cardPosition.index], getPile(newPile)) ?  transferPileToPile(tempArray, cardPosition.pileName, newPile, cardPosition.index):    setPile(tempArray, cardPosition.pileName))

    }


    const foundationCardStopHandler = (data, cardPosition) =>{
        const tempArray = foundationDictionary[cardPosition.pileName];

        for(let i = 0; i < tempArray.length; i++){
            if(i >= cardPosition.index){
                    
                tempArray[i].newPosition = {x:0, y: 0};
                tempArray[i].z = 0;
            }
        }
        let newLocation = WhereIsFoundationCardInRelationToPiles({x:data.x, y:data.y}, cardPosition.pileName, containerHeight, containerWidth)
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

    return (
        <div>
            <Grid container justifyContent="center" spacing={5}>
                <Grid item>
                    <PlayingCard card={{suite:"diamond", value:"12", revealCard:false}} containerHeight={containerHeight} containerWidth={containerWidth}/>
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
        </div>
        );
};
export default Agnes;