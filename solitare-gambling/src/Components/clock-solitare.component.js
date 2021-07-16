import React from 'react';
import {useWindowDimensions} from "./helper-functions.componet"
import PlayingCard from "./card.component";
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const ClockSolitare = () => {
	
    const { height, width } = useWindowDimensions();
    const containerHeight = height 
    const containerWidth = width  - 300
    useEffect(() => {
        console.log("_________________________________-")
        console.log("HEIGHT : " + containerHeight);
        console.log("WIDTH : " + containerWidth)
    })

    const useStyles = makeStyles({
        root: {
          maxWidth: containerWidth,
          maxHeight:containerHeight,
          "background-color": "lightslategray",
          margin:"auto",
          overflow:"visible",
        },
        outer: {
            minWidth:width,
            minHeight:height,
            "background-color": "lightslategray",
            margin:"auto",
            overflow:"hidden",
          
        },
        title: {
          fontSize: 35,
          textAlign:"center",
        },
        pos: {
          marginBottom: 12,
        },
      });

      const classes = useStyles();


    return (
        <div className={classes.outer}>
            <header className={classes.title}>
                CLOCK SOLITARE
                
            </header>
            <br/>
            <div className={classes.root}>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"11"} revealCard={true} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>   
                <br/>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br/>

                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br/>
                <header className={classes.title}>
                Next Move Begins IN: 30 seconds
                </header>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br/>

                <Grid container justifyContent="space-between"> 
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                            <Grid item>
                                <PlayingCard suite={"diamond"} value={"8"} revealCard={false} containerHeight={containerHeight} containerWidth={containerWidth}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>  
            </div>
        </div>
    );
	
	
};

export default ClockSolitare