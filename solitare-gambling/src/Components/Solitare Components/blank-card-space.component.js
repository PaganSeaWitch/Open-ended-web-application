import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import calculateTextWidth from "calculate-text-width"
import { fontString, getCardHeight, getCardWidth, getAdjustment} from '../../Helper Functions/card-helper-functions.component';

const BlankCardSpace = ({containerWidth, containerHeight}) => {


    const getOptLengthForCardBackMiddle = () =>{
        const widthOfLine = cardWidth
        let periodAmount = 0;
        let widthOfCard =calculateTextWidth(".".repeat(periodAmount),fontString )

        while(widthOfCard < widthOfLine)
        {
            periodAmount++;
            let string = ".".repeat(periodAmount) 
            widthOfCard = calculateTextWidth(string,fontString)

        }
        return periodAmount -1;
    }

    const getBlankLine = () =>{
        return  "\n" + " ".repeat(getOptLengthForCardBackMiddle() <= 0 ? 1 : getOptLengthForCardBackMiddle())  

    }


    const blankHeight = () =>{
        return getBlankLine().repeat(cardHeight <= 0 ? 1: cardHeight)
    }

    const cardWidth = getCardWidth(containerWidth)
    const cardHeight = getCardHeight(containerHeight);

    const adjustment = getAdjustment(cardWidth);

    const useStyles = makeStyles({
        root: {
            maxWidth: cardWidth + adjustment,
            maxHeight: cardHeight * 32.5,
            "white-space": "pre-wrap",
            "background-color": "#f0f4ff",
            
        },
        content: {
          maxWidth: cardWidth + adjustment,
          maxHeight: cardHeight * 32.5,
          margin: "-25px -10px -16px -6px",
          textAlign:"center",
          fontsize: 16,
          font :"500 normal 16px Dejavu Serif",

        },
      });

      const classes = useStyles();

    return (
        <Card className ={classes.root} variant={"outlined"}>
            <CardContent className = {classes.content}> 
                {blankHeight()}
            </CardContent>
        </Card>
    );
	
	
};

export default BlankCardSpace