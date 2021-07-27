import PlayingCard from "./card.component";
import { useState } from "react";
import Draggable from 'react-draggable';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from "react";
const DraggableCard = ({id, card, currentPile, containerWidth, containerHeight, stopHandler, currentPos, stack, dragHandler}) =>{

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

    useEffect(() => {
        console.log(id);
    }, [])
    const updateZValue = () =>{
        if(zIndex > 0){
            setZIndex(0);
        }
        else{
            setZIndex(10);
        }
    }
    const defaultStopHandler = () =>{
        console.log("default stop handler used");
    }

    const defaultDragHandler = () =>{
        console.log("default drag handler used");
    }

    const classes = useStyles();
    return (
        <Draggable  position={{x:currentPos.x, y:currentPos.y}}onStop={(e,data) =>{typeof(stopHandler) !== 'undefined' ? stopHandler(data, {index: id,pileName:currentPile}) : defaultStopHandler(); updateZValue();}} onDrag={(e,data) => {typeof(dragHandler) !== 'undefined'? dragHandler(data,{index: id,pileName:currentPile}): defaultDragHandler()}}onStart={() =>updateZValue()}>
            <div className={classes.box}>
                <PlayingCard card={card} containerHeight={containerHeight} containerWidth={containerWidth} stack={stack}/>
            </div>    
        </Draggable>
        );
};

export default DraggableCard;