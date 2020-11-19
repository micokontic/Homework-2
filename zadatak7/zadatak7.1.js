// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
return num+2;
}

// To check if you've completed it, uncomment these console.logs!
 //console.log(addTwo(3));
 //console.log(addTwo(10));


// Challenge 2
function addS(word) {
return word+'S'
}

// uncomment these to check your work
//console.log(addS('pizza'));
//console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
    let arr1=[];
for (i=0;i<array.length;i++){
arr1[i]=callback(array[i]);
}
return arr1;
}

//console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
for(i=0;i<array.length;i++){
    array[i]=callback(array[i]);
}
}
//array=[1,2,3];
//forEach(array, addTwo);
//console.log(array);

// see for yourself if your forEach works!


// Challenge 5
function mapWith(array, callback) {
forEach(array,callback);
}

//array=[1,2,3];
//mapWith(array, addTwo);
//console.log(array);

// Challenge 6
function reduce(array, callback, initialValue) {
    array.map((item)=>{
        initialValue=callback(initialValue,item);
        return initialValue
    });
    return initialValue;
}

//array=[1,2,3];
//console.log(reduce(array,addTwo,0));

// Challenge 7
function intersection(...arrays) {

var inputArr = Array.from(arrays);
return inputArr.reduce((result,arr)=>{
     result=result.filter((resItem)=>{
          if(arr.includes(resItem)){
            return resItem
          }
     })
     return result;
},inputArr[0])}


//console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]


// Challenge 8
function union(...arrays) {
  var inputArr=Array.from(arrays);
  const solution = inputArr.reduce((result,arr)=>{
      arr.map((elem)=>{
        if(!result.includes(elem)){
          result.push(elem);
        }
      }
      )
      return result;
    },[])
      return solution;
}

//console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]


// Challenge 9
function objOfMatches(array1, array2, callback) {
    var result={};
    array1.map((elem1,i)=>{
      if(callback(elem1)===array2[i]){
        result[elem1]=array2[i];
      }
    })
    return result;
}

 //console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  var result={};
  arrVals.map((elem,i)=>{
    result[elem]=[];
    arrCallbacks.map((callback)=>{
      result[elem].push(callback(elem));
    })
  })
  return result;
}

//console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
function objectFilter(obj, callback) {
  var keyArr=Object.keys(obj);
  var result={};
  keyArr.map((key)=>{
    if(callback(key)===obj[key]){
      result[key]=obj[key];
    }
  })
  return result
}

 const cities = {
 London: 'LONDON',
 LA: 'Los Angeles',
 Paris: 'PARIS',
 };
 //console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}


// Challenge 12
function majority(array, callback) {
var num=0;
  array.map((elem)=>{
    if(callback(elem)){
      num++;
    }
  })
  if(array.length/2<num){
    return true;
  }else{
    return false;
  }
}

// /*** Uncomment these to check your work! ***/
 //const isOdd = function(num) { return num % 2 === 1; };
 //console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
 //console.log(majority([2, 3, 4, 5], isOdd)); // should log: false


// Challenge 13
function prioritize(array, callback) {
  var result=[];
  var end=[]
  array.map((elem)=>{
      if(callback(elem)){
        result.push(elem);
      }else{
        end.push(elem);
      }
  })
  return result.concat(end);
}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']


// Challenge 14
function countBy(array, callback) {
  var obj={};
  array.map((elem)=>{
      if(obj[callback(elem)]===undefined){
        obj[callback(elem)]=1;
      }else{
        obj[callback(elem)]++;
      }
  })
  return obj;
}

// /*** Uncomment these to check your work! ***/
 //console.log(countBy([1, 2, 3, 4, 5], function(num) {
 //if (num % 2 === 0) return 'even';
 //else return 'odd';
 //})); // should log: { odd: 3, even: 2 }


// Challenge 15
function groupBy(array, callback) {
var object={};
array.map((elem)=>{
  if(object[callback(elem)]===undefined){
    object[callback(elem)]=[elem];
  }else{
    object[callback(elem)].push(elem);
  }
})
return object;
}

// /*** Uncomment these to check your work! ***/
 const decimals = [1.3, 2.1, 2.4];
 //const floored = function(num) { return Math.floor(num); };
 //console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


