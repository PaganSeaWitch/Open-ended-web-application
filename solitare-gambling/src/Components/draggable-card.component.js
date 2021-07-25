import PlayingCard from "./card.component";
import {useWindowDimensions} from "./helper-functions.componet"
import { useState } from "react";
import Draggable from 'react-draggable';
import { makeStyles } from '@material-ui/core/styles';
const DraggableCard = ({suite, value, revealCard, containerWidth, containerHeight, stopHandler, currentPos, stack}) =>{

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
    const defaaultStopHandler = () =>{
        console.log("default stop handler used");
    }

    const classes = useStyles();
    return (
        <Draggable  position={{x:currentPos.x, y:currentPos.y}}onStop={(e,position) =>{typeof(stopHandler) !== 'undefined' ? stopHandler(position) : defaaultStopHandler(); updateZValue();}} onStart={() =>updateZValue()}>
            <div className={classes.box}>
                <PlayingCard suite={suite} value={value} revealCard={revealCard} containerHeight={containerHeight} containerWidth={containerWidth} stack={stack}/>
            </div>    
        </Draggable>
        );
};

export default DraggableCard;