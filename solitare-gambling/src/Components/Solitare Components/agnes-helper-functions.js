
import { suite1, suite2, suite3, suite4 } from '../../Helper Functions/card-helper-functions.component';

export function CheckAgnesRulesForTransferingToPiles(cardToCheck, newPile){
    if(newPile.length === 1){
        return false;
    }
    
    const cardToCheckAgainst = newPile[newPile.length -1];
    const suite = cardToCheck.suite;
    const otherSuite = cardToCheckAgainst.suite;
    if(checkSuiteColor(suite, otherSuite)){
        const value = cardToCheck.value;
        const otherValue = cardToCheckAgainst.value;
        return checkValueIsHigher(value, otherValue);
    }
    return false
}


export function CheckAgnesRulesForTransferingToPilesSingle(cardToCheck, cardToCheckAgainst){
    const suite = cardToCheck.suite;
    const otherSuite = cardToCheckAgainst.suite;
    if(checkSuiteColor(suite, otherSuite)){
        const value = cardToCheck.value;
        const otherValue = cardToCheckAgainst.value;
        return checkValueIsHigher(value, otherValue);
    }
    return false
}


export function CheckAgnesRulesForTransferingToFoundation(cardToCheck, newFoundation, defaultValue){
    if(newFoundation.length === 1){
        return checkValueIsSame(cardToCheck.value, defaultValue);
    }
    const cardToCheckAgainst = newFoundation[newFoundation.length-1];
    const suite = cardToCheck.suite; 
    const otherSuite = cardToCheckAgainst.suite;
    const value = cardToCheck.value;
    const otherValue = cardToCheckAgainst.value;
    if(suite === otherSuite){
        if(otherValue === '13'){
            return value === '1'
        }
        return checkValueIsHigher(otherValue, value)
    }
    return false;
}

function checkSuiteColor(suite, otherSuite){
    if(suite === suite1 || suite === suite3){
        return (otherSuite === suite1 || otherSuite === suite3)
    }
    if(suite === suite2 || suite === suite4){
        return (otherSuite === suite2 || otherSuite === suite4)
    }
}

function checkValueIsHigher(value, otherValue){
    const otherNum =Number.parseInt(otherValue)
    const num = Number.parseInt(value);

    if(num + 1 === otherNum){
        return true;
    }
    return false;
}

function checkValueIsSame(value, otherValue){
    const otherNum = Number.parseInt(otherValue)
    const num = Number.parseInt(value)
    if(num === otherNum){
        return true;
    }
    return false;
}