// Challenge 16
function goodKeys(obj, callback) {
var keyArr=Object.keys(obj);
var result=[];
keyArr.map((key)=>{
  if(callback(obj[key])){
      result.push(key);
  }
})
return result;
}   

// /*** Uncomment these to check your work! ***/
 const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
 //const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
 //console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']


// Challenge 17
function commutative(func1, func2, value) {
return (func1(func2(value))===func2(func1(value)))
}

// /*** Uncomment these to check your work! ***/
 const multBy3 = n => n * 3;
 const divBy4 = n => n / 4;
 const subtract5 = n => n - 5;
 //console.log(commutative(multBy3, divBy4, 11)); // should log: true
 //console.log(commutative(multBy3, subtract5, 10)); // should log: false
 //console.log(commutative(divBy4, subtract5, 48)); // should log: false


// Challenge 18
function objFilter(obj, callback) {
var result={};
var keyArr=Object.keys(obj);
keyArr.map((key)=>{

if(callback(key)===obj[key]){
  result[key]=obj[key];
}
})
return result;
}

// /*** Uncomment these to check your work! ***/
 const startingObj = {};
 //startingObj[6] = 3;
 //startingObj[2] = 1;
 //startingObj[12] = 4;
 //const half = n => n / 2;
 //console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }


// Challenge 19
function rating(arrOfFuncs, value) {
  var num=0;
arrOfFuncs.map((func)=>{
  if(func(value)===true){
    num++
  }
})
return num/arrOfFuncs.length*100;
}

// /*** Uncomment these to check your work! ***/
 const isEven = n => n % 2 === 0;
 const greaterThanFour = n => n > 4;
 const isSquare = n => Math.sqrt(n) % 1 === 0;
 const hasSix = n => n.toString().includes('6');
 const checks = [isEven, greaterThanFour, isSquare, hasSix];
 //console.log(rating(checks, 64)); // should log: 100
 //console.log(rating(checks, 66)); // should log: 75


// Challenge 20
function pipe(arrOfFuncs, value) {
    return arrOfFuncs.reduce((acc,func)=>{
        return func(acc)
    },value)
}

// /*** Uncomment these to check your work! ***/
 //const capitalize = str => str.toUpperCase();
 //const addLowerCase = str => str + str.toLowerCase();
 //const repeat = str => str + str;
 //const capAddlowRepeat = [capitalize, addLowerCase, repeat];
 //console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'


// Challenge 21
function highestFunc(objOfFuncs, subject) {
  var valueArr=[];
  var functionArr=[];
Object.entries(objOfFuncs).forEach(([key, value]) =>{
    valueArr.push(value(subject));
    functionArr.push(key);
})
let i = valueArr.indexOf(Math.max(...valueArr));
return functionArr[i];
}

// /*** Uncomment these to check your work! ***/
 const groupOfFuncs = {};
 //groupOfFuncs.double = n => n * 2;
 //groupOfFuncs.addTen = n => n + 10;
 //groupOfFuncs.inverse = n => n * -1;
 //console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
 //console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
 //console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'


// Challenge 22
function combineOperations(startVal, arrOfFuncs) {
return arrOfFuncs.reduce((acc,func)=>{
    return(func(acc));
},startVal)
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

function multiplyFive(num) {
  return num * 5;
}

function addTen(num) {
  return num+10;
}

 /*** Uncomment these to check your work! ***/
 //console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
 //console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10


// Challenge 23
function myFunc(array, callback) {
  var indicator=true
  var index=0;
array.forEach((elem,i)=>{
  if(callback(elem)===true && indicator){
    index=i;
    indicator=false;
  }
})
if(indicator===false){
  return index;
}else{
  return -1;
}
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return (num % 2 !== 0);
}

// /*** Uncomment these to check your work! ***/
 //console.log(myFunc(numbers, isOdd)); // Output should be 1
 //console.log(myFunc(evens, isOdd)); // Output should be -1


// Challenge 24
function myForEach(array, callback) {
    for(i=0;i<array.length;i++){
      callback(array[i])
    }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
 const nums = [1, 2, 3];
 //myForEach(nums, addToSum);
 //console.log(sum); // Should output 6