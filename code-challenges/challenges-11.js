'use strict';

// Important Note:
// Kindly use map loop instead of for in all of your solutions

// Resource:
// Map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// 1) ---------------------
// 
// Given an array of values use map to calculate the square of the values.
//  
// EX:
// [ 2, 8, 3, 5 ] ==> [ 4, 64, 9, 25 ]
// 
// -------------

function square(arr) {
        const squareArr  = arr.map(myFunction); 
        function myFunction(num) {
         return num* num;
       }
       return squareArr
     }

// 2) ------------------
//
// Ex:
// [
//     {
//         firstName: 'Adam',
//         lastName: 'Anderson',
//     },
//     {
//         firstName: 'Ben',
//         lastName: 'Zeller',
//     }, 
//     {
//         firstName: 'Peter',
//         lastName: 'Mccord',
//     },
//     {
//         firstName: 'Fred',
//         lastName: 'Sagar',
//     },
//     {
//         firstName: 'Nathan',
//         lastName: 'Weiss',
//     }
// ]
//
//
// Output ==>['Adam Anderson', 'Ben Zeller', 'Peter Mccord', 'Fred Sagar', 'Nathan Weiss']
// 
//
// Given an array of objects of student's first and last name, use the map to return an array off student's full names.
//
// note: the full names should be combined between student's first and last names.
//

function fullName(arr) {
    let result = []
    arr.map(item =>{
	    result.push(item.firstName + " " + item.lastName)
    })
    return result
}

// 3) ---------------------
// 
// Given an array of objects use map to calculate the average of the grades 
// and return an array of the objects with a new property called avg (that represent the average of the grades).
//  

// EX:

// var students = [

// 	{
// 			firstName: 'Adam',
//      lastName: 'Anderson',
// 			gradsList: [20, 50, 13, 11, 2, 45, 60, 29]
// },
// {
// 			firstName: 'Ben',
//      lastNAme: 'Zeller',
// 			gradsList: [20, 10, 11, 11, 2, 5, 3, 2]
// },
// {
// 			firstName: 'Peter',
//      lastName: 'Mccord',
// 	    gradsList: [62, 50, 80, 90, 39, 45, 60, 50]
// },
// {
// 			firstName: 'Fred',
//      lastNAme: 'Sagar',
// 			gradsList: [20, 10, 18, 11, 2, 20, 3, 10]
// }
// ]
// results =>
//[
// 	{
// 			firstName: 'Adam',
//      lastName: 'Anderson',
// 			gradsList: [20,50,13,11,2,45,60,29],
// 			avg: 28.75
// },
// {
// 			firstName: 'Ben',
//      lastNAme: 'Zeller',
// 			gradsList: [20,10,11,11,2,5,3,2],
//			avg: 8
// },
// {
// 			firstName: 'Peter',
//      lastName: 'Mccord',
// 	    gradsList: [62,50,80,90,39,45,60,50],
//			avg: 59.5
// },
// {
// 			firstName: 'Fred',
//      lastNAme: 'Sagar',
// 			gradsList: [20,10,18,11,2,20,3,10],
//      avg: 11.75
// 	}
//]
// -------------

function gradesAvg(arr) {
    arr.map(item =>{
        item.gradsList.map (element =>{
            let sum = 0
          for (let i =0 ; i <(item.gradsList.length); i++){
              sum = sum + item.gradsList[i]
              item.avg = sum /(item.gradsList.length)
          }
        })
    })
    return arr
}


// 4) ---------------------
//
// Using the previous function result, determine if the student pass or failed,
// and return the array of the object with a new property called result (with Passed or Failed)//  
//
//	note : if his/her avg equal or above 50 the result will be Passed, and Failed if it's less than that
// EX:
// var students = [
// 	{
// 			firstName: 'Adam',
//      lastName: 'Anderson',
// 			gradsList: [20,50,13,11,2,45,60,29],
// 			avg: 28.75
// },
// {
// 			firstName: 'Ben',
//      lastNAme: 'Zeller',
// 			gradsList: [20,10,11,11,2,5,3,2],
// 			avg: 8
// },
// {
// 			firstName: 'Peter',
//      lastName: 'Mccord',
// 	    gradsList: [62,50,80,90,39,45,60,50],
// 			avg: 59.5
// },
// {
// 			firstName: 'Fred',
//      lastNAme: 'Sagar',
// 			gradsList: [20,10,18,11,2,20,3,10],
//      avg: 11.75
// 	}
// ]
// results =>
//[
// 	{
// 			firstName: 'Adam',
//      lastName: 'Anderson',
// 			gradsList: [20,50,13,11,2,45,60,29],
// 			avg: 28.75,
//      result: 'Failed'
// },
// {
// 			firstName: 'Ben',
//      lastNAme: 'Zeller',
// 			gradsList: [20,10,11,11,2,5,3,2],
//			avg: 8,
//      result: 'Failed'
// },
// {
// 			firstName: 'Peter',
//      lastName: 'Mccord',
// 	    gradsList: [62,50,80,90,39,45,60,50],
//			avg: 59.5,
//      result: 'Passed'
// },
// {
// 			firstName: 'Fred',
//      lastNAme: 'Sagar',
// 			gradsList: [20,10,18,11,2,20,3,10],
//      avg: 11.75,
//      result: 'Failed'
// 	}
//]
// -------------


function studentsResult(arr) {

    arr.map(item => {
        let sum = 0
         item.gradsList.forEach(sumation);
         function sumation (element){
             sum += element
            item.avg =sum / item.gradsList.length
    }
    })
    arr.map (item =>{
        if(item.avg >= 50){
            item.result = 'Passed'
        } else { 
            item.result = 'Failed'
        }
    })

    return arr
 }


module.exports = { square, fullName, gradesAvg, studentsResult };