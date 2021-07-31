import DraggableCard from "./draggable-card.component";
import {useWindowDimensions} from "./helper-functions.componet";
import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import PlayingCard from "./card.component";
import BlankCardSpace from "./blank-card-space.component";
import InvisibleCard from "./invisible-card.component";
import PlayingCards from "./cards.component";
import { getAdjustment, getCardWidth } from "./card-helper-functions.component";
import { pile1,pile2,pile3,pile4,pile5,pile6,pile7, whereIsCard } from "./pile-helper-functions";
const Agnes = () =>{

    
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

    const [firstPile, setFirstPile] = useState([{},{suite:"diamond", value:"5", revealCard:true, draggable:true}]);

    const [secondPile, setSecondPile] = useState([{},{suite:"spade", value:"2", revealCard:false},{suite:"club", value:"2", revealCard:true, draggable:true}]);

    const [thirdPile, setThirdPile] = useState([{},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:true, draggable:true}]);

    const [fourthPile, setFourthPile] = useState([{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:true, draggable:true}]);

    const [fifthPile, setFifthPile] = useState([{},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:true, newPosition:{x:0, y:0}, draggable:true}]);

    const [sixthPile, setSixthPile] = useState([{},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", newPosition:{x:0, y:0},revealCard:true, draggable:true}]);

    const [seventhPile, setSeventhPile] = useState([{},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:true,newPosition:{x:0, y:0},draggable:true},{suite:"club", value:"5", revealCard:true,newPosition:{x:0, y:0},draggable:true},{suite:"club", value:"6", revealCard:true,newPosition:{x:0, y:0},draggable:true},{suite:"club", value:"7", revealCard:true, newPosition:{x:0, y:0},draggable:true}]);


    const pileDictionary = {
        [pile1] : firstPile,
        [pile2] : secondPile,
        [pile3] : thirdPile,
        [pile4] : fourthPile,
        [pile5] : fifthPile,
        [pile6] : sixthPile,
        [pile7] : seventhPile,
    }

    const checkRelativePosition = (posX, pile) =>{
        console.log("x position: " +posX);
        //console.log("containerWidth: " +getCardWidth(containerWidth))
        //console.log("adjustment: " +getAdjustment(getCardWidth(containerWidth)))
        return whereIsCard(pile, posX, containerWidth);
        
    }
    
    const pileCardStopHandler = (data, cardPosition) =>{
        console.log(cardPosition.pileName);
        console.log(checkRelativePosition(data.x, cardPosition.pileName))
        const tempArray = pileDictionary[cardPosition.pileName];
        let truIndex = 0;
        for(let i = 0; i < tempArray.length; i++){
            if(i >= cardPosition.index){
                
                tempArray[i].newPosition = {x:data.x, y: data.y + (52 * truIndex)};
                truIndex = truIndex + 1;
            }
        }
        switch(cardPosition.pileName){
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
                console.log(cardPosition.pileName)
                break;
        }
        

    }


    const pileCardStartHandler = (data, cardPosition) =>{
        
    }

    

    return (
        <div>

                    
            <Grid container justifyContent="center" spacing={5}>
                <Grid item>
                    <PlayingCard card={{suite:"diamond", value:"12", revealCard:true}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                </Grid>
                <Grid item>
                    <DraggableCard card={{suite:"diamond", value:"12", revealCard:true}} containerHeight={containerHeight} containerWidth={containerWidth} newPosition={position}/>
                    <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>
                </Grid>
                <Grid item>
                    <InvisibleCard containerHeight={containerHeight} containerWidth={containerWidth}/>
                </Grid>
                <Grid item>
                    {cardInFirstFoundation ?<DraggableCard card={{suite:"diamond", value:"12", revealCard:true}} containerHeight={containerHeight} containerWidth={containerWidth} newPosition={position} stopHandler={pileCardStopHandler}  />
                        : <></>}
                    {firstFoundation.length > 1 ?<PlayingCard card={{suite:"diamond", value:"12", revealCard:true}} containerHeight={containerHeight} containerWidth={containerWidth} />
                        : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                </Grid>
                <Grid item>
                    {cardInSecondFoundation ?<DraggableCard card={{suite:"diamond", value:"12", revealCard:true}} containerHeight={containerHeight} containerWidth={containerWidth} newPosition={position} stopHandler={pileCardStopHandler}  />
                        : <></>}
                    {secondFoundation.length > 1 ?<PlayingCard card={{suite:"diamond", value:"12", revealCard:true}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                        : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                </Grid>
                <Grid item>
                    
                    {cardInThirdFoundation ?<DraggableCard card={{suite:"diamond", value:"12", revealCard:true}} containerHeight={containerHeight} containerWidth={containerWidth} newPosition={position} stopHandler={pileCardStopHandler}  />
                        : <></>}
                    {thirdFoundation.length > 1 ?<PlayingCard card={{suite:"diamond", value:"12", revealCard:true}} containerHeight={containerHeight} containerWidth={containerWidth}/>
                        : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                    
                </Grid>
                <Grid item>
                    {cardInFourthFoundation ?<DraggableCard card={{suite:"diamond", value:"12", revealCard:true}} containerHeight={containerHeight} containerWidth={containerWidth} newPosition={position} stopHandler={pileCardStopHandler}  />
                        : <></>}
                    {fourthFoundation.length > 1 ?<PlayingCard card={{suite:"diamond", value:"12", revealCard:true}} containerHeight={containerHeight} containerWidth={containerWidth} />
                        : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                </Grid>
            </Grid>

            <br/>
            <Grid container justifyContent={"center"} spacing={5}>
                <Grid item>

                    {firstPile.length > 0 ?<PlayingCards   cards={firstPile}    currentPile={pile1} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={pileCardStopHandler}  />
                            : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                    
                </Grid>
                <Grid item>

                    {secondPile.length > 0 ? <PlayingCards  cards={secondPile}  currentPile={pile2} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={pileCardStopHandler} />
                            : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                        
                </Grid>
                <Grid item>
                    {thirdPile.length > 0 ?< PlayingCards   cards={thirdPile}   currentPile={pile3} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={pileCardStopHandler} />
                            : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                    
                    
                </Grid>
                <Grid item>
                    {fourthPile.length > 0 ? <PlayingCards  cards={fourthPile}  currentPile={pile4} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={pileCardStopHandler} />
                            : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                    
                </Grid>
                <Grid item>
                    {fifthPile.length > 0 ? <PlayingCards   cards={fifthPile}   currentPile={pile5} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={pileCardStopHandler}  />
                            : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                   
                </Grid>
                <Grid item>
                    {sixthPile.length > 0 ?   <PlayingCards cards={sixthPile}   currentPile={pile6} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={pileCardStopHandler}  />
                            : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                    
                </Grid>
                <Grid item>
                    {seventhPile.length > 0 ? <PlayingCards cards={seventhPile} currentPile={pile7} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={pileCardStopHandler} startHandler={pileCardStartHandler}  />
                            : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                   
                </Grid>
            </Grid>
        </div>
        );
};
export default Agnes;