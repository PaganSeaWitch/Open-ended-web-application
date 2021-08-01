import { getCardHeight, getCardWidth, getAdjustment } from "./card-helper-functions.component";
import { getPile } from "./pile-helper-functions";
export const foundation1 = 'firstFoundation'
export const foundation2 = 'secondFoundation'
export const foundation3 = 'thirdFoundation'
export const foundation4 = 'fourthFoundation'
export const noFoundation = 'out'

export function WhereIsFoundationCardInRelationToPiles(pos, foundationName, containerHeight, containerWidth){
    let i = 0;
    const cardWidth = getCardWidth(containerWidth)+ getAdjustment(getCardWidth(containerWidth))+20;
    const cardHeight = getCardHeight(containerHeight) *20;
    switch(foundationName){
        case(foundation1):
            i = 4;
            break;
        case(foundation2):
            i = 5;
            break;
        case(foundation3):
            i = 6;
            break;
        case(foundation4):
            i = 7;
            break;
        default:
            console.log(foundationName)
            return null;
    }
    if(pos.x < 0){
        pos.x = pos.x * -1;
        while(pos.x > cardWidth){
            pos.x = pos.x - cardWidth;
            i--;
        }
    }
    else{
        while(pos.x > cardWidth){
            pos.x = pos.x - cardWidth;
            i++;
        }
    }
    console.log(pos.y)
    console.log(cardHeight)
    if(pos.y < cardHeight){
        
        const atFoundation = getFoundation(i);
        if(atFoundation === 'out'){
            return foundationName;
        }
        return atFoundation;
    }
    const atPile = getPile(i);
    if(atPile === 'out'){
        return foundationName;
    }
    return atPile;
}

function getFoundation(i){
    switch(i){
        case(4):
            return foundation1
        case(5):
            return foundation2
        case(6):
            return foundation3;
        case(7):
            return foundation4;
        default:
            return noFoundation;
    }
}