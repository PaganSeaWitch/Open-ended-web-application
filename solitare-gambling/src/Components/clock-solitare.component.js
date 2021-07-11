import React from 'react';
import {useWindowDimensions} from "./helper-functions.componet"
import PlayingCard from "./card.component";
import Grid from '@material-ui/core/Grid';


const ClockSolitare = () => {
	

    const { height, width } = useWindowDimensions();

    return (
        <Grid container spacing={2}>
            width: {width} ~ height: {height}
            <Grid item xs={12}>
                <PlayingCard suite={"diamond"} value={"8"} revealCard={true}/>
                <PlayingCard suite={"diamond"} value={"10"}revealCard={false}/>
                <PlayingCard suite={"club"} value={"10"}revealCard={false}/>
                <PlayingCard suite={"club"} value={"8"}revealCard={false}/>

                <PlayingCard suite={"heart"} value={"10"}revealCard={false}/>
                <PlayingCard suite={"heart"} value={"8"}revealCard={false}/>

                <PlayingCard suite={"spade"} value={"10"}revealCard={false}/>
                <PlayingCard suite={"spade"} value={"8"}revealCard={false}/>
            </Grid>
            

        </Grid>
    );
	
	
};

export default ClockSolitare