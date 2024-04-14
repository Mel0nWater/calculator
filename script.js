//CalcProgram

const display = document.getElementById("display");

function Append(input){
    display.value += input;
}

function Clear(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch(err){
        alert("Error");
    }
}