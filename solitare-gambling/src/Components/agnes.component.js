import DraggableCard from "./draggable-card.component";
import {useWindowDimensions} from "./helper-functions.componet"
import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import PlayingCard from "./card.component";
const Agnes = () =>{

    const { height, width } = useWindowDimensions();
    const containerHeight = height 
    const containerWidth = width  - 300
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
     };
    
    const topCardStopHandler = (position) =>{
        console.log(position)
        setPosition({x:0,y:0})
    }

    return (
        <Grid container justifyContent="space-evenly">
            <Grid item>
                <Grid container justifyContent="center" spacing={5}>
                    <Grid item>
                        <PlayingCard suite={"diamond"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth}/>
                    </Grid>
                    <Grid item>
                        <DraggableCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={position}startPos={{x:0, y:0}} stopHandler={topCardStopHandler} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container justifyContent="center" spacing={5}>
                    <Grid item>
                        <PlayingCard suite={"diamond"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth}/>
                    </Grid>
                    <Grid item>
                        <PlayingCard suite={"club"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth}/>
                    </Grid>
                    <Grid item>
                        <PlayingCard suite={"spade"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth}/>
                    </Grid>
                    <Grid item>
                        <PlayingCard suite={"heart"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth}/>
                    </Grid>
                </Grid>
            </Grid>
            
        </Grid>
        );
};

export default Agnes;