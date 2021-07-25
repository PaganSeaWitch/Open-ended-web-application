import React from 'react';
import calculateTextWidth from "calculate-text-width"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { fontString, getCardHeight, getCardWidth, getAdjustment} from './card-helper-functions.component';


const PlayingCard = ({suite, value, revealCard, containerWidth, containerHeight, stack}) => {
    //const fontString = "500 normal 16px Dejavu Serif"


    const linebreak = "\n"
    const diamonds = "♦";
    const spades = "♠";
    const hearts = "♥";
    const clubs = "♣"; 
    const cardBack = "░";
    const color = "green";
    


    const getMidHeight = () =>{
        return Math.ceil(cardHeight/2)
    }


    const getTopValueCardPart = () =>{

        return linebreak + getRoyalValue() + ".".repeat(getOptLengthForCardValue() <= 0 ? 1 : getOptLengthForCardValue())

    }


    const getBottomValueCardPart = () =>{

        return linebreak + ".".repeat(getOptLengthForCardValue() <= 0 ? 1 : getOptLengthForCardValue()) + getRoyalValue()

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
    

    const getRoyalValue = () => {
        switch (value) {
            case "13":
                return "K";
            case "12":
                return "Q";
            case "11":
                return "J";
            default:
                return value;
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
        return linebreak   + ".".repeat(getOptWidthForCardSuiteRight() <= 0 ? 1 : getOptWidthForCardSuiteRight()) + getSuite() 

    }


    const getOptLengthForMidSuite = () =>{
        
        let periodAmount = 0;
        const widthOfLine = cardWidth

        let widthOfCard = calculateTextWidth(".".repeat(periodAmount) +getSuite() + ".".repeat(periodAmount),fontString )
        
        while (widthOfCard < widthOfLine) {
            periodAmount++;
            let string = ".".repeat(periodAmount) +getSuite() + ".".repeat(periodAmount) ;
            widthOfCard = calculateTextWidth(string,fontString)

        }
        return periodAmount -2;
    }


    const getOptLengthForMid = () =>{
        const widthOfLine = cardWidth
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
        const widthOfLine = cardWidth
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
        const widthOfLine = cardWidth
        let periodAmount = 0;
        const suite = getSuite();
        let widthOfCard  =  calculateTextWidth(".".repeat(periodAmount)+suite ,fontString);

        while (widthOfCard < widthOfLine) {
            periodAmount++;
            let string =  ".".repeat(periodAmount) +suite
            widthOfCard = calculateTextWidth(string,fontString)
            
        }
        return periodAmount -1;
    }


    const getOptLengthForCardValue = () =>{
        const widthOfLine = cardWidth
        let periodAmount = 0;
        let widthOfCard  =  calculateTextWidth(getRoyalValue() + ".".repeat(periodAmount),fontString );


        while (widthOfCard < widthOfLine) {
            periodAmount++;
            let string =  getRoyalValue() + ".".repeat(periodAmount)   
            widthOfCard = calculateTextWidth(string,fontString)
            
        }
        if(value > 10){
            return periodAmount-3;
        }
        return periodAmount-1;
    }

    
    const getCardBackMiddle = () =>{
        return  linebreak + cardBack.repeat(getOptLengthForCardBackMiddle() <= 0 ? 1 : getOptLengthForCardBackMiddle())  

    }


    const getOptLengthForCardBackMiddle = () =>{
        const widthOfLine = cardWidth
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
        return  getCardBackMiddle().repeat(cardHeight <= 0 ? 1: cardHeight)
    }


    const cardWidth = getCardWidth(containerWidth);
    const cardHeight = getCardHeight(containerHeight);

    const adjustment = getAdjustment(cardWidth);

    const moveUpBy = () =>{
        const marginTop=  -19 * (cardHeight -2) +"px"
        console.log(marginTop);
        return marginTop;
    }

    const useStyles = makeStyles({
        root: {
            maxWidth: cardWidth + adjustment,
            maxHeight: cardHeight * 32.5,
            "white-space": "pre-wrap",
            "background-color": "#f0f4ff",
            display: 'block',
            "color": (revealCard ? (suite === 'club' || suite === 'spade' ? "black" : "red"): "#d918ff"),
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: ( stack ? moveUpBy : "auto"),
            marginBottom: "auto",

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
        <Card raised={true} className ={classes.root}>  
            <CardContent className = {classes.content}> 
                
                {revealCard ? revealCardValue(): consealCardValue()}
                
            </CardContent>
        </Card>
    );
	
	
};

export default PlayingCard