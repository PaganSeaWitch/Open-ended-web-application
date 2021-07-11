import React from 'react';
import {useWindowDimensions} from "./helper-functions.componet"
import PlayingCard from "./card.component";
import Grid from '@material-ui/core/Grid';


const ClockSolitare = () => {
	

    const { height, width } = useWindowDimensions();

    return (
        <Grid container spacing={2}>
            width: {width} ~ height: {height}
            <Grid container xs={12}>
                <PlayingCard suite={"diamond"} value={"8"} revealCard={true}/>
                <PlayingCard suite={"diamond"} value={"10"}revealCard={true}/>
                <PlayingCard suite={"club"} value={"10"}revealCard={true}/>
                <PlayingCard suite={"club"} value={"8"}revealCard={true}/>

                <PlayingCard suite={"heart"} value={"10"}revealCard={true}/>
                <PlayingCard suite={"heart"} value={"8"}revealCard={true}/>

                <PlayingCard suite={"spade"} value={"10"}revealCard={true}/>
                <PlayingCard suite={"spade"} value={"8"}revealCard={true}/>
            </Grid>
            

        </Grid>
    );
	
	
};

export default ClockSolitare