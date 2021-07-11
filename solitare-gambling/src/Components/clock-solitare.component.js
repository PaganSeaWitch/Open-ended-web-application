import React from 'react';
import {useWindowDimensions} from "./helper-functions.componet"
import Card from "./card.component";
const ClockSolitare = () => {
	

    const { height, width } = useWindowDimensions();

    return (
        <div>
            width: {width} ~ height: {height}
            <Card suite={"diamond"} value={"8"}/>
            <Card suite={"diamond"} value={"10"}/>

        </div>
    );
	
	
};

export default ClockSolitare