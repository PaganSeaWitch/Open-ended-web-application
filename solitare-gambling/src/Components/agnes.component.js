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
                    <DraggableCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position}startPos={{x:0, y:0}} stopHandler={topCardStopHandler} />
                    <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>
                </Grid>
                <Grid item>
                    <InvisibleCard containerHeight={containerHeight} containerWidth={containerWidth}/>
                </Grid>
                <Grid item>
                    {cardInFirstFoundation ?<DraggableCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position}startPos={{x:0, y:0}} stopHandler={topCardStopHandler} />
                        : <></>}
                    {firstFoundation.length > 1 ?<PlayingCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} />
                        : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                </Grid>
                <Grid item>
                    {cardInSecondFoundation ?<DraggableCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position}startPos={{x:0, y:0}} stopHandler={topCardStopHandler} />
                        : <></>}
                    {secondFoundation.length > 1 ?<PlayingCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth}/>
                        : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                </Grid>
                <Grid item>
                    
                    {cardInThirdFoundation ?<DraggableCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position}startPos={{x:0, y:0}} stopHandler={topCardStopHandler} />
                        : <></>}
                    {thirdFoundation.length > 1 ?<PlayingCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth}/>
                        : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                    
                </Grid>
                <Grid item>
                    {cardInFourthFoundation ?<DraggableCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position}startPos={{x:0, y:0}} stopHandler={topCardStopHandler} />
                        : <></>}
                    {fourthFoundation.length > 1 ?<PlayingCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} />
                        : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                </Grid>
            </Grid>

            <br/>
            <Grid container justifyContent={"center"} spacing={5}>
                <Grid item>
                    {cardInFourthFoundation ?<DraggableCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position}startPos={{x:0, y:0}} stopHandler={topCardStopHandler} />
                            : <></>}
                    {fourthFoundation.length > 1 ?<PlayingCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} />
                            : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                </Grid>
                <Grid item>
                    {cardInFourthFoundation ?<DraggableCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position}startPos={{x:0, y:0}} stopHandler={topCardStopHandler} />
                                : <></>}
                        {fourthFoundation.length > 1 ?<PlayingCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} />
                                : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                </Grid>
                <Grid item>
                    {cardInFourthFoundation ?<DraggableCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position}startPos={{x:0, y:0}} stopHandler={topCardStopHandler} />
                                : <></>}
                        {fourthFoundation.length > 1 ?<PlayingCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} />
                                : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                </Grid>
                <Grid item>
                    {cardInFourthFoundation ?<DraggableCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position}startPos={{x:0, y:0}} stopHandler={topCardStopHandler} />
                                : <></>}
                        {fourthFoundation.length > 1 ?<PlayingCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} />
                                : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                </Grid>
                <Grid item>
                    {cardInFourthFoundation ?<DraggableCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position}startPos={{x:0, y:0}} stopHandler={topCardStopHandler} />
                                : <></>}
                        {fourthFoundation.length > 1 ?<PlayingCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} />
                                : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                </Grid>
                <Grid item>
                    {cardInFourthFoundation ?<DraggableCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position}startPos={{x:0, y:0}} stopHandler={topCardStopHandler} />
                                : <></>}
                        {fourthFoundation.length > 1 ?<PlayingCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} />
                                : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                </Grid>
                <Grid item>
                        
                        {fourthFoundation.length > 1 ?<PlayingCards cards={[{suite:"club",value:"10",revealCard:true},{suite:"club",value:"8",revealCard:true}]} containerHeight={containerHeight} containerWidth={containerWidth} />
                                : <BlankCardSpace containerHeight={containerHeight} containerWidth={containerWidth}/>}
                        {cardInFourthFoundation ?<DraggableCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={{x:0, y:-280}}startPos={{x:0, y:-50}} stopHandler={topCardStopHandler} />
                                : <></>}
                </Grid>
            </Grid>
        </div>
        );
};

export default Agnes;