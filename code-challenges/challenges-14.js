'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
    let slice ;
    let index = str.lastIndexOf(" ")
    if (index == -1){
        slice = str
    } else{ 
     slice = str.slice(index +1 )
    }
return slice
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    let split = str.split(" ");
    let lastWord= split[split.length - 1];
    return lastWord
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
    let strArray =str.split(" ")
if (strArray.indexOf("I") !== -1){
	 strArray.splice(strArray.indexOf("I"), 1 , "We")
} 
if (strArray.indexOf ("am") !== -1){
	strArray.splice(strArray.indexOf ("am"), 1 , "are")
} 
if (strArray.indexOf("was")!== -1) {
	strArray.splice(strArray.indexOf("was"), 1 , "were")
}
str = strArray.join(" ")
//    str = str.replace("I", "We")
//    str = str.replace("am" , "are")
//    str = str.replace("was" , "were" )
   return str
}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
   return arr.map((item, index , arr) =>{
    if ((index + 1) %5 === 0){
        return `${item},`
    } else {
        return item;
    }
   }).join(" ")

}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
    str.split(" ").forEach(word =>{
        let counter = 1;
        let char = word[0];
        for(let i=0; i <word.length -1 ; i++){
            if (word [i] === word [i+1])
            counter++;
         else 
            break;
        }
    })
    return  ; 
}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };