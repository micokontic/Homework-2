var inputField = document.getElementById('input-field');
var boxes = document.getElementById('boxes');
var addBox = document.getElementById('add-box');
var regex = RegExp('([A-Z])|([a-z])|( )');
var charArray=[];
var num=0;
var letterArray=[];
var letterIndicator=[];

inputField.addEventListener('keyup',getInputValue);
addBox.addEventListener('click',addNewElement);

boxes.addEventListener('keyup',function(e){
    if(e.target && e.target.parentNode.matches('div.box')){
        letterInput(e);
    }
})

function getInputValue(e){
    console.log('pozvao sam je')
    num=e.target.value;
    if(e.which==13){
        boxes.style.display='flex';
        document.getElementById("input-container").style.display="none";
        for(i=0;i<num;i++){
            addNewEmptyElement();
            letterIndicator[i]=0;
            letterArray[i]='';
        }
    }
}

function addNewEmptyElement(){
    let box=document.createElement('div')
    box.classList="box box-cursor";
    let inputElement=document.createElement('input');
    inputElement.maxLength='1';
    inputElement.classList="box-cursor";
    box.appendChild(inputElement);
    addBox.parentNode.insertBefore(box, addBox);
}

function addNewElement(){
    addNewEmptyElement();
    num++;
}

function letterInput(e){
    var letter=e.target.value;
    var childIndex = whichChild(e.target.parentNode)-1;

    if(letterCheck(letter)){
        e.target.parentNode.classList.remove('error');
        letterArray[childIndex]=(e.target.value).toLowerCase();
        letterIndicator[childIndex]=1;
            if(letterIndicator.reduce((a, b) => a + b, 0)==num){
                console.log('sva slova su ok')
            }
        
    }else{
        e.target.parentNode.classList.add('error');
        letterIndicator[childIndex]=0;
        letterArray[childIndex]='';

    }
    if(e.target.value==''){
        e.target.parentNode.classList.remove('error');
    }
    console.log(letterArray);
    console.log(letterIndicator);
}

function letterCheck(letter){
    if(regex.test(letter)){
        return true;
    }else{
        return false;
    }
}

function whichChild(elem){
    var  i= 0;
    while((elem=elem.previousSibling)!=null) ++i;
    return i;
}