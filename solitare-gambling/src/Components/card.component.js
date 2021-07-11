import React from 'react';
import {useWindowDimensions} from "./helper-functions.componet"
import { useEffect, useState } from 'react';
import calculateTextWidth from "calculate-text-width"
const Card = ({suite, value}) => {



    useEffect(() =>{
        switch(suite) {
            case "diamond":
              console.log("This card is a diamond")
              break;
            case "club":
                console.log("This card is a club")
                break;
            case "heart":
                console.log("This card is a heart")
                break;
            case "spade":
                console.log("This card is a spade")
                break;
            default:
                break;
          } 
          
    })

    const { height, width } = useWindowDimensions();
    const linebreak = "\n"
    const topLeftCard = "┌"
    const topRightCard = "┐"
    const bottomLeftCard = "└"
    const bottomRightCard = "┘";
    const cardHeightSymbol = '│';
    const cardWidthSymbol = "─";
    const getCardHeight = () =>{
        
        return Math.ceil(height / 100);
    }
    const getCardWidth = () =>{
        
        return Math.ceil(width / 100) / 1.3 - 2;
    }
    const getTopCardPart =  () =>{
       return linebreak + topLeftCard + cardWidthSymbol.repeat(getCardWidth()) + topRightCard 
    }           

    const getBottomCardPart = () =>{
        return linebreak + bottomLeftCard + cardWidthSymbol.repeat(getCardWidth()) + bottomRightCard
    }

    const getTopValueCardPart = () =>{

            return linebreak +cardHeightSymbol + value + ".".repeat(getOptLength(false)-2) + cardHeightSymbol


    }

    const getMiddleCardPart = () =>{

        return linebreak + cardHeightSymbol + ".".repeat(getOptLength(true)-2) + cardHeightSymbol


}
    const getOptLength = (isMiddle) =>{
        const widthOfLine = calculateTextWidth(getTopCardPart())
        let periodAmount = 0;
        let widthOfCard;
        if(isMiddle)
        {
            widthOfCard =  calculateTextWidth(linebreak + cardHeightSymbol + ".".repeat(periodAmount) + cardHeightSymbol)

        }
        widthOfCard =  calculateTextWidth(linebreak + cardHeightSymbol + value + ".".repeat(periodAmount) + cardHeightSymbol)

        while (widthOfCard < widthOfLine) {
            let string;
            if(isMiddle)
            {
               string = linebreak + cardHeightSymbol + ".".repeat(periodAmount) + cardHeightSymbol 

            }
            else{
                string = linebreak + cardHeightSymbol + value + ".".repeat(periodAmount) + cardHeightSymbol 

            }
            widthOfCard = calculateTextWidth(string)
            periodAmount++;
        }
        return periodAmount;
    }


    return (
        <div className = 'card'>  

        
            this card is a {value} of  {suite}s
            {linebreak}
            {getTopCardPart()}
            {getTopValueCardPart()}
            {getMiddleCardPart().repeat(getCardHeight()-2)}
            {getBottomCardPart()}
        </div>
    );
	
	
};

export default Card