
import { suite1, suite2, suite3, suite4 } from './card-helper-functions.component';

export function CheckAgnesRulesForPiles(array, index, newPile){
    const cardToCheck = array[index];
    if(newPile.length === 1){
        return false;
    }
    const cardToCheckAgainst = newPile[newPile.length -1];
    const suite = cardToCheck.suite;
    const otherSuite = cardToCheckAgainst.suite;
    if(checkSuite(suite, otherSuite)){
        const value = cardToCheck.value;
        const otherValue = cardToCheckAgainst.value;
        return checkValue(value, otherValue);
    }
    return false
}

function checkSuite(suite, otherSuite){
    if(suite === suite1 || suite === suite3){
        return (otherSuite === suite1 || otherSuite === suite3)
    }
    if(suite === suite2 || suite === suite4){
        return (otherSuite === suite2 || otherSuite === suite4)
    }
}

function checkValue(value, otherValue){
    const otherNum =Number.parseInt(otherValue)
    const num = Number.parseInt(value);

    if(num + 1 === otherNum){
        return true;
    }
    return false;
}