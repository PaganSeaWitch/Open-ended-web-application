import React from 'react';
import calculateTextWidth from "calculate-text-width"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { useInterval } from '../../Helper Functions/custom-hooks';
const Bar = () => {
    
    const animationFrame1 = [      
        "                  ..--~~~--..        [0]         \n",
        "           .-'. . . . . . . ,'     ,'. ;         \n",
        "         ,'. . . / \\ . . . -'__..-'.,'          \n",
        "       ,'. . .  (@)' .  . . . . . ,'             \n",
        "      /. . . . '~~  .  / \\    .,-'              \n",
        "      /. . .  _____     (@)' ,-'                 \n",
        "    ; . . .  \\_;_;_/   '~~ ,'                   \n",
        "  : . . .  /_;__;_\\        /                    \n",
        " |. . . . .  . . . . .-.:   ;                    \n",
        " ; . . . . . . . . . . . . /                     \n",]

    const animationFrame2 = [      
        "                  ..--~~~--..        [0]         \n",
        "           .-'. . . . . . . ,'     ,'. ;         \n",
        "         ,'. . . / \\ . . . -'__..-'.,'          \n",
        "       ,'. . .  (@)' .  . . . . . ,'             \n",
        "      /. . . . '~~  .  / \\    .,-'              \n",
        "      /. . .  _____     (@)' ,-'                 \n",
        "    ; . . .  | ; ;  |   '~~ ,'                   \n",
        "  : . . .   |_;_;_|         /                    \n",
        " |. . . . .  . . . . .-.:   ;                    \n",
        " ; . . . . . . . . . . . . /                     \n",]

    const animationFrame3 = [
        "                  ..--~~~--..        [0]         \n",
        "           .-'. . . . . . . ,'     ,'. ;         \n",
        "         ,'. . ./ \\  . . . -'__..-'.,'          \n",
        "       ,'. . .  (@)' .  . . . . . ,'             \n",
        "      /. . . .  '~~ .  / \\    .,-'              \n",
        "    /. . .  _____      (@)'  ,-'                 \n",
        "   ; . . . /       \\  '~~  ,'                   \n",
        "  : . . .  \\ ____ /        /                    \n",
        " |. . . . .  . . . . .-.:   ;                    \n",
        " ; . . . . . . . . . . . . /                     \n",
    ]

    useInterval(() => {
        changeFrame();
    }, 1000)
    const [frame, setFrame] = useState([]);
    const [frameNum, setFrameNum] = useState(0)
    const changeFrame = () =>{
        console.log("changing frame")
        switch(frameNum){
            case(0):
                setFrame(animationFrame1);
                break;
            case(1):
                setFrame(animationFrame2);
                break;
            case(2):
                setFrame(animationFrame3);
                break;
            default:
                break;
        }
        let num = frameNum + 1;
        if(num === 3){
            setFrameNum(0);
            return;
        }
        setFrameNum(num);
    }
    const displayFrame = (frame) =>{
        let frameString = "";
        for(let i = 0; i < frame.length;i++){
            frameString = frameString + frame[i];
        }
        return frameString;
    }
    return (
        <div className={"card"}>
    
            {displayFrame(frame)}
            {"[(((OO\\_______________/OO)))]                    \n"}
            {" |    |                |    |                     \n"}
        </div>
    );
	
	
};

export default Bar