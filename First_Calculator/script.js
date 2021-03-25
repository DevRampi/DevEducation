function dot () {
	if (calc.input.value.length < 1) {
		calc.input.value = "0.";
	}
	else {
		calc.input.value += ".";
	
	}
	
}	

function getResult(oper)
{ 
 //Проверяем, какая кнопка была нажата
  switch (oper)                      
  {                                   
    case 1:   //Кнопка /
    {
      calc.input.value += '/';
      break;
    }
    case 2:   //Кнопка 7
    {
      calc.input.value += '7';
      break;
    }
    case 3:   //Кнопка 8
    {
      calc.input.value += '8';
      break;
    }
    case 4:   //Кнопка 9
    {
      calc.input.value += '9';
      break;
    }
	case 5:   //Кнопка *
    {
      calc.input.value += '*';
      break;
    }
	case 6:   //Кнопка 4
    {
      calc.input.value += '4';
      break;
    }
	case 7:   //Кнопка 5
    {
      calc.input.value += '5';
      break;
    }
	case 8:   //Кнопка 6
    {
      calc.input.value += '6';
      break;
    }
	case 9:   //Кнопка -
    {
      calc.input.value += '-';
      break;
    }
	case 10:   //Кнопка 1
    {
      calc.input.value += '1';
      break;
    }
	case 11:   //Кнопка 2
    {
      calc.input.value += '2';
      break;
    }
	case 12:   //Кнопка 3
    {
      calc.input.value += '3';
      break;
    }
	case 13:   //Кнопка +
    {
      calc.input.value += '+';
      break;
    }
	case 14:   //Кнопка +/-
    {
      calc.input.value *= '-1';
      break;
    }
	case 15:   //Кнопка 0
    {
      calc.input.value += '0';
      break;
    }
	case 16:   //Кнопка ,
    {
      dot();
      break;
    }
	case 17:   //Кнопка =
    {
      calc.input.value = eval(calc.input.value);
      break;
    }
	case 18:   //Кнопка C
	{
		calc.input.value = '';
      break;
    }
	case 19:   //Кнопка Back
	 {
      calc.input.value = calc.input.value.slice(0, -1);
      break;
    }
    
	case 20:   //Кнопка SQRT
    {
       calc.input.value = Math.sqrt(calc.input.value);
      break;
    }
	
  }
}