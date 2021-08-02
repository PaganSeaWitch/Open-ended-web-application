import { suite1, suite2, suite3, suite4 } from "./card-helper-functions.component";
export function getStandardDeckOfCards(){
    const tempArray = []
    for(let i = 1; i < 14; i++){
        tempArray.push(suite1+i);
    }
    for(let i = 1; i < 14; i++){
        tempArray.push(suite2+i);
    }
    for(let i = 1; i < 14; i++){
        tempArray.push(suite3+i);
    }
    for(let i = 1; i < 14; i++){
        tempArray.push(suite4+i);
    }
    return tempArray;
}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
export function getRandomCard(cardsLeft, setCardsLeft){
    let randNum = getRandomInt(0, cardsLeft.length);
    let gottenString = cardsLeft[randNum];
    const tempArray = cardsLeft;
    tempArray.splice(randNum, 1);
    setCardsLeft(tempArray)
    console.log(gottenString);
    return createCard(gottenString);
}
export function getRandomCards(amt, cardsLeft, setCardsLeft){
    const tempArray = cardsLeft;
    const cardArray = [];
    if(amt > tempArray.length){
        console.log("asking for:" + amt)
        console.log("Have : " +tempArray.length)
        for(let i = 0; i< cardsLeft.length; i++){
            let gottenString = tempArray[i];
            cardArray.push(createCard(gottenString));
        }
        tempArray.splice(0, tempArray.length)
    }
    else{
        for(let i = 0; i< amt; i++){
            let randNum = getRandomInt(0, tempArray.length);
            let gottenString = tempArray[randNum];
            tempArray.splice(randNum, 1);
            cardArray.push(createCard(gottenString));
        }
    }
    setCardsLeft(tempArray)
    return cardArray;
}

export function createCard(string){
    if(string.startsWith(suite1)){
        return {suite: suite1, value: string.substring(7)};
    }
    if(string.startsWith(suite2)){
        return {suite: suite2, value: string.substring(4)};

    }
    if(string.startsWith(suite3)){
        return {suite: suite3, value: string.substring(5)};

    }
    if(string.startsWith(suite4)){
        return {suite: suite4, value: string.substring(5)};
    }
    else{
        return null;
    }
}

export function addCardProperties(cards){
    for(let i = 0; i < cards.length; i++){
        if(cards.length === i+ 1){
            cards[i].revealCard = true;
            cards[i].draggable = true;
            cards[i].newPosition = {x:0, y:0}
        }
        else{
            cards[i].revealCard = false;
            cards[i].draggable = false
        }
    }
    return cards;
}