import PlayingCard from "./card.component";
import { useState } from "react";
import Draggable from 'react-draggable';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from "react";
const DraggableCard = ({id, card, currentPile, containerWidth, containerHeight, stopHandler, newPosition, stack, dragHandler, startHandler}) =>{

    const [zIndex, setZIndex] = useState(0)
    const [currentPos, setCurrentPos] =  useState({x:0,y:0})

    useEffect(() => {
        setCurrentPos({x: newPosition.x, y: newPosition.y})
    }, [newPosition])

    useEffect(() => {
        updateZValue(0)
    }, [id])

    const useStyles = makeStyles({
        box: {
            position: "absolute",
            cursor: "move",
            margin: "auto",
            "user-select" : "none",
            zIndex :0,
        },
    });

    
    const updateZValue = (num) =>{
        setZIndex(0);
    }
    
    const defaultStopHandler = () =>{
        console.log("default stop handler used");
    }

    const defaultDragHandler = () =>{
        console.log("default drag handler used");
    }
    const defaultStartHandler = () =>{
        console.log("default start handler used");
    }

    const classes = useStyles();
    return (
        <Draggable  position={currentPos} 
        onStart={(e,data) => {typeof(startHandler) !== 'undefined' ? startHandler(data, {index:id, pileName:currentPile, currentPos, setPosition: setCurrentPos}) : defaultStartHandler(); updateZValue(10);}} 
        onStop={(e,data) =>{typeof(stopHandler) !== 'undefined' ? stopHandler(data, {index: id,pileName:currentPile,currentPos, setPosition: setCurrentPos}) : defaultStopHandler(); updateZValue(0);}} 
        onDrag={(e,data) => {typeof(dragHandler) !== 'undefined'? dragHandler(data,{index: id,pileName:currentPile, currentPos, setPosition: setCurrentPos}): defaultDragHandler()}}>
            <div className={classes.box}>
                <PlayingCard card={card} containerHeight={containerHeight} containerWidth={containerWidth} stack={stack}/>
            </div>    
        </Draggable>
        );
};

export default DraggableCard;