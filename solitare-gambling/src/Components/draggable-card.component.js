import PlayingCard from "./card.component";
import {useWindowDimensions} from "./helper-functions.componet"
import { useEffect } from "react";
import Draggable from 'react-draggable';
import { makeStyles } from '@material-ui/core/styles';
const DraggableCard = ({suite, value, revealCard, containerWidth, containerHeight, startPos, stopHandler, currentPos}) =>{


    const useStyles = makeStyles({
        box: {
            position: "absolute",
            cursor: "move",
            margin: "auto",
            "user-select" : "none",
          
        },
    });

    const classes = useStyles();
    return (
        <Draggable defaultPosition={{x: startPos.x, y: startPos.y}} bounds={{left : 0, right:containerWidth, top:0, bottom:containerHeight}} position={{x:currentPos.x, y:currentPos.y}}onStop={(e,position) =>stopHandler(position)}>
            <div className={classes.box}>
                <PlayingCard suite={suite} value={value} revealCard={revealCard} containerHeight={containerHeight} containerWidth={containerWidth}/>
            </div>    
        </Draggable>
        );
};

export default DraggableCard;