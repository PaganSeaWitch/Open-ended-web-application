import React from 'react';
import {useWindowDimensions} from "./helper-functions.componet"
import { useEffect } from 'react';
import calculateTextWidth from "calculate-text-width"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';


const PlayingCard = ({suite, value, revealCard, containerWidth, containerHeight}) => {


    const linebreak = "\n"
    const diamonds = "♦";
    const spades = "♠";
    const hearts = "♥";
    const clubs = "♣"; 
    const cardBack = "░";
    const fontString = "500 normal 16px Dejavu Serif"
    const getCardHeight = () =>{
        const tempHeight = Math.ceil(containerHeight / 100)/1.23 ;
        if(tempHeight < 5)
        {
            return 5
        }
        return tempHeight
    }

    
    useEffect(() => {
        if(revealCard === true){
            console.log("Reveal card!")
        }
    }, [revealCard]);


    const getCardWidth = () =>{
        const tempWidth = Math.ceil(containerWidth / 10)/2;
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
        if(containerWidth >= 1800 && containerWidth <= 2800){
            add++;

        }
        if(containerWidth > 1500 && containerWidth < 1800)
        {
            add--;
        }
        
        return linebreak  + ".".repeat(getOptLengthForMidSuite() <= 0 ? 1 : getOptLengthForMidSuite()+2) +getSuite() + ".".repeat(getOptLengthForMidSuite()<= 0 ? 1 : getOptLengthForMidSuite()+1) 
    }




    const getTopSuiteCardPart = () =>{
        return linebreak  + getSuite() + ".".repeat(getOptLengthForCardSuite() <= 0 ? 1 : getOptLengthForCardSuite()) 

    }


    const getBottomSuiteCardPart = () =>{
        return linebreak   + ".".repeat(getOptWidthForCardSuiteRight() <= 0 ? 1 : getOptLengthForCardSuite()) + getSuite() 

    }


    const getOptLengthForMidSuite = () =>{
        
        let periodAmount = 0;
        const widthOfLine = getCardWidth()

        let widthOfCard = calculateTextWidth(".".repeat(periodAmount) +getSuite() + ".".repeat(periodAmount),fontString )
        
        while (widthOfCard < widthOfLine) {
            periodAmount++;
            let string = ".".repeat(periodAmount) +getSuite() + ".".repeat(periodAmount) ;
            widthOfCard = calculateTextWidth(string,fontString)

        }
        return periodAmount -2;
    }


    const getOptLengthForMid = () =>{
        const widthOfLine = getCardWidth()
        let periodAmount = 0;
        let widthOfCard =calculateTextWidth(".".repeat(periodAmount),fontString)

        while(widthOfCard < widthOfLine)
        {
            periodAmount++;
            let string = ".".repeat(periodAmount)  
            widthOfCard = calculateTextWidth(string,fontString)

        }
        return periodAmount -1;
    }


    const getOptLengthForCardSuite = () =>{
        const widthOfLine = getCardWidth()
        let periodAmount = 0;
        let widthOfCard  =  calculateTextWidth(getSuite() + ".".repeat(periodAmount),fontString);


        while (widthOfCard < widthOfLine) {
            periodAmount++;
            let string = getSuite() + ".".repeat(periodAmount)  
            widthOfCard = calculateTextWidth(string,fontString)
            
        }
        return periodAmount -1;
    }

    const getOptWidthForCardSuiteRight = () =>{
        const widthOfLine = getCardWidth()
        let periodAmount = 0;
        const suite = getSuite();
        let widthOfCard  =  calculateTextWidth(".".repeat(periodAmount)+suite ,fontString);

        console.log(widthOfCard)
        while (widthOfCard < widthOfLine) {
            periodAmount++;
            let string =  ".".repeat(periodAmount) +suite
            widthOfCard = calculateTextWidth(string,fontString)
            
        }
        return periodAmount -1;
    }

    const getOptLengthForCardValue = () =>{
        const widthOfLine = getCardWidth()
        let periodAmount = 0;
        let widthOfCard  =  calculateTextWidth(value + ".".repeat(periodAmount),fontString );


        while (widthOfCard < widthOfLine) {
            periodAmount++;
            let string =  value + ".".repeat(periodAmount)   
            widthOfCard = calculateTextWidth(string,fontString)
            
        }
        return periodAmount-1;
    }

    
    const getCardBackMiddle = () =>{
        return  linebreak + cardBack.repeat(getOptLengthForCardBackMiddle() <= 0 ? 1 : getOptLengthForCardBackMiddle())  

    }


    const getOptLengthForCardBackMiddle = () =>{
        const widthOfLine = getCardWidth()
        let periodAmount = 0;
        let widthOfCard =calculateTextWidth(cardBack.repeat(periodAmount),fontString )

        while(widthOfCard < widthOfLine)
        {
            periodAmount++;
            let string = cardBack.repeat(periodAmount) 
            widthOfCard = calculateTextWidth(string,fontString)

        }
        return periodAmount -1;
    }

    const revealCardValue = () =>{
        return  (getTopValueCardPart()
        + getTopSuiteCardPart()
        + getMiddleCardPart().repeat(getMidHeight() -3 <= 0 ? 1: getMidHeight()-3)
        + getMiddleValueCardPart()
        + getMiddleCardPart().repeat(getMidHeight() -3 <= 0 ? 1: getMidHeight()-3)
        + getBottomSuiteCardPart()
        + getBottomValueCardPart())
    }


    const consealCardValue = () =>{
        return  getCardBackMiddle().repeat(getCardHeight() <= 0 ? 1: getCardHeight())
    }

    const getAdjustment = (cardWidth) =>{
        const base = 10;
        return Math.ceil(cardWidth/10) + 1;
        
    }

    const cardWidth = getCardWidth()
    const cardHeight = getCardHeight();

    const adjustment = getAdjustment(cardWidth);

    const useStyles = makeStyles({
        root: {
          maxWidth: cardWidth+ adjustment,
          maxHeight: cardHeight *32.5,
          "white-space": "pre-wrap",
          "background-color": "white",
          "color" : "red",
        },
        content: {
          display: 'inline-block',
          margin: "-25px -10px -16px -6px",
          textAlign:"center",
          fontsize: 16,
          
        },
      });

      const classes = useStyles();

    return (
        <Card className ={classes.root} variant="outlined"  >  
            <CardContent className = {classes.content}> 
                
                {revealCard ? revealCardValue(): consealCardValue()}
                
            </CardContent>
        </Card>
    );
	
	
};

export default PlayingCard