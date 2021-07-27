import React from 'react';

import PlayingCard from './card.component';
import DraggableCard from './draggable-card.component';
import BlankCardSpace from './blank-card-space.component';
const PlayingCards = ({cards, currentPile, containerWidth, containerHeight,stopHandler, dragHandler}) => {

    const indexOfFirstDragCard = cards.findIndex((e) => e.draggable === true);
    let currentDragCardAmt = 0;

    const getYPos = () =>{
        return currentDragCardAmt++ * 52;
    }

    const getCurrentPos = (currentPos) =>{


        if(typeof(currentPos) === 'undefined'  || currentPos.x === 0 && currentPos.y === 0){
            return {x: 0, y : getYPos()}
        }
        return currentPos;
    }

    return (
        <div>
            
            {cards.map((card, index) =>(index === 0 ?<BlankCardSpace key={index} containerHeight={containerHeight} containerWidth={containerWidth}/>: (card.draggable ?
                <DraggableCard key={index} id={index} card={card} currentPile={currentPile} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={getCurrentPos(card.currentPos)}  stack={index === 1 ? "first" :"rest"} stopHandler={stopHandler} dragHandler={dragHandler} />:
                <div className={"block"}><PlayingCard key={index} card={card} containerHeight={containerHeight} containerWidth={containerWidth}  stack={index === 1 ? "first" :"rest"} /></div>)))}
                

        </div>
    );
}

export default PlayingCards