export let fontString = "500 normal 16px Dejavu Serif"
export function getCardHeight(containerHeight){
    const tempHeight = Math.ceil(containerHeight / 100)/1.23 ;
    if(tempHeight < 5)
    {
        return 5
    }
    return tempHeight
}

export function getAdjustment(cardWidth){
    return Math.ceil(cardWidth/10) + 1;
    
}

export function getCardWidth(containerWidth){
    const tempWidth = Math.ceil(containerWidth / 10)/2;
    if(tempWidth < 45){
        return 45
    }

    return tempWidth
}

