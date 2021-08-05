import React from 'react';
import calculateTextWidth from "calculate-text-width"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { fontString, getCardHeight, getCardWidth, getAdjustment, getRoyalValue} from '../../Helper Functions/card-helper-functions.component';
const Bar = () => {
    

    return (
        <div className={"card"}>
            {"\n\n\n"}
            {"|\n"+"|"}
        </div>
    );
	
	
};

export default Bar