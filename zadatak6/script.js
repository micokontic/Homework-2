var calc=document.getElementById('calc-container');
var display=document.getElementById('display');
var displayString='';
var ans='';

calc.addEventListener('click',clickHandler);
document.addEventListener('keyup',keyHandler);
document.addEventListener('mousedown', function(e){ e.preventDefault(); }, false);

function clickHandler(e){
    if(e.target.classList.contains('btn') && 
    !(e.target.classList.contains('eql')) &&
      !(e.target.classList.contains('del')) &&
      !(e.target.classList.contains('ans'))
      ){
        displayString=displayString+e.target.innerHTML;
        updateDisplay();
    }
    if(e.target.classList.contains('eql')){
        calculateValue();
    }
    if(e.target.classList.contains('del')){
        removeChar();
    }
    if(e.target.classList.contains('del1')){
        removeAllChar();
    }
    if(e.target.classList.contains('ans')){
        addAns();
    }
}

function keyHandler(e){
    if((e.which>47 && e.which<58) || (e.which>95 && e.which<106) || e.key==='*'|| e.key==='-'|| e.key==='/'|| e.key==='+'|| e.key==='.'){
        displayString=displayString+e.key;
        updateDisplay();
    }
    if(e.which===8){
        removeChar();
    }
    if (e.which===46){
        removeAllChar();
    }
    if(e.which===13){
        calculateValue();
    }
    if(e.key===','){
        displayString=displayString+'.';
        updateDisplay();
    }
    
}

function updateDisplay(){
    display.innerHTML=displayString;
}

function calculateValue(){
    try{
        var result=eval(displayString);
        displayString=roundToTwo(result).toString();
        ans=displayString;
        updateDisplay();
    }catch(error){
        displayString='ERROR';
        updateDisplay();
    }
    
}

function removeChar(){
    if(displayString.includes('ERROR')){
        displayString='';
    }else{
        displayString=str = displayString.substring(0, displayString.length - 1);
    }
    updateDisplay();
}

function removeAllChar(){
    displayString='';
    ans='';
    updateDisplay();
}

function addAns(){
    displayString=displayString+ans;
    updateDisplay();
}

function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}