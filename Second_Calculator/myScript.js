// Первая панель
function pressRad () {
  valueRad = document.getElementById("_rad").value;
  valueSR = document.getElementById("show_result").value;
  
  
}

function pressDeg () {
  valueDeg = document.getElementById("_deg").value;
  valueSR = document.getElementById("show_result").value;
  alert (valueDeg);
}

function pressFact () {
  valueFact = document.getElementById("fact").value;
  valueSR = document.getElementById("show_result").value;
  alert (valueFact);
}

function pressBrl () {
  valueBrl = document.getElementById("br_lft").value;
  valueSR = document.getElementById("show_result").value;
  alert (valueBrl);
}

function pressBrr () {
  valueBrr = document.getElementById("br_rght").value;
  valueSR = document.getElementById("show_result").value;
  alert (valueBrr);
}

function pressPrc () {
  valuePrc = document.getElementById("prcnt").value;
  valueSR = document.getElementById("show_result").value;
  alert (valuePrc);
}

function pressClean () {
  document.getElementById("show_result").value = "0";
}

// Вторая панель

function pressInv () {
  valueInv = document.getElementById("inv").value;
  valueSR = document.getElementById("show_result").value;
  alert (valueInv);
}

function pressSin () {  
  number = parseInt(document.getElementById("show_result").value);
  sin = document.getElementById("show_result").value = Math.sin(number);
  sin = String(sin);
}

function pressLn () {
  valueLn = document.getElementById("ln").value;
  valueSR = document.getElementById("show_result").value;
  alert (valueLn);
}

function pressSeven () {
  valueSeven = document.getElementById("_seven").value;
  valueSR = document.getElementById("show_result").value;
  
  if (valueSR === "0") {document.getElementById("show_result").value = "";}
  valueLenght = valueSR.lenght;
  
  document.getElementById("show_result").value += valueSeven;
    count = document.getElementById("show_result").value;
    count = count.lenght
}

function pressEight () {
  valueEight = document.getElementById("_eight").value;
  valueSR = document.getElementById("show_result").value;
  
  if (valueSR === "0") {document.getElementById("show_result").value = "";}
  valueLenght = valueSR.lenght;
  
  document.getElementById("show_result").value += valueEight;
    count = document.getElementById("show_result").value;
    count = count.lenght
}

function pressNine () {
  valueNine = document.getElementById("_nine").value;
  valueSR = document.getElementById("show_result").value;
  
  if (valueSR === "0") {document.getElementById("show_result").value = "";}
  valueLenght = valueSR.lenght;
  
  document.getElementById("show_result").value += valueNine;
    count = document.getElementById("show_result").value;
    count = count.lenght;
  
}

function pressDiv () {
  number = document.getElementById("show_result").value;
  document.getElementById("temp").value = number + "/";
  valueTemp = document.getElementById("show_result").value =  "/";
}

// Третья панель

function pressPi () {
  valuePi = document.getElementById("numpi").value;
  valueSR = document.getElementById("show_result").value;
  alert (valuePi);
}

function pressCos () {
  number = parseInt(document.getElementById("show_result").value);
  cos = document.getElementById("show_result").value = Math.cos(number);
  cos = String(cos);
  document.getElementById("temp").value = cos;
  
  //document.getElementById("temp").value = number + 'cos';
  //valueTemp = document.getElementById("show_result").value =  cos;
  //cos = String(cos);
}

function pressLog () {
  valueLog = document.getElementById("log").value;
  valueSR = document.getElementById("show_result").value;
  alert (valueLog);
}

function pressFour () {
  valueFour = document.getElementById("_four").value;
  valueSR = document.getElementById("show_result").value;
  
  if (valueSR === "0") {document.getElementById("show_result").value = "";}
  valueLenght = valueSR.lenght;
  
  document.getElementById("show_result").value += valueFour;
    count = document.getElementById("show_result").value;
    count = count.lenght
}

function pressFive () {
  valueFive = document.getElementById("_five").value;
  valueSR = document.getElementById("show_result").value;
  
  if (valueSR === "0") {document.getElementById("show_result").value = "";}
  valueLenght = valueSR.lenght;
  
  document.getElementById("show_result").value += valueFive;
    count = document.getElementById("show_result").value;
    count = count.lenght
}

