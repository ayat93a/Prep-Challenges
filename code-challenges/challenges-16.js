'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    let reverse=''
    for (let i =string.length-1 ; i>= 0; i--){
        //console.log(i)
        reverse= reverse +string[i];
    }
    return reverse
}

// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
        let mofifiedArr =[];
    arr.map (item =>{
        if(item.indexOf('^_^') !== -1 ){
        mofifiedArr.push(item) 
        }	
    })
    return mofifiedArr
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    let evenStrings=''
    for (let i = 0 ; i< str.length-1 ; i++){
        (i% 2 === 0)? evenStrings = evenStrings + str[i] : evenStrings =evenStrings;
    }	
    return evenStrings;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    let chickenMenu = [];
arr.map(item => {
	item.map(i =>{
		if (i.indexOf('chicken') !== -1){
			chickenMenu.push(Array(i))
		}
	})
	})
	return chickenMenu
}
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
