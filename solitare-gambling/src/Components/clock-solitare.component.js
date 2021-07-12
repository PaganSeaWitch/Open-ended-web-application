import React from 'react';
import {useWindowDimensions} from "./helper-functions.componet"
import PlayingCard from "./card.component";
import Grid from '@material-ui/core/Grid';


const ClockSolitare = () => {
	

    return (
        <div className={"clock"}>
            <Grid container justifyContent="space-between">
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={true}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={true}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={true}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={true}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>   
            <Grid container justifyContent="space-between">
                <Grid item>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justifyContent="space-between">
                <Grid item>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justifyContent="space-between">
                <Grid item>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                        <Grid item>
                            <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justifyContent="space-between"> 
            <Grid item>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item>
                        <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                    </Grid>
                    <Grid item>
                        <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                    </Grid>
                    <Grid item>
                        <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                    </Grid>
                    <Grid item>
                        <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item>
                        <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                    </Grid>
                    <Grid item>
                        <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                    </Grid>
                    <Grid item>
                        <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                    </Grid>
                    <Grid item>
                        <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item>
                        <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                    </Grid>
                    <Grid item>
                        <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                    </Grid>
                    <Grid item>
                        <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                    </Grid>
                    <Grid item>
                        <PlayingCard suite={"diamond"} value={"8"} revealCard={false}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>  
        </div>
    );
	
	
};

export default ClockSolitare