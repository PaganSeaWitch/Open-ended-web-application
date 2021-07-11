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

    const diamonds = "♦";
    const spades = "♠";
    const hearts = "♥";
    const clubs = "♣"; 
    const cardBack = "░";

    const getCardHeight = () =>{
        const tempHeight = Math.ceil(height / 100) ;
        console.log(tempHeight)
        if(tempHeight < 5)
        {
            return 5
        }
        return tempHeight
    }


    const getCardWidth = () =>{
        const tempWidth = Math.ceil(width / 10)/2;
        if(tempWidth < 45){
            return 45
        }

        return tempWidth
        

    }


    const getMidHeight = () =>{
        return Math.ceil(getCardHeight()/2)
    }





    const getTopValueCardPart = () =>{

            return linebreak  + value + ".".repeat(getOptLengthForCardValue() <= 0 ? 1 : getOptLengthForCardValue()) 

    }
    const getBottomValueCardPart = () =>{

        return linebreak+ ".".repeat(getOptLengthForCardValue() <= 0 ? 1 : getOptLengthForCardValue())   + value 

}

    const getMiddleCardPart = () =>{

        return linebreak  + ".".repeat(getOptLengthForMid() <= 0 ? 1 : getOptLengthForMid()) 
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
        
        return linebreak  + ".".repeat(getOptLengthForMidSuite() <= 0 ? 1 : getOptLengthForMidSuite()) +getSuite() + ".".repeat(getOptLengthForMidSuite() <= 0 ? 1 : getOptLengthForMidSuite()+add) 
    }




    const getTopSuiteCardPart = () =>{
        return linebreak  + getSuite() + ".".repeat(getOptLengthForCardSuite() <= 0 ? 1 : getOptLengthForCardSuite()) 

    }


    const getBottomSuiteCardPart = () =>{
        return linebreak   + ".".repeat(getOptLengthForCardSuite() <= 0 ? 1 : getOptLengthForCardSuite()) + getSuite() 

    }


    const getOptLengthForMidSuite = () =>{
        
        let periodAmount = 0;
        const widthOfLine = getCardWidth()

        let widthOfCard = calculateTextWidth(linebreak  + ".".repeat(periodAmount) +getSuite() + ".".repeat(periodAmount) )
        
        while (widthOfCard < widthOfLine) {
            periodAmount++;
            let string = linebreak  + ".".repeat(periodAmount) +getSuite() + ".".repeat(periodAmount) ;
            widthOfCard = calculateTextWidth(string)

        }
        return periodAmount -1;
    }


    const getOptLengthForMid = () =>{
        const widthOfLine = getCardWidth()
        let periodAmount = 0;
        let widthOfCard =calculateTextWidth(linebreak  + ".".repeat(periodAmount) )

        while(widthOfCard < widthOfLine)
        {
            periodAmount++;
            let string = linebreak  + ".".repeat(periodAmount)  
            widthOfCard = calculateTextWidth(string)

        }
        return periodAmount -1;
    }


    const getOptLengthForCardSuite = () =>{
        const widthOfLine = getCardWidth()
        let periodAmount = 0;
        let widthOfCard  =  calculateTextWidth(linebreak  + getSuite() + ".".repeat(periodAmount) );


        while (widthOfCard < widthOfLine) {
            periodAmount++;
            let string = linebreak  + getSuite() + ".".repeat(periodAmount)  
            widthOfCard = calculateTextWidth(string)
            
        }
        return periodAmount -1;
    }


    const getOptLengthForCardValue = () =>{
        const widthOfLine = getCardWidth()
        let periodAmount = 0;
        let widthOfCard  =  calculateTextWidth(linebreak  + value + ".".repeat(periodAmount) );


        while (widthOfCard < widthOfLine) {
            periodAmount++;
            let string = linebreak  + value + ".".repeat(periodAmount)   
            widthOfCard = calculateTextWidth(string)
            
        }
        return periodAmount -1;
    }

    
    const getCardBackMiddle = () =>{
        return linebreak  + cardBack.repeat(getOptLengthForCardBackMiddle() <= 0 ? 1 : getOptLengthForCardBackMiddle())  

    }


    const getOptLengthForCardBackMiddle = () =>{
        const widthOfLine = getCardWidth()
        let periodAmount = 0;
        let widthOfCard =calculateTextWidth(linebreak  + cardBack.repeat(periodAmount) )

        while(widthOfCard < widthOfLine)
        {
            periodAmount++;
            let string = linebreak  + cardBack.repeat(periodAmount) 
            widthOfCard = calculateTextWidth(string)

        }
        return periodAmount  -1;
    }

    const revealCardValue = () =>{
        return  (getTopValueCardPart()
        + getTopSuiteCardPart()
        + getMiddleCardPart().repeat(getMidHeight() -2 <= 0 ? 1: getMidHeight()-2)
        + getMiddleValueCardPart()
        + getMiddleCardPart().repeat(getMidHeight() -2 <= 0 ? 1: getMidHeight()-2)
        + getBottomSuiteCardPart()
        + getBottomValueCardPart())
    }


    const consealCardValue = () =>{
        return  getCardBackMiddle().repeat(getCardHeight() <= 0 ? 1: getCardHeight())
    }

    const getAdjustment = (cardWidth) =>{
        const base = 10;
        console.log(cardWidth)
        return Math.ceil(cardWidth/10) + 10;
        
    }

    const cardWidth = getCardWidth()

    const adjustment = getAdjustment(cardWidth);

    const useStyles = makeStyles({
        root: {
          maxWidth: cardWidth +adjustment,
          "white-space": "pre-wrap",
          "background-color": "green",
        
        },
        content: {
          display: 'inline-block',
          margin: "-30px -10px",
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