/* CHALLENGE 1 */

function sayHowdy() {
    console.log('Howdy');
  }
  
  function testMe() {
    setTimeout(sayHowdy, 0);
    console.log('Partnah');
  }
  // After thinking it through, uncomment the following line to check your guess!
  //testMe(); // what order should these log out? Howdy or Partnah first?
  
  
  /* CHALLENGE 2 */
  
  function delayedGreet() {
    setTimeout(()=>{console.log('welcome')},3000)
  }
  // Uncomment the following line to check your work!
  //delayedGreet(); // should log (after 3 seconds): welcome
  
  
  /* CHALLENGE 3 */
  
  function helloGoodbye() {
    console.log('hello')
    setTimeout(()=>{console.log('good bye')},3000)
}
  // Uncomment the following line to check your work!
  //helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye
  
  
  /* CHALLENGE 4 */
  
  function brokenRecord() {
    setInterval(() => {
        console.log('hi again');
    }, 1000);
  }
  // Uncomment the following line to check your work!
  //brokenRecord(); // should log (every second): hi again
  
  
  /* CHALLENGE 5 */
  
  function limitedRepeat() {
    var interval = setInterval(() => {
            console.log('hi for now');
    }, 1000);
    setInterval(() => {
        clearInterval(interval)
      }, 5001);
  }
 
  // Uncomment the following line to check your work!
  //limitedRepeat(); // should log (every second, for 5 seconds): hi for now
  
  
  /* CHALLENGE 6 */
  
  function everyXsecsForYsecs(func,arg1,arg2) {
    // ADD CODE HERE
    const interval= setInterval(() => {
        func();
    }, arg1*1000);
    setTimeout(() => {
        clearInterval(interval);
    }, arg2*1000);
  }
  // Uncomment the following lines to check your work!
   function theEnd() {
     console.log('This is the end!');
   }
   //everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
  
  
  /* CHALLENGE 7 */
  
  function delayCounter(target, wait) {
      return ()=>{
        var num=0;
        const interval=setInterval(() => {
            if(num===target){
                clearInterval(interval);
            }else{
                console.log(num+1);
                num++;
            }
        }, wait);
      }
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
     const countLogger = delayCounter(3, 1000)
    //countLogger();
  // After 1 second, log 1
  // After 2 seconds, log 2
  // After 3 seconds, log 3
  
  /* CHALLENGE 8 */
  
  function promised (val) {
  let promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(val)
    }, 2000);
  })
  return promise;
}
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
   const createPromise = promised('wait for it...');
   //createPromise.then((val) => console.log(val)); 
  // will log "wait for it..." to the console after 2 seconds
  
  /* CHALLENGE 9 */
  
  class SecondClock {
    constructor(cb) {
      // NISMO RADILI KLASE!
    }
    // ADD METHODS HERE
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // const clock = new SecondClock((val) => { console.log(val) });
  // console.log("Started Clock.");
  // clock.start();
  // setTimeout(() => {
  //     clock.reset();
  //     console.log("Stopped Clock after 6 seconds.");
  // }, 6000);
  
  /* CHALLENGE 10 */
  
  const debounce = (func, wait) => {
    let timeout;
    let firstTime=true;
    let canCallback=false;
    return ()=>{
      function setInt(){
        timeout=setTimeout(()=>{
          canCallback=true;
        },wait)
      }
      if(firstTime){
        firstTime=false;
        setInt();
        return func();
      }
      else{
        if(canCallback){
          canCallback=false;
          return func();
        }else{
          clearInterval(timeout);
          setInt();
        }
      }
    }
  };
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
   function giveHi() { return 'hi' }
   const giveHiSometimes = debounce(giveHi, 3000);
   console.log(giveHiSometimes()); // -> 'hi'
   setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
   setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
   setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'
  
  