import React from 'react';

import PlayingCard from './card.component';
import DraggableCard from './draggable-card.component';
import BlankCardSpace from './blank-card-space.component';
import { useState, useEffect } from 'react';
const Cards = ({type, cards, currentPile, containerWidth, containerHeight, stopHandler, dragHandler, startHandler}) => {

    const [pile,setPile] = useState([])
    let currentDragCardAmt = 0;

    useEffect(() => {
        setPile([...cards])
    }, [cards])


    const getYPos = (index) =>{
        let amt = 52;
        if(pile[1].draggable && index < 4){
            index = index - 2;
            amt = 5 + (25*index)
        }
        if(pile[1].draggable && index ===4 ){
            amt = 40
        }
        if(pile[1].draggable && index >4 ){
            amt = 45
        }
        return currentDragCardAmt++ * amt;
    }

    const pileCardDragHandler = (data, cardPosition) =>{
        const tempArray = pile;
        
        let index = 0;
        for(let i = 0; i < tempArray.length; i++){

            if(i >= cardPosition.index){
            
                tempArray[i].newPosition = {x:data.x,y:data.y+ (index*52)};
                tempArray[i].z = 10+index;
                index = index + 1;
            }
        }       
        setPile([...tempArray]);
    }

    const getNewPos = (newPosition, index) =>{
        if((typeof(newPosition) === 'undefined')  || (newPosition.x === 0 && newPosition.y === 0)){
            return {x: 0, y : getYPos(index)}
        }
        return {x: newPosition.x, y : newPosition.y};
    }

    return (
        <div>
            {type === 'foundation' ? (pile !== 'undefined' ? (pile.map((card, index) =>(index === 0 ?<BlankCardSpace key={index} containerHeight={containerHeight} containerWidth={containerWidth}/>: (card.draggable ?
                <DraggableCard key={index} id={index} card={card} z={card.z} currentPile={currentPile} containerHeight={containerHeight} containerWidth={containerWidth} newPosition={getNewPos(card.newPosition, index)}  stack={"first"} startHandler={startHandler}  stopHandler={stopHandler} dragHandler={pileCardDragHandler} />:
                <div key={index} className={"block"}><PlayingCard  card={card} containerHeight={containerHeight} containerWidth={containerWidth}  stack={"first"} /></div>))))
            :<></>) : (pile !== 'undefined' ? (pile.map((card, index) =>(index === 0 ?<BlankCardSpace key={index} containerHeight={containerHeight} containerWidth={containerWidth}/>: (card.draggable ?
                <DraggableCard key={index} id={index} card={card} z={card.z} currentPile={currentPile} containerHeight={containerHeight} containerWidth={containerWidth} newPosition={getNewPos(card.newPosition, index)}  stack={index === 1 ? "first" :"rest"} startHandler={startHandler}  stopHandler={stopHandler} dragHandler={pileCardDragHandler} />:
                <div key={index} className={"block"}><PlayingCard  card={card} containerHeight={containerHeight} containerWidth={containerWidth}  stack={index === 1 ? "first" :"rest"} /></div>))))
            :<></>)}
            

        </div>
    );
}
const PlayingCards = React.memo(Cards);
export default PlayingCards