import PlayingCard from "./card.component";
import {useWindowDimensions} from "./helper-functions.componet"
import { useState } from "react";
import Draggable from 'react-draggable';
import { makeStyles } from '@material-ui/core/styles';
const DraggableCard = ({suite, value, revealCard, containerWidth, containerHeight, startPos, stopHandler, currentPos}) =>{

    const [zIndex, setZIndex] = useState(0)

    const useStyles = makeStyles({
        box: {
            position: "absolute",
            cursor: "move",
            margin: "auto",
            "user-select" : "none",
            zIndex :zIndex,
        },
    });

    const updateZValue = () =>{
        if(zIndex > 0){
            setZIndex(0);
        }
        else{
            setZIndex(10);
        }
    }
    const classes = useStyles();
    return (
        <Draggable defaultPosition={{x: startPos.x, y: startPos.y}}  position={{x:currentPos.x, y:currentPos.y}}onStop={(e,position) =>{stopHandler(position); updateZValue();}} onStart={() =>updateZValue()}>
            <div className={classes.box}>
                <PlayingCard suite={suite} value={value} revealCard={revealCard} containerHeight={containerHeight} containerWidth={containerWidth}/>
            </div>    
        </Draggable>
        );
};

export default DraggableCard;