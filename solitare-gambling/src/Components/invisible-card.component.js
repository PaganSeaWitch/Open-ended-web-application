import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import calculateTextWidth from "calculate-text-width"
import { fontString, getCardHeight, getCardWidth, getAdjustment} from './card-helper-functions.component';

const InvisibleCard = ({containerWidth, containerHeight}) => {


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
            
        },
        content: {
          maxWidth: cardWidth + adjustment,
          maxHeight: cardHeight * 32.5,
          display: 'inline-block',
          margin: "-25px -10px -16px -6px",
          textAlign:"center",
          fontsize: 16,
          
        },
      });

      const classes = useStyles();

    return (
        <Card elevation={0} className ={classes.root} >
            <CardContent className = {classes.content}> 
                {blankHeight()}
            </CardContent>
        </Card>
    );
	
	
};

export default InvisibleCard