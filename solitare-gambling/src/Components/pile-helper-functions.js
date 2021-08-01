import { getCardWidth, getAdjustment } from "./card-helper-functions.component";

export const pile1 = "first";
export const pile2 = "second";
export const pile3 = "third";
export const pile4 = "fourth";
export const pile5 = "fifth";
export const pile6 = "sixth";
export const pile7 = "seventh";
export const noPile = "out";
export function whereIsPileCardInRelationToPiles(pile, posX,containerWidth){
    let i = 0;
    const cardWidth = getCardWidth(containerWidth)+ getAdjustment(getCardWidth(containerWidth))+20;
    switch(pile){
        case(pile1):
            i = 1;
            break;
        case(pile2):
            i = 2;
            break;
        case(pile3):
            i = 3;
            break;
        case(pile4):
            i = 4;
            break;
        case(pile5):
            i = 5;
            break;
        case(pile6):
            i = 6
            break;
        case(pile7):
            i = 7;
            break;
        default:
            console.log(pile)
            return null;
    }
    if(posX < 0){
        posX = posX * -1;
        while(posX > cardWidth){
            posX = posX - cardWidth;
            i--;
        }
    }
    else{
        while(posX > cardWidth){
            posX = posX - cardWidth;
            i++;
        }
    }
    const pileAt = getPile(i);
    if(pileAt === 'out'){
        return pile;
    }
    return pileAt;
}


export function getPile(i){
    switch(i){
        case(1):
            return pile1
        case(2):
            return pile2
        case(3):
            return pile3
        case(4):
            return pile4
        case(5):
            return pile5
        case(6):
            return pile6;
        case(7):
            return pile7;
        default:
            return noPile;
    }
}
