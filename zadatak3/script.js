var inputField = document.getElementById('input-field');
var boxes = document.getElementById('boxes');
var addBox = document.getElementById('add-box');
var regex = RegExp('([A-Z])|([a-z])|( )');

inputField.addEventListener('keyup',getInputValue);
addBox.addEventListener('click',addNewElement);
boxes.addEventListener('keyup',function(e){
    if(e.target && e.target.parentNode.matches('div.box')){
        letterInput(e);
    }
})

function getInputValue(e){
    console.log('pozvao sam je')
    var num=e.target.value;
    if(e.which==13){
        boxes.style.display='flex';
        document.getElementById("input-container").style.display="none";
        for(i=0;i<num;i++){
            addNewEmptyElement();
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
}

function letterInput(e){
    var letter=e.target.value;
    if(letterCheck(letter)){
        e.target.parentNode.classList.remove('error');
    }else{
        e.target.parentNode.classList.add('error');
    }
    if(e.target.value==''){
        e.target.parentNode.classList.remove('error');
    }
}

function letterCheck(letter){
    if(regex.test(letter)){
        return true;
    }else{
        return false;
    }
}