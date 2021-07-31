import React from 'react';

import PlayingCard from './card.component';
import DraggableCard from './draggable-card.component';
import BlankCardSpace from './blank-card-space.component';
import { useState, useEffect } from 'react';
const PlayingCards = ({cards, currentPile, containerWidth, containerHeight, stopHandler, dragHandler, startHandler}) => {

    const indexOfFirstDragCard = cards.findIndex((e) => e.draggable === true);
    const [pile,setPile] = useState([])

    useEffect(() => {
        setPile([...cards])
    }, [cards])

    let currentDragCardAmt = 0;

    const getYPos = () =>{
        return currentDragCardAmt++ * 52;
    }

    const pileCardDragHandler = (data, cardPosition) =>{
        const tempArray = pile;
        if(cardPosition.index !== tempArray.length-1){
            let index = 0;
            for(let i = 0; i < tempArray.length; i++){

                if(i >= cardPosition.index){

                    tempArray[i].newPosition = {x:data.x,y:data.y+ (index*52)};
                    index = index + 1;
               }
            }
            setPile([...tempArray]);
        }
        
    }

    const getNewPos = (newPosition) =>{


        if((typeof(newPosition) === 'undefined')  || (newPosition.x === 0 && newPosition.y === 0)){
            return {x: 0, y : getYPos()}
        }
        return {x: newPosition.x, y : newPosition.y};
    }

    return (
        <div>
            {pile !== 'undefined' ? (pile.map((card, index) =>(index === 0 ?<BlankCardSpace key={index} containerHeight={containerHeight} containerWidth={containerWidth}/>: (card.draggable ?
                <DraggableCard key={index} id={index} card={card} currentPile={currentPile} containerHeight={containerHeight} containerWidth={containerWidth} newPosition={getNewPos(card.newPosition)}  stack={index === 1 ? "first" :"rest"} startHandler={startHandler}  stopHandler={stopHandler} dragHandler={pileCardDragHandler} />:
                <div key={index} className={"block"}><PlayingCard  card={card} containerHeight={containerHeight} containerWidth={containerWidth}  stack={index === 1 ? "first" :"rest"} /></div>))))
            :<></>}

        </div>
    );
}

export default PlayingCards