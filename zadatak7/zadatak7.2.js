// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');

// CHALLENGE 1
function createFunction() {
    const sayHello=()=>{
        console.log('hello');
    }
    return sayHello;
}

// /*** Uncomment these to check your work! ***/
//const function1 = createFunction();
//function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {

    const print=()=>{
        console.log(input);
    }

    return print
}

// /*** Uncomment these to check your work! ***/
//const printSample = createFunctionPrinter('sample');
//printSample(); // => should console.log('sample');
//const printHello = createFunctionPrinter('hello');
//printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();


function addByX(x) {
    var added=x;
    return (y)=>{
        return(y+added);
    }
}

// /*** Uncomment these to check your work! ***/

 const addByTwo = addByX(2);
 //addByTwo(1); // => should return 3
 //addByTwo(2); // => should return 4
 //addByTwo(3); // => should return 5

 //const addByThree = addByX(3);
 //addByThree(1); // => should return 4
 //addByThree(2); // => should return 5

 //const addByFour = addByX(4);
 //addByFour(5); // => should return 9
 //addByFour(4); // => should return 8


// CHALLENGE 4
function once(func) {
    var ind = 0;
    var value;
    return function (x) {
        if (ind === 0) {
            value = func(x);
            ind++;
            return func(x);
        } else {
            return value;
        }
    };
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
 //console.log(onceFunc(4));  // => should log 6
 //console.log(onceFunc(10));  // => should log 6
 //console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
    var countVar = 1;
    return ()=>{
        if(countVar<count){
            countVar++;
        }else{
            countVar
            func();
        }
    }
   
}

// /*** Uncomment these to check your work! ***/
// const called = function() { console.log('hello') };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed


// CHALLENGE 6
function delay(func, wait) {
    setTimeout(() => {
        return func();
    }, wait);
}

//delay(()=>{
//    console.log('lalala')
//},500)

// CHALLENGE 7
function rollCall(names) {
    var index=0;
    return ()=>{
        if(index<names.length){
            console.log(names[index])
            index++;
        }else{
            console.log('Everyone accounted for');
        }
    }
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
 //rollCaller() // => should log 'Victoria'
 //rollCaller() // => should log 'Juan'
 //rollCaller() // => should log 'Ruth'
 //rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(func, magicWord) {
    var storage={};
    return (input)=>{
        if(input===magicWord){
            return storage;
        }else{
            storage[input]=func(input);
            return func(input);
        }
    }
}

 /*** Uncomment these to check your work! ***/
 const multiplyBy2 = function(num) { return num * 2; };
 const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
 //console.log(multBy2AndLog(2)); // => should log 4
 //console.log(multBy2AndLog(9)); // => should log 18
 //console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
var index=0;
    return ()=>{
        if(index<array.length){
            index++;
            return array[index-1];
        }else{
            index=0;
            return array[index];
        }
    }
}

// /*** Uncomment these to check your work! ***/
 const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
 const getDay = cycleIterator(threeDayWeekend);
 //console.log(getDay()); // => should log 'Fri'
 //console.log(getDay()); // => should log 'Sat'
 //console.log(getDay()); // => should log 'Sun'
 //console.log(getDay()); // => should log 'Fri'


// CHALLENGE 10
function defineFirstArg(func, arg) {
    return (arg2)=>func(arg,arg2);
}

// /*** Uncomment these to check your work! ***/
 const subtract = function(big, small) { return big - small; };
 const subFrom20 = defineFirstArg(subtract, 20);
 //console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
function dateStamp(func) {
    return (...args)=>{
        var todayDate= new Date;
            return{
                   date:`${todayDate.getDate()}/${todayDate.getMonth()+1}/${todayDate.getFullYear()}`,
                   output:func(...args)
            }
        }
}

// /*** Uncomment these to check your work! ***/
 const stampedMultBy2 = dateStamp(n => n * 2);
 const stampedMult3Nums=dateStamp((a,b,c)=> a*b*c)
 //console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
 //console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }
 //console.log(stampedMult3Nums(2,2,4));

// CHALLENGE 12
function censor() {
    var stringObjectArr=[];
return (string1, string2)=>{
    if(typeof(string1)==='string' && string2===undefined){
        stringObjectArr.map((obj)=>{
            string1=string1.replace(obj.string1,obj.string2)
        })
        return(string1);
    }else if(typeof(string1)==='string' && typeof(string2)==='string'){
        stringObjectArr.push({string1: string1,string2:string2})
    }
}
}

// /*** Uncomment these to check your work! ***/
 const changeScene = censor();
 //changeScene('dogs', 'cats');
 //changeScene('quick', 'slow');
 //console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
function createSecretHolder(secret) {
var secret=secret;
return ({
    getSecret :()=>{
        return secret;
    },
    setSecret:(arg)=>{
        secret=arg;
    }
})
}
// /*** Uncomment these to check your work! ***/
//obj = createSecretHolder(5)
//obj.getSecret() // => returns 5
//console.log(obj.getSecret())
//obj.setSecret(2)
//obj.getSecret() // => returns 2
//console.log(obj.getSecret())


// CHALLENGE 14
function callTimes() {
var num=0;
return ()=>{
    console.log(++num);
}
}

// /*** Uncomment these to check your work! ***/
 //let myNewFunc1 = callTimes();
 //let myNewFunc2 = callTimes();
 //myNewFunc1(); // => 1
 //myNewFunc1(); // => 2
 //myNewFunc2(); // => 1
 //myNewFunc2(); // => 2


// CHALLENGE 15
function russianRoulette(num) {
var counter=0;
return ()=>{
    if(counter<num-1){
        counter++;
        return 'click';
    }else if(counter===num-1){
        counter++;
        return 'bang';
    }else{
        return 'reload to play again';
    }
}
}

// /*** Uncomment these to check your work! ***/
 const play = russianRoulette(3);
 //console.log(play()); // => should log 'click'
 //console.log(play()); // => should log 'click'
 //console.log(play()); // => should log 'bang'
 //console.log(play()); // => should log 'reload to play again'
 //console.log(play()); // => should log 'reload to play again'


// CHALLENGE 16
function average() {
    var sum=0;
    var num=0;
    var elementsPassed=false;
    return (arg)=>{
        if(!elementsPassed){
            elementsPassed=true;
            return 0;
        }
        else{
            if(arg){
                sum+=arg;
                num++;
                return(sum/num);
            }
            else{
                return sum/num;
            }
        }
      
    }
}

// /*** Uncomment these to check your work! ***/
 const avgSoFar = average();
 //console.log(avgSoFar()); // => should log 0
 //console.log(avgSoFar(4)); // => should log 4
 //console.log(avgSoFar(8)); // => should log 6
 //console.log(avgSoFar()); // => should log 6
 //console.log(avgSoFar(12)); // => should log 8
 //console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  return (func)=>{
        var num = arrOfTests.reduce((num,elem)=>{
            if(func(elem[0])===elem[1]){
                num++;
            }
            return num;
        },0)
        if(num===arrOfTests.length){
            return true;
        }else{
            return false;
        }
  }
}

// /*** Uncomment these to check your work! ***/
 //const capLastTestCases = [];
 //capLastTestCases.push(['hello', 'hellO']);
 //capLastTestCases.push(['goodbye', 'goodbyE']);
 //capLastTestCases.push(['howdy', 'howdY']);
 //const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
 //const capLastAttempt1 = str => str.toUpperCase();
 //const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
 //console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
 //console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


// CHALLENGE 18
function makeHistory(limit) {
    var num=0;
    var strings=[];
    return (string)=>{
        if(string==='undo'){
            if(num==0){
                return 'nothing to undo';
            }
            else{
            var removed=strings[--num];
            strings.splice(num,1);
            return [removed,'undone'].join(' ');}
        }else{
            if(num<limit){
                strings[num++]=string;
                return ([strings[num-1],'done'].join(' '));
            }else{
                if(num>limit-1){
                    strings.splice(0,1);
                    num--;
                    strings[num++]=string;
                    return [strings[num-1],'done'].join(' ');
                }
            }
        }
       
    }

}

// /*** Uncomment these to check your work! ***/
 const myActions = makeHistory(2);
 //console.log(myActions('jump')); // => should log 'jump done'
 //console.log(myActions('undo')); // => should log 'jump undone'
 //console.log(myActions('walk')); // => should log 'walk done'
 //console.log(myActions('code')); // => should log 'code done'
 //console.log(myActions('pose')); // => should log 'pose done'
 //console.log(myActions('undo')); // => should log 'pose undone'
 //console.log(myActions('undo')); // => should log 'code undone'
 //console.log(myActions('undo')); // => should log 'nothing to undo'


// CHALLENGE 19
function blackjack(array) {
var cardsInDeck=0;
return (x,y)=>{
    var handNum=0;
    var playerBusted=false;
    var sum=0;
    return ()=>{
        if(handNum===0){
            handNum++;
            sum=x+y;
            return sum;     
        }else{
            if(array[cardsInDeck]+sum<21){
                sum=array[cardsInDeck]+sum;
                cardsInDeck++;
                handNum++;
                return sum;
            }else if(!playerBusted){
                cardsInDeck++;
                handNum++;
                playerBusted=true;
                return 'bust'
            }else{
                return 'you are done';
            }
        }
        
    }

}

}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
 const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
 const i_like_to_live_dangerously = deal(4, 5);
 //console.log(i_like_to_live_dangerously()); // => should log 9
 //console.log(i_like_to_live_dangerously()); // => should log 11
 //console.log(i_like_to_live_dangerously()); // => should log 17
 //console.log(i_like_to_live_dangerously()); // => should log 18
 //console.log(i_like_to_live_dangerously()); // => should log 'bust'
 //console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
 //console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
 const i_TOO_like_to_live_dangerously = deal(2, 2);
 //console.log(i_TOO_like_to_live_dangerously()); // => should log 4
 //console.log(i_TOO_like_to_live_dangerously()); // => should log 15
 //console.log(i_TOO_like_to_live_dangerously()); // => should log 19
 //console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
 //console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
 //console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
 const i_ALSO_like_to_live_dangerously = deal(3, 7);
 //console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
 //console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
 //console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
 //console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
 //console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
