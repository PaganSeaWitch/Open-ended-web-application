import React from 'react';
import calculateTextWidth from "calculate-text-width"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { fontString, getCardHeight, getCardWidth, getAdjustment, getRoyalValue} from '../../Helper Functions/card-helper-functions.component';
const DeckCard = ({card, containerWidth, containerHeight, stack}) => {
    //const fontString = "500 normal 16px Dejavu Serif"


    const linebreak = "\n"
    const diamonds = "♦";
    const spades = "♠";
    const hearts = "♥";
    const clubs = "♣"; 
    const cardBack = "░";


    const getMidHeight = () =>{
        return Math.ceil(cardHeight/2)
    }


    const getTopValueCardPart = () =>{
        return linebreak + getRoyalValue(card.value) + ".".repeat(getOptLengthForCardValue() <= 0 ? 1 : getOptLengthForCardValue())

    }


    const getBottomValueCardPart = () =>{

        return linebreak + ".".repeat(getOptLengthForCardValue() <= 0 ? 1 : getOptLengthForCardValue()) + getRoyalValue(card.value)

    }


    const getMiddleCardPart = () =>{

        return linebreak  + ".".repeat(getOptLengthForMid() <= 0 ? 1 : getOptLengthForMid()) 
    }


    const getSuite = () =>{
        switch(card.suite) {
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
        let widthOfCard  =  calculateTextWidth(getRoyalValue(card.value) + ".".repeat(periodAmount),fontString );


        while (widthOfCard < widthOfLine) {
            periodAmount++;
            let string =  getRoyalValue(card.value) + ".".repeat(periodAmount)   
            widthOfCard = calculateTextWidth(string,fontString)
            
        }
        if(card.value > 10){
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

    const moveUpBy = (thisMuch) =>{
        if(thisMuch === "part"){
            const marginTop=  -19 * (cardHeight -2) +"px"
            return marginTop;
        }
        else{
            const marginTop=  -22.6 * (cardHeight -2) +"px"
            return marginTop;
        }
    }

    const useStyles = makeStyles({
        root: {
            maxWidth: cardWidth + adjustment,
            maxHeight: cardHeight * 32.5,
            "white-space": "pre-wrap",
            "background-color": "#f0f4ff",
            display: 'block',
            "color": (card.revealCard ? (card.suite === 'club' || card.suite === 'spade' ? "black" : "red"): "#d918ff"),
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: ( typeof(stack) !== 'undefined'? (stack === "first" ? moveUpBy("whole"): moveUpBy("part")) : "auto"),
            marginBottom: "auto",


        },
        content: {
          display: 'inline-block',
          margin: "-25px -10px -16px -6px",
          textAlign:"center",
          font :"500 normal 16px Dejavu Serif",
          "webkit-touch-callout": "none", /* iOS Safari */
          "webkit-user-select": "none", /* Safari */
          "khtml-user-select": "none", /* Konqueror HTML */
          "moz-user-select": "none", /* Old versions of Firefox */
          "ms-user-select": "none", /* Internet Explorer/Edge */
          "user-select": "none", /* Non-prefixed version, currently
                                            supported by Chrome, Edge, Opera and Firefox */
          
        },
      });

      const classes = useStyles();

    return (
        <Card raised={true} className ={classes.root}>  
            <CardContent className = {classes.content}> 
                
                {card.revealCard ? revealCardValue(): consealCardValue()}
                
            </CardContent>
        </Card>
    );
	
	
};
const PlayingCard = React.memo(DeckCard)
export default PlayingCard