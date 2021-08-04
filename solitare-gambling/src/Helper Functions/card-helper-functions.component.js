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

export function getRoyalValue(value){
    let string = value +""
    switch (string) {
        case "13":
            return "K";
        case "12":
            return "Q";
        case "11":
            return "J";
        case "1":
            return "A";
        default:
            return value;
    }
}

export function getTitleOfValue(value){
    let string = value +""
    switch (string) {
        case "13":
            return "King";
        case "12":
            return "Queen";
        case "11":
            return "Jack";
        case "1":
            return "Ace";
        default:
            return value;
    }
}
export const suite1 = "diamond"
export const suite2 = "club"
export const suite3 = "heart"
export const suite4 = "spade"
