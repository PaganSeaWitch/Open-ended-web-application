import DraggableCard from "./draggable-card.component";
import {useWindowDimensions} from "./helper-functions.componet";
import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import PlayingCard from "./card.component";
import BlankCardSpace from "./blank-card-space.component";
import InvisibleCard from "./invisible-card.component";
import PlayingCards from "./cards.component";
const Agnes = () =>{

    const pile1 = "first";
    const pile2 = "second";
    const pile3 = "third";
    const pile4 = "fourth";
    const pile5 = "fifth";
    const pile6 = "sixth";
    const pile7 = "seventh";
    const { height, width } = useWindowDimensions();
    const containerHeight = height 
    const containerWidth = width  - 300
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const cardInSecondFoundation = false;
    const cardInThirdFoundation = true;
    const cardInFourthFoundation = true;
    const cardInFirstFoundation = false;

    const thirdFoundation = [""];
    const secondFoundation = [""];
    const fourthFoundation = ["",""];
    const firstFoundation = [""];

    const currentLeadingValue ="11";

    const firstPile = [{},{suite:"diamond", value:"5", revealCard:true, draggable:true}];

    const secondPile = [{},{suite:"spade", value:"2", revealCard:false},{suite:"club", value:"2", revealCard:true, draggable:true}];

    const thirdPile = [{},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:true, draggable:true}];

    const fourthPile = [{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:true, draggable:true}];

    const fifthPile = [{},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:true, currentPos:{x:0, y:0}, draggable:true}];

    const sixthPile = [{},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", currentPos:{x:0, y:0},revealCard:true, draggable:true}];

    const [seventhPile, setSeventhPile] = useState([{},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:true,currentPos:{x:0, y:0},draggable:true},{suite:"club", value:"5", revealCard:true,currentPos:{x:0, y:0},draggable:true},{suite:"club", value:"6", revealCard:true,currentPos:{x:0, y:0},draggable:true},{suite:"club", value:"7", revealCard:true, currentPos:{x:0, y:0},draggable:true}]);



    const pileDictionary = {
        [pile1] : firstPile,
        [pile2] : secondPile,
        [pile3] : thirdPile,
        [pile4] : fourthPile,
        [pile5] : fifthPile,
        [pile6] : sixthPile,
        [pile7] : seventhPile,
    }

    
    const pileCardStopHandler = (data, cardPosition) =>{
        moveCardPile(pileDictionary[cardPosition.pileName], cardPosition.index, {x:data.x, y: data.y})
        
    }

    const moveCardPile = (cardPile, initalIndex, currentPos) =>{
        const tempArray = cardPile;
        console.log(currentPos);
        for(let i = 0; i < tempArray.length; i++){
            if(i >= initalIndex){
                currentPos = {x: currentPos.x, y: currentPos.y + 52}
                tempArray[i].currentPos = currentPos;

            }
        }
        setSeventhPile([...tempArray]);
    }
    const pileCardDragHandler = (data, cardPosition) =>{
        moveCardPile(pileDictionary[cardPosition.pileName], cardPosition.index, {x:data.x, y: data.y})
    }

    return (
        <div>

                    
            <Grid container justifyContent="center" spacing={5}>
                <Grid item>
                    <PlayingCard card={{suite:"diamond", value:"12", revealCard:true}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                </Grid>
                <Grid item>
                    <DraggableCard card={{suite:"diamond", value:"12", revealCard:true}} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position} stopHandler={pileCardStopHandler}/>
                    <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>
                </Grid>
                <Grid item>
                    <InvisibleCard containerHeight={containerHeight} containerWidth={containerWidth}/>
                </Grid>
                <Grid item>
                    {cardInFirstFoundation ?<DraggableCard card={{suite:"diamond", value:"12", revealCard:true}} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position} stopHandler={pileCardStopHandler}  />
                        : <></>}
                    {firstFoundation.length > 1 ?<PlayingCard card={{suite:"diamond", value:"12", revealCard:true}} containerHeight={containerHeight} containerWidth={containerWidth} />
                        : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                </Grid>
                <Grid item>
                    {cardInSecondFoundation ?<DraggableCard card={{suite:"diamond", value:"12", revealCard:true}} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position} stopHandler={pileCardStopHandler}  />
                        : <></>}
                    {secondFoundation.length > 1 ?<PlayingCard card={{suite:"diamond", value:"12", revealCard:true}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                        : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                </Grid>
                <Grid item>
                    
                    {cardInThirdFoundation ?<DraggableCard card={{suite:"diamond", value:"12", revealCard:true}} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position} stopHandler={pileCardStopHandler}  />
                        : <></>}
                    {thirdFoundation.length > 1 ?<PlayingCard card={{suite:"diamond", value:"12", revealCard:true}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                        : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                    
                </Grid>
                <Grid item>
                    {cardInFourthFoundation ?<DraggableCard card={{suite:"diamond", value:"12", revealCard:true}} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position} stopHandler={pileCardStopHandler}  />
                        : <></>}
                    {fourthFoundation.length > 1 ?<PlayingCard card={{suite:"diamond", value:"12", revealCard:true}} containerHeight={containerHeight} containerWidth={containerWidth} />
                        : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                </Grid>
            </Grid>

            <br/>
            <Grid container justifyContent={"center"} spacing={5}>
                <Grid item>

                    {firstPile.length > 0 ?<PlayingCards   cards={firstPile}    currentPile={pile1} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={pileCardStopHandler} dragHandler={pileCardDragHandler} />
                            : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                    
                </Grid>
                <Grid item>

                    {secondPile.length > 0 ? <PlayingCards  cards={secondPile}  currentPile={pile2} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={pileCardStopHandler}dragHandler={pileCardDragHandler}  />
                            : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                        
                </Grid>
                <Grid item>
                    {thirdPile.length > 0 ?< PlayingCards   cards={thirdPile}   currentPile={pile3} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={pileCardStopHandler}dragHandler={pileCardDragHandler}  />
                            : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                    
                    
                </Grid>
                <Grid item>
                    {fourthPile.length > 0 ? <PlayingCards  cards={fourthPile}  currentPile={pile4} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={pileCardStopHandler}dragHandler={pileCardDragHandler}  />
                            : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                    
                </Grid>
                <Grid item>
                    {fifthPile.length > 0 ? <PlayingCards   cards={fifthPile}   currentPile={pile5} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={pileCardStopHandler} dragHandler={pileCardDragHandler} />
                            : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                   
                </Grid>
                <Grid item>
                    {sixthPile.length > 0 ?   <PlayingCards cards={sixthPile}   currentPile={pile6} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={pileCardStopHandler} dragHandler={pileCardDragHandler} />
                            : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                    
                </Grid>
                <Grid item>
                    {seventhPile.length > 0 ? <PlayingCards cards={seventhPile} currentPile={pile7} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={pileCardStopHandler} dragHandler={pileCardDragHandler} />
                            : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                   
                </Grid>
            </Grid>
        </div>
        );
};

export default Agnes;