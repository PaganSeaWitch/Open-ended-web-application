import DraggableCard from "./draggable-card.component";
import {useWindowDimensions} from "./helper-functions.componet";
import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import PlayingCard from "./card.component";
import BlankCardSpace from "./blank-card-space.component";
import InvisibleCard from "./invisible-card.component";
import PlayingCards from "./cards.component";
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

    const firstPile = [{},{suite:"diamond", value:"5", revealCard:true, draggable:true}];
    const firstPileDraggable = [{suite:"diamond", value:"5", revealCard:true}];

    const secondPile = [{},{suite:"spade", value:"2", revealCard:false},{suite:"club", value:"2", revealCard:true, draggable:true}];

    const thirdPile = [{},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:true, draggable:true}];
    const thirdPileDraggable = [{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:true}];

    const fourthPile = [{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:true, draggable:true}];

    const fifthPile = [{},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:true, draggable:true}];

    const sixthPile = [{},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:true, draggable:true}];

    const seventhPile = [{},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:false},{suite:"club", value:"7", revealCard:true, draggable:true}];


    const topCardStopHandler = (position) =>{
        console.log(position)
        setPosition({x:0,y:0})
    }

    return (
        <div>

                    
            <Grid container justifyContent="center" spacing={5}>
                <Grid item>
                    <PlayingCard suite={"diamond"} value={currentLeadingValue} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth}/>
                </Grid>
                <Grid item>
                    <DraggableCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position} stopHandler={topCardStopHandler} />
                    <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>
                </Grid>
                <Grid item>
                    <InvisibleCard containerHeight={containerHeight} containerWidth={containerWidth}/>
                </Grid>
                <Grid item>
                    {cardInFirstFoundation ?<DraggableCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position} stopHandler={topCardStopHandler} />
                        : <></>}
                    {firstFoundation.length > 1 ?<PlayingCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} />
                        : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                </Grid>
                <Grid item>
                    {cardInSecondFoundation ?<DraggableCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position} stopHandler={topCardStopHandler} />
                        : <></>}
                    {secondFoundation.length > 1 ?<PlayingCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth}/>
                        : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                </Grid>
                <Grid item>
                    
                    {cardInThirdFoundation ?<DraggableCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position} stopHandler={topCardStopHandler} />
                        : <></>}
                    {thirdFoundation.length > 1 ?<PlayingCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth}/>
                        : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                    
                </Grid>
                <Grid item>
                    {cardInFourthFoundation ?<DraggableCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position} stopHandler={topCardStopHandler} />
                        : <></>}
                    {fourthFoundation.length > 1 ?<PlayingCard suite={"club"} value={"9"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} />
                        : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                </Grid>
            </Grid>

            <br/>
            <Grid container justifyContent={"center"} spacing={5}>
                <Grid item>

                    {firstPile.length > 0 ?<PlayingCards cards={firstPile} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={topCardStopHandler} />
                            : <></>}
                    
                </Grid>
                <Grid item>

                {secondPile.length > 0 ?<PlayingCards cards={secondPile} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={topCardStopHandler} />
                            : <></>}
                        
                </Grid>
                <Grid item>
                    {thirdPile.length > 0 ?<PlayingCards cards={thirdPile} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={topCardStopHandler} />
                            : <></>}
                    
                    
                </Grid>
                <Grid item>
                {fourthPile.length > 0 ?<PlayingCards cards={fourthPile} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={topCardStopHandler} />
                            : <></>}
                    
                </Grid>
                <Grid item>
                {fifthPile.length > 0 ?<PlayingCards cards={fifthPile} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={topCardStopHandler} />
                            : <></>}
                   
                </Grid>
                <Grid item>
                {sixthPile.length > 0 ?<PlayingCards cards={sixthPile} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={topCardStopHandler} />
                            : <></>}
                    
                </Grid>
                <Grid item>
                {seventhPile.length > 0 ?<PlayingCards cards={seventhPile} containerHeight={containerHeight} containerWidth={containerWidth} stopHandler={topCardStopHandler} />
                            : <></>}
                   
                </Grid>
            </Grid>
        </div>
        );
};

export default Agnes;