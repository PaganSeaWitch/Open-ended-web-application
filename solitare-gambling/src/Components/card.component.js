import React from 'react';
import {useWindowDimensions} from "./helper-functions.componet"
import { useEffect } from 'react';
import calculateTextWidth from "calculate-text-width"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const PlayingCard = ({suite, value, revealCard}) => {

    

    
    const { height, width } = useWindowDimensions();
    const linebreak = "\n"
    const topLeftCard = "┌"
    const topRightCard = "┐"
    const bottomLeftCard = "└"
    const bottomRightCard = "┘";
    const cardHeightSymbol = '│';
    const cardWidthSymbol = "─";
    const diamonds = "♦";
    const spades = "♠";
    const hearts = "♥";
    const clubs = "♣"; 
    const cardBack = "░";

    const getCardHeight = () =>{
        
        return Math.ceil(height / 100) ;
    }


    const getCardWidth = () =>{
        return Math.ceil(width / 100) / 1.3 - 2;
    }


    const getMidHeight = () =>{
        return Math.ceil(getCardHeight()/2)
    }


    const getTopCardPart =  () =>{
       return linebreak + topLeftCard + cardWidthSymbol.repeat(getCardWidth() <= 0 ? 1: getCardWidth()) + topRightCard 
    }           


    const getBottomCardPart = () =>{
        return linebreak + bottomLeftCard + cardWidthSymbol.repeat(getCardWidth() <= 0 ? 1: getCardWidth()) + bottomRightCard
    }


    const getTopValueCardPart = () =>{

            return linebreak + cardHeightSymbol + value + ".".repeat(getOptLengthForCardValue() <= 0 ? 1 : getOptLengthForCardValue()) + cardHeightSymbol

    }


    const getMiddleCardPart = () =>{

        return linebreak + cardHeightSymbol + ".".repeat(getOptLengthForMid() <= 0 ? 1 : getOptLengthForMid()) + cardHeightSymbol
    }


    const getSuite = () =>{
        switch(suite) {
            case "diamond":
              return diamonds
            
            case "club":
                return clubs
                
            case "heart":
                return hearts
              
            case "spade":
                return spades
               
            default:
                return "?"

          } 
    }
    

    const getMiddleValueCardPart = () =>{
        let add = 0;
        if(width >= 1800 && width <= 2800){
            add++;

        }
        if(width > 1500 && width < 1800)
        {
            add--;
        }
        
        return linebreak + cardHeightSymbol + ".".repeat(getOptLengthForMidSuite() <= 0 ? 1 : getOptLengthForMidSuite()) +getSuite() + ".".repeat(getOptLengthForMidSuite() <= 0 ? 1 : getOptLengthForMidSuite()+add) + cardHeightSymbol
    }


    const getBottomValueCardPart = () =>{

        return linebreak +cardHeightSymbol  + ".".repeat(getOptLengthForCardValue() <= 0 ? 1 : getOptLengthForCardValue()) + value + cardHeightSymbol
    }


    const getTopSuiteCardPart = () =>{
        return linebreak + cardHeightSymbol + getSuite() + ".".repeat(getOptLengthForCardSuite() <= 0 ? 1 : getOptLengthForCardSuite()) + cardHeightSymbol

    }


    const getBottomSuiteCardPart = () =>{
        return linebreak + cardHeightSymbol  + ".".repeat(getOptLengthForCardSuite() <= 0 ? 1 : getOptLengthForCardSuite()) + getSuite() + cardHeightSymbol

    }


    const getOptLengthForMidSuite = () =>{
        
        let periodAmount = 0;
        const widthOfLine = calculateTextWidth(getTopCardPart())

        let widthOfCard = calculateTextWidth(linebreak + cardHeightSymbol + ".".repeat(periodAmount) +getSuite() + ".".repeat(periodAmount) + cardHeightSymbol)
        
        while (widthOfCard < widthOfLine) {
            periodAmount++;
            let string = linebreak + cardHeightSymbol + ".".repeat(periodAmount) +getSuite() + ".".repeat(periodAmount) + cardHeightSymbol;
            widthOfCard = calculateTextWidth(string)

        }
        return periodAmount -1;
    }


    const getOptLengthForMid = () =>{
        const widthOfLine = calculateTextWidth(getTopCardPart())
        let periodAmount = 0;
        let widthOfCard =calculateTextWidth(linebreak + cardHeightSymbol + ".".repeat(periodAmount) + cardHeightSymbol)

        while(widthOfCard < widthOfLine)
        {
            periodAmount++;
            let string = linebreak + cardHeightSymbol + ".".repeat(periodAmount) + cardHeightSymbol 
            widthOfCard = calculateTextWidth(string)

        }
        return periodAmount -1;
    }


    const getOptLengthForCardSuite = () =>{
        const widthOfLine = calculateTextWidth(getTopCardPart())
        let periodAmount = 0;
        let widthOfCard  =  calculateTextWidth(linebreak + cardHeightSymbol + getSuite() + ".".repeat(periodAmount) + cardHeightSymbol);


        while (widthOfCard < widthOfLine) {
            periodAmount++;
            let string = linebreak + cardHeightSymbol + getSuite() + ".".repeat(periodAmount) + cardHeightSymbol 
            widthOfCard = calculateTextWidth(string)
            
        }
        return periodAmount -1;
    }


    const getOptLengthForCardValue = () =>{
        const widthOfLine = calculateTextWidth(getTopCardPart())
        let periodAmount = 0;
        let widthOfCard  =  calculateTextWidth(linebreak + cardHeightSymbol + value + ".".repeat(periodAmount) + cardHeightSymbol);


        while (widthOfCard < widthOfLine) {
            periodAmount++;
            let string = linebreak + cardHeightSymbol + value + ".".repeat(periodAmount) + cardHeightSymbol 
            widthOfCard = calculateTextWidth(string)
            
        }
        return periodAmount -1;
    }

    
    const getCardBackMiddle = () =>{
        return linebreak + cardHeightSymbol + cardBack.repeat(getOptLengthForCardBackMiddle() <= 0 ? 1 : getOptLengthForCardBackMiddle())  + cardHeightSymbol

    }


    const getOptLengthForCardBackMiddle = () =>{
        const widthOfLine = calculateTextWidth(getTopCardPart())
        let periodAmount = 0;
        let widthOfCard =calculateTextWidth(linebreak + cardHeightSymbol + cardBack.repeat(periodAmount) + cardHeightSymbol)

        while(widthOfCard < widthOfLine)
        {
            periodAmount++;
            let string = linebreak + cardHeightSymbol + cardBack.repeat(periodAmount) + cardHeightSymbol 
            widthOfCard = calculateTextWidth(string)

        }
        return periodAmount  -1;
    }

    const revealCardValue = () =>{
        return  (getTopCardPart()
        + getTopValueCardPart()
        + getTopSuiteCardPart()
        + getMiddleCardPart().repeat(getMidHeight() -3 <= 0 ? 1: getMidHeight()-3)
        + getMiddleValueCardPart()
        + getMiddleCardPart().repeat(getMidHeight() -3 <= 0 ? 1: getMidHeight()-3)
        + getBottomSuiteCardPart()
        + getBottomValueCardPart()
        + getBottomCardPart())
    }


    const consealCardValue = () =>{
        return  (getTopCardPart()
        + getCardBackMiddle().repeat(getCardHeight() <= 0 ? 1: getCardHeight())
        + getBottomCardPart())
    }

    const cardWidth = calculateTextWidth(getTopCardPart());

    const useStyles = makeStyles({
        root: {
          maxWidth: cardWidth,
          "white-space": "pre-wrap",
          "background-color": "green",
        
        },
        content: {
          display: 'inline-block',
          margin: '-38px -20px',
          transform: 'scale(1.0)',
          
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });

      const classes = useStyles();

    return (
        <Card className ={classes.root} >  
            <CardContent className = {classes.content}> 
                
                {revealCard ? revealCardValue(): consealCardValue()}
                
            </CardContent>
        </Card>
    );
	
	
};

export default PlayingCard