function pressSix () {
  valueSix = document.getElementById("_six").value;
  valueSR = document.getElementById("show_result").value;
  
  if (valueSR === "0") {document.getElementById("show_result").value = "";}
  valueLenght = valueSR.lenght;
  
  document.getElementById("show_result").value += valueSix;
    count = document.getElementById("show_result").value;
    count = count.lenght
}

function pressMulti () {
  number = document.getElementById("show_result").value;
  document.getElementById("temp").value = number + "*";
  valueTemp = document.getElementById("show_result").value =  "*";
}

// Четвертая панель

function pressE () {
  valueE = document.getElementById("consta").value;
  valueSR = document.getElementById("show_result").value;
  alert (valueE);
}

function pressTan () {
  number = parseInt(document.getElementById("show_result").value);
  tan = document.getElementById("show_result").value = Math.tan(number);
  tan = String(tan);
}

function pressSqrt () {
  number = parseInt(document.getElementById("show_result").value);
  sqrt = document.getElementById("show_result").value = Math.sqrt(number);
  sqrt = String(sqrt);
  
}

function pressOne () {
  valueOne = document.getElementById("_one").value;
  valueSR = document.getElementById("show_result").value;
  
  if (valueSR === "0") {document.getElementById("show_result").value = "";}
  valueLenght = valueSR.lenght;
  
  document.getElementById("show_result").value += valueOne;
  count = document.getElementById("show_result").value;
  count = count.lenght;
  
}

function pressTwo () {
  valueTwo = document.getElementById("_two").value;
  valueSR = document.getElementById("show_result").value;
  
  if (valueSR === "0") {document.getElementById("show_result").value = "";}
  valueLenght = valueSR.lenght;
  
  document.getElementById("show_result").value += valueTwo;
    count = document.getElementById("show_result").value;
    count = count.lenght
}

function pressThree () {
  valueThree = document.getElementById("_three").value;
  valueSR = document.getElementById("show_result").value;
  
  if (valueSR === "0") {document.getElementById("show_result").value = "";}
  valueLenght = valueSR.lenght;
  
  document.getElementById("show_result").value += valueThree;
    count = document.getElementById("show_result").value;
    count = count.lenght
}

function pressSub () {
  number = document.getElementById("show_result").value;
  document.getElementById("temp").value = number + "-";
  valueTemp = document.getElementById("show_result").value =  "-";
}

// Пятая панель

function pressAns () {
  valueAns = document.getElementById("ans").value;
  valueSR = document.getElementById("show_result").value;
  alert (valueAns);
}

function pressExp () {
  valueExp = document.getElementById("exp").value;
  valueSR = document.getElementById("show_result").value;
  alert (valueExp);
}

function pressDegree () {
  valueDegree = document.getElementById("degree").value;
  valueSR = document.getElementById("show_result").value;
  alert (valueDegree);
}

function pressZero () {
  valueZero = document.getElementById("_zero").value;
  valueSR = document.getElementById("show_result").value;
  
  if (valueSR === "0") {document.getElementById("show_result").value = "";}
  valueLenght = valueSR.lenght;
  
  document.getElementById("show_result").value += valueZero;
    count = document.getElementById("show_result").value;
    count = count.lenght
}

function pressDot () {
  valueSR = document.getElementById("show_result").value;

    if (valueSR.length < 1) {
      valueSR = "0.";
    }
    else {
      valueSR += ".";
    
    }
    
  }	

function pressResult () {
  
    numberOne = parseInt(document.getElementById("temp").value); 

    numberSec = document.getElementById("show_result").value;     

    numberSec = parseInt(numberSec.slice(1)); 

    if(valueTemp === "+"){total = numberOne + numberSec;}

    if(valueTemp === "-"){total = numberOne - numberSec;}

    if(valueTemp === "*"){total = numberOne * numberSec;}

    if(valueTemp === "/"){total = numberOne / numberSec;}
       

    document.getElementById("show_result").value = total; 

    document.getElementById("temp").value = "";

    total = String(total);
  
}

function pressAdd () {
  number = document.getElementById("show_result").value;
  document.getElementById("temp").value = number + '+';
  valueTemp = document.getElementById("show_result").value =  "+";
}






























