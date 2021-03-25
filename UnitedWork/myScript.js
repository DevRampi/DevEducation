// УО

// 1УО.Если а – четное посчитать а*б, иначе а+б

function calcEven(a,b) {
	if(!Number.isFinite(a) || !Number.isFinite(b)) return "Данные введены некорректно";
	if (a%2==0) {
		return a*b;
	}
	else {
		return a+b;
	}	
	
}
// let a = Number(prompt('Введите число', ''));
// let b = Number(prompt('Введите число', ''));
// let a = 4;
// let b = 3;
// alert(calcEven(a,b));

// 2УО.Определить какой четверти принадлежит точка с координатами (х,у)

function checkPoint(x,y) {
	if(!Number.isFinite(x) || !Number.isFinite(y)) return "Данные введены некорректно";
    if (x>0 && y>0) {
		return "Точка принадлежит к первой четверти";
	}
    else if (x<0 && y>0) {
		return "Точка принадлежит ко второй четверти";
	}
    else if (x<0 && y<0)  {
		return "Точка принадлежит к третьей четверти";
	}
    else if (x>0 && y<0)  {
		return "Точка принадлежит к четвертой четверти";
	}
	if (x===0 || y===0) {
		return "Точка находится на одной из осей координат";
	}	
}
//let x = Number (prompt ('Введите x:', ''));
//let y = Number (prompt ('Введите y:', ''));
//alert(checkPoint(x,y));

//3УО. Найти суммы только положительных из трех чисел

// let a = Number(prompt('Введите число#1', ''));
// let b = Number(prompt('Введите число#2', ''));
// let c = Number(prompt('Введите число#3', ''));

function findSumPositive (a, b, c) {
	if(!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(c)) return "Данные введены некорректно";
	if (a>=0 && b>=0 && c>=0) {
		return a+b+c;
	}
	else if (a>=0 && b<0 && c>=0) {
		return a+c;
	}	
	else if (a<0 && b>=0 && c>=0) {
		return b+c;
	}	
	else if (a>=0 && b>=0 && c<0) {
		return a+b;
	}	
	else if (a<0 && b<0 && c>=0) {
		return c;
	}	
	else if (a<0 && b>=0 && c<0) {
		return b;
	}	
	else if (a>=0 && b<0 && c<0) {
		return a;
	}	
	else if (a<=0 && b<=0 && c<=0) {
		return 'Введены отрицательные числа или нули';
	}
}
// alert(findSumPositive(a, b, c));

// 4УО. Посчитать выражение макс(а*б*с, а+б+с)+3
// let a = Number(prompt('Введите число#1', ''));
// let b = Number(prompt('Введите число#2', ''));
// let c = Number(prompt('Введите число#3', ''));

function calcMax (a, b, c) {
	if(!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(c)) return "Данные введены некорректно";
	function calcMaxAdd (a, b, c) {
		return a+b+c;
	}	
	function calcMaxMulti (a, b, c) {
		return a*b*c;
	}
	return Math.max(calcMaxAdd(a,b,c), calcMaxMulti(a,b,c))+3;
}
// console.log(calcMax(3, 0, 3));

// 5.УО Написать программу определения оценки студента по его рейтингу
// let rating = Number(prompt('Введите рейтинг студента', ''));

function checkRating (rating) {
	// let rating = [] ;
	if(!Number.isFinite(rating)) {
		return "Данные введены некорректно";
	}	
	if (rating <0 || rating>100) {
		return "Введите значение от 0 до 100";
	}
	else if (rating >= 0 && rating < 20) {
		return "Рейтинг студента F";
	}
	else if (rating >= 20 && rating < 40) {
		return "Рейтинг студента E";
	}
	else if (rating >= 40 && rating < 60) {
		return "Рейтинг студента D";
	}
	else if (rating >= 60 && rating < 75) {
		return "Рейтинг студента C";
	}
	else if (rating >= 75 && rating < 90) {
		return "Рейтинг студента B";
	}
	else if (rating >= 90 && rating <= 100) {
		return "Рейтинг студента A";
	}	
}	
// alert(checkRating());

// Ц

// 1Ц. Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function findSum () {
let sum = 0;
let count = 0;

for ( let i = 1; i <=99; i++) {
if (i%2===0) {
	sum+=i;
	count++;
		}
	}	
	return `Сумма четных чисел - {sum}, их количество - {count}`;	
}	
// let result = findSum();
// console.log(result.sum);
// console.log(result.count);

// 2Ц. Проверить простое ли число? 

// let max = prompt('Введите число', '');

function checkSimpleNum (max) {
	if(!Number.isFinite(max)) return "Данные введены некорректно";
    if (!Number.isInteger(max) || max<=1) return "Введите натуральное число > 1";
	if (max === 2) return "Простое число";
    for(let i = 2; i<max; i++){
        if (max%i) {
			return "Простое число";
		}
		else {
			return "Составное число";
		}	
    }
}

// 3Ц.Найти корень натурального числа с точностью до целого 
// Вариант последовательного подбора
 function sqrtChecking(a) {
	if(!Number.isFinite(a)) return "Данные введены некорректно";
    if(!Number.isInteger(a) || a<0) return "Введите натуральное число";
    if(a === 0 || a === 1) return a;
        let i = 1;
        while (i * i <= a)
        {
            i++;
        }
        return i-1;
    }
	
// Метод бинарного поиска
/*let arr = [1,2,3,4,5,6,7,8];
function binarySearch(value, list) {
    let first = 0;    //left endpoint
    let last = list.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;
 
    while (found === false && first <= last) {
		middle = Math.floor((first + last)/2);
        if (list[middle] == value) {
            found = true;
            position = middle;
        } else if (list[middle] > value) {  //if in lower half
            last = middle - 1;
        } else {  //in in upper half
            first = middle + 1;
        }
    }
    return position;
} */
// console.log(binarySearch(2,arr));	

// 4Ц. Вычислить факториал числа n. n! = 1*2*…*n-1*n;!
function findFact(n) {
// var a = Number(prompt('Введите число', ''));
// let n = 3;
	let fact= 1;
	if(!Number.isFinite(n)) return "Данные введены некорректно";
    if(!Number.isInteger(n) || n<0) return "Введите натуральное число";
	if(n === 0) return 1;
    if(n === 1 || n === 2) return n;
    if (n > 1) {
        for (let i = 2; i <= n; i++) {
			fact *= i;
			
            }
	}
return fact;	
}
// console.log(findFact());

// 5Ц. Посчитать сумму цифр заданного числа
function CalcSumDig(num) {
    if(!Number.isFinite(num)) return "Данные введены некорректно";
    if(num<0) num*=-1;
    if(String(num).length === 1) return num;
    let arr = [...String(num)];
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        arr[i] = Number(arr[i]);
        (arr[i]) ? sum+=arr[i] : false;
    }
    return sum;
};
//console.log(CalcSumDig(1234.5));

// 6Ц.Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321
function doReverseNum(num) {
    if(!Number.isFinite(num)) return "Данные введены некорректно";
    if(num<0) num*=-1;
    if(String(num).length === 1) return num;
    let arr = [...String(num)];
    let arrRev = [];
    for(let i = 0; i<=arr.length; i++){
        arrRev.push(arr[arr.length-i]);
    }
    return Number(arrRev.join(''));
};
//console.log(doReverseNum(123));

// ОМ

// 1ОМ. Найти минимальный элемент массива
/*function findMinElement () {
	var arr = [];
	var elementMass;
	var numOfElement = 1;
	var n = Number(prompt('Введите длину массива', ''));


	for(var i = 0; i <= n; i += 1) {
		elementMass = Number(prompt('Введите ' + numOfElement + ' элемент массива'));
		arr.push(elementMass);
		numOfElement += 1;
	}
	return Math.min(...arr);
}
// console.log(findMinElement()); */
const myArray = [125, 15, 189, 9896, 9, 7489, 984, 5];
const incorrectArray = [125, 15, 189, 9896, 9, 7489, 984, 5, 'd'];

function findMinElement (arr) {
	if (!Array.isArray(arr)) return "Данные введены некорректно";
	const isCorrectArray = arr.every(item => Number.isFinite(item));
	if(!isCorrectArray) return "Массив должен состоять только из чисел";
	if(arr.length === 1) return arr[0];
return Math.min(...arr);
}


//2ОМ. Найти максимальный элемент массива
const myArray1 = [125, 15, 189, 9896, 9, 7489, 984, 5];
const incorrectArray1 = [125, 15, 189, 9896, 9, 7489, 984, 5, 'd'];

function findMaxElement (arr) {
	if (!Array.isArray(arr)) return "Данные введены некорректно";
	const isCorrectArray = arr.every(item => Number.isFinite(item));
	if(!isCorrectArray) return "Массив должен состоять только из чисел";
	if(arr.length === 1) return arr[0];
return Math.max(...arr);
}

//3ОМ. Найти индекс минимального элемента массива
const myArray2 = [125, 15, 189, 9896, 9, 7489, 984, 5];
const incorrectArray2 = [125, 15, 189, 9896, 9, 7489, 984, 5, 'd'];

function findMinIndex (arr) {
	if (!Array.isArray(arr)) return "Данные введены некорректно";
	const isCorrectArray = arr.every(item => Number.isFinite(item));
	if(!isCorrectArray) return "Массив должен состоять только из чисел";
	if(arr.length === 1) return arr[0];
	let minElem = Math.min(...arr);
	return arr.indexOf(minElem);
}

// 4ОМ. Найти индекс максимального элемента массива
const myArray3 = [125, 15, 189, 9896, 9, 7489, 984, 5];
const incorrectArray3 = [125, 15, 189, 9896, 9, 7489, 984, 5, 'd'];

function findMaxIndex (arr) {
	if (!Array.isArray(arr)) return "Данные введены некорректно";
	const isCorrectArray = arr.every(item => Number.isFinite(item));
	if(!isCorrectArray) return "Массив должен состоять только из чисел";
	if(arr.length === 1) return arr[0];
	let maxElem = Math.max(...arr);
	return arr.indexOf(maxElem);
}

// 5ОМ. Посчитать сумму элементов массива с нечетными индексами 
let mass = [7, 42, 3, 15, 1, 18];

function calcSum (arr) {
if (!Array.isArray(arr)) return "Данные введены некорректно";
	const isCorrectArray = arr.every(item => Number.isFinite(item));
	if(!isCorrectArray) return "Массив должен состоять только из чисел";
	if(arr.length === 1) return arr[0];
	let sum = 0;
	for (let i = 1; i<mass.length; i+=2) // Организуем циклом перебор наших элементов массива
	sum+=mass[i];
return sum;
}
// console.log(calcSum());

// 6ОМ. Сделать реверс массива (массив в обратном направлении) 
function findReverseArr(arr) {
    if(!Array.isArray(arr)) return "Данные введены некорректно";
    if(arr.length === 1) return arr;
    let arrRev = [];
    for(let i = 1; i<=arr.length; i++){
        arrRev.push(arr[arr.length-i]);
    }
    return arrRev;
};

// 7ОМ. Посчитать количество нечетных элементов массива
function calcOddElem(arr) {
    if(!Array.isArray(arr)) return "Данные введены некорректно";
    let validElem = arr.every(elem => Number.isFinite(elem));
    if(!validElem) return "Массив должен состоять только из чисел";
    arrOddEl = arr.filter(elem => elem%2);
    return arrOddEl.length;
};

// 8ОМ. Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2





// Ф
// 1Ф. Получить строковое название дня недели по номеру дня
//let days = Number(prompt('Введите день недели от 1', ''));

function getDay (days) {
	if(!Number.isFinite(days)) return "Данные введены некорректно";	
	switch (days) {
		case 1:
			 return "Понедельник";
		case 2:
			 return "Вторник";
		case 3:
			 return "Среда";
		case 4:
			 return "Четверг";
		case 5:
			 return "Пятница";
		case 6:
			 return "Суббота";
		case 7:
			 return "Воскренье";
	default:
		 return "Нет такого дня";
		}
}
// alert(getDay());	

// 2Ф. Найти расстояние между двумя точками в двухмерном декартовом пространстве
// var x1 = Number(prompt('Введите х1',''));
// var y1 = Number(prompt('Введите y1',''));
// var x2 = Number(prompt('Введите х2',''));
// var y2 = Number(prompt('Введите y2',''));

function findDistance (x1, x2, y1, y2) {
	if(!Number.isFinite(x1) || !Number.isFinite(y1) || !Number.isFinite(x2) || !Number.isFinite(y2)) return "Данные введены некорректно";
	if(x1 === x2 && y1 === y2) return 0;
return Math.sqrt( (Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2) ) );
}
// let distance = findDistance();
// console.log(findDistance(2, 4, 3, 6));
