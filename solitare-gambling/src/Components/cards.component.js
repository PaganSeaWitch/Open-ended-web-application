import React from 'react';

import PlayingCard from './card.component';
import DraggableCard from './draggable-card.component';
import BlankCardSpace from './blank-card-space.component';
const PlayingCards = ({cards, containerWidth, containerHeight,stopHandler}) => {

    return (
        <div>
            
            {cards.map((card, index) =>(index === 0 ?<BlankCardSpace key={index} containerHeight={containerHeight} containerWidth={containerWidth}/>: (card.draggable ?
                <DraggableCard key={index} suite={card.suite} revealCard={card.revealCard} value={card.value} containerHeight={containerHeight} containerWidth={containerWidth} currentPos={{x:0, y:0}}  stack={index === 1 ? "first" :"rest"} stopHandler={stopHandler} /> :
                <div className={"block"}><PlayingCard key={index} suite={card.suite} revealCard={card.revealCard} value={card.value}containerHeight={containerHeight} containerWidth={containerWidth}  stack={index === 1 ? "first" :"rest"} /></div>)))}
                

        </div>
    );
}

export default PlayingCards