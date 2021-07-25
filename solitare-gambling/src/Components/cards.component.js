import React from 'react';

import PlayingCard from './card.component';

const PlayingCards = ({cards, containerWidth, containerHeight}) => {

    return (
        <div>
            {cards.map((card, index) =><div className={"block"}><PlayingCard key={index} suite={card.suite} revealCard={true} value={card.value}containerHeight={containerHeight} containerWidth={containerWidth}  stack={index === 0 ? false :true} /></div>)}
        </div>
    );
}

export default PlayingCards