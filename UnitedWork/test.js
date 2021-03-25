// 1УО.Если а – четное посчитать а*б, иначе а+б
describe("calcEven", function() {

    it('Возврат "a*b" если "а" четное', function(){
        const a = 4;
        const b = 3;
        
        const actual = calcEven(a,b);
        
        const expected = 12;
        assert.strictEqual(actual, expected);
    });
    it('Возврат "a+b" если "a" нечетное', function(){
        const a = 3;
        const b = 3;
        
        const actual = calcEven(a,b);
        
        const expected = 6;
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргументы = null', function(){
        const a = null;
        const b = null;
        
        const actual = calcEven(a,b);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргументы = undefined', function(){
        const a = undefined;
        const b = undefined;
        
        const actual = calcEven(a,b);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргументы не числа', function(){
        const a = 'str';
        const b = true;
        
        const actual = calcEven(a,b);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
});

// 2УО.Определить какой четверти принадлежит точка с координатами (х,у)
describe('checkPoint', function(){
	it('Возврат "Точка принадлежит I четверти" если x>0 и y>0', function(){
        const x = 5;
        const y = 5;
        
        const actual = checkPoint(x,y);
        
        const expected = "Точка принадлежит к первой четверти";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Точка принадлежит II четверти" если x<0 и y>0', function(){
        const x = -5;
        const y = 5;
        
        const actual = checkPoint(x,y);
        
        const expected = "Точка принадлежит ко второй четверти";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Точка принадлежит III четверти" если x<0 и y<0', function(){
        const x = -5;
        const y = -5;
        
        const actual = checkPoint(x,y);
        
        const expected = "Точка принадлежит к третьей четверти";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Точка принадлежит IV четверти" если x>0 и y<0', function(){
        const x = 5;
        const y = -5;
        
        const actual = checkPoint(x,y);
        
        const expected = "Точка принадлежит к четвертой четверти";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Точка находится на одной из осей координат" если x=0 или y=0', function(){
        const x = 0;
        const y = -5;
        
        const actual = checkPoint(x,y);
        
        const expected = "Точка находится на одной из осей координат";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргументы = null', function(){
        const x = null;
        const y = null;
        
        const actual = checkPoint(x,y);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргументы = undefined', function(){
        const x = undefined;
        const y = undefined;
        
        const actual = checkPoint(x,y);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргументы не числа', function(){
        const x = 'str';
        const y = true;
        
        const actual = checkPoint(x,y);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
});

//3УО. Найти суммы только положительных из трех чисел
describe('findSumPositive', function () {
    it('Возврат "a+b+c"', function () {
        const a = 3;
        const b = 3;
        const c = 3;
        
        const actual = findSumPositive(a,b,c);
        
        const expected = 9;
        assert.strictEqual(actual, expected);
    });
	it('Возврат "a+c"', function () {
        const a = 3;
        const b = -3;
        const c = 3;
        
        const actual = findSumPositive(a,b,c);
        
        const expected = 6;
        assert.strictEqual(actual, expected);
    });
		it('Возврат "b+c"', function () {
        const a = -3;
        const b = 3;
        const c = 3;
        
        const actual = findSumPositive(a,b,c);
        
        const expected = 6;
        assert.strictEqual(actual, expected);
    });
		it('Возврат "a+b"', function () {
        const a = 3;
        const b = 3;
        const c = -3;
        
        const actual = findSumPositive(a,b,c);
        
        const expected = 6;
        assert.strictEqual(actual, expected);
    });
		it('Возврат "a"', function () {
        const a = 3;
        const b = -3;
        const c = -3;
        
        const actual = findSumPositive(a,b,c);
        
        const expected = 3;
        assert.strictEqual(actual, expected);
    });
		it('Возврат "b"', function () {
        const a = -3;
        const b = -3;
        const c = 3;
        
        const actual = findSumPositive(a,b,c);
        
        const expected = 3;
        assert.strictEqual(actual, expected);
    });
		it('Возврат "c"', function () {
        const a = -3;
        const b = -3;
        const c = 3;
        
        const actual = findSumPositive(a,b,c);
        
        const expected = 3;
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргументы = null', function(){
        const a = null;
        const b = null;
        const c = null;
        
        const actual = findSumPositive(a,b,c);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргументы = undefined', function(){
        const a = undefined;
        const b = undefined;
        const c = undefined;
        
        const actual = findSumPositive(a,b,c);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргументы не числа', function(){
        const a = 'str';
        const b = true;
        const c = [];
        
        const actual = findSumPositive(a,b,c);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
	it('Возврат "Данные введены некорректно" если аргументы отрицательные', function(){
        const a = -3;
        const b = -3;
        const c = -3;
        
        const actual = findSumPositive(a,b,c);
        
        const expected = "Введены отрицательные числа или нули";
        assert.strictEqual(actual, expected);
    });
});

// 4УО. Посчитать выражение макс(а*б*с, а+б+с)+3
describe('calcMax', function () {
    it('Возврат "calcMaxAdd(a,b,c)+3" если calcMaxAdd(a,b,c) > calcMaxMulti(a,b,c)', function () {
        const a = 1;
        const b = 1;
        const c = 1;
        
        const actual = calcMax(a,b,c);
        
        const expected = 6;
        assert.strictEqual(actual, expected);
    });
    it('Возврат "calcMaxAdd(a,b,c)+3" если calcMaxAdd(a,b,c) < calcMaxMulti(a,b,c)', function () {
        const a = 3;
        const b = 3;
        const c = 3;
        
        const actual = calcMax(a,b,c);
        
        const expected = 30;
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргументы = null', function(){
        const a = null;
        const b = null;
        const c = null;
        
        const actual = calcMax(a,b,c);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргументы = undefined', function(){
        const a = undefined;
        const b = undefined;
        const c = undefined;
        
        const actual = calcMax(a,b,c);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргументы не числа', function(){
        const a = 'str';
        const b = true;
        const c = [];
        
        const actual = calcMax(a,b,c);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
});

// 5.УО Написать программу определения оценки студента по его рейтингу
describe('checkRating', function () {
     it('Возврат "Введите значение от 0 до 100', function () {
        const rating = 101;
        
        const actual = checkRating(rating);

        const expected = "Введите значение от 0 до 100";
        assert.strictEqual(actual, expected);
    });
	it('Возврат "Рейтинг студента F" если рейтинг между 0 и 19', function () {
        const rating = 7;
        
        const actual = checkRating(rating);

        const expected = "Рейтинг студента F";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Рейтинг студента E" если рейтинг между 20 и 39', function () {
        const rating = 24;
        
        const actual = checkRating(rating);

        const expected = "Рейтинг студента E";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Рейтинг студента D" если рейтинг между 40 и 59', function () {
        const rating = 43;
        
        const actual = checkRating(rating);

        const expected = "Рейтинг студента D";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Рейтинг студента C" если рейтинг между 60 и 74', function () {
        const rating = 69;
        
        const actual = checkRating(rating);

        score = 'C';
        const expected = "Рейтинг студента C";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Рейтинг студента "B"" если рейтинг между 75 и 89', function () {
        const rating = 80;
        
        const actual = checkRating(rating);

        score = 'B';
        const expected = "Рейтинг студента B";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Рейтинг студента A" если рейтинг между 90 и 100', function () {
        const rating = 100;
        
        const actual = checkRating(rating);

        score = 'A';
        const expected = "Рейтинг студента A";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргументы = is null', function(){
        const rating = null;
        
        const actual = checkRating(rating);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргументы = undefined', function(){
        const rating = undefined;
        
        const actual = checkRating(rating);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргументы не числа', function(){
        const rating = 'str';
        
        const actual = checkRating(rating);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
});

// Ц

// 1Ц. Найти сумму четных чисел и их количество в диапазоне от 1 до 99
describe('findSum', function () {
    it('Возврат sum и count четных чисел и их количество в диапазоне от 1 до 99', function () {
        const actual = findSum();
        sum = 0;
        count = 0;
        for ( let i = 1; i <=99; i++) {
			if (i%2===0) {
				sum+=i;
				count++;
			}
		}	

        const expected = `Сумма четных чисел - {sum}, их количество - {count}`;
        assert.strictEqual(actual, expected);
    });
});

// 2Ц. Проверить простое ли число? 
describe('checkSimpleNum', function () {
    it('Возврат "Простое число" если аргумент делится на себя и на 1', function () {
        const max = 2;
        
        const actual = checkSimpleNum(max);

        const expected = "Простое число";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Составное число" если аргумент имеет больше одного делителя', function () {
        const max = 6;
        
        const actual = checkSimpleNum(max);

        const expected = "Составное число";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Введите натуральное число > 1" если аргумент дробное число', function () {
        const max = 3.3;
        
        const actual = checkSimpleNum(max);

        const expected = "Введите натуральное число > 1";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Введите натуральное число > 1" если аргумент отрицательное число', function () {
        const max = -2;
        
        const actual = checkSimpleNum(max);

        const expected = "Введите натуральное число > 1";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Введите натуральное число > 1" если аргумент равен 1 или 0', function () {
        const max = 1;
        
        const actual = checkSimpleNum(max);

        const expected = "Введите натуральное число > 1";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = null', function(){
        const max = null;
        
        const actual = checkSimpleNum(max);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = undefined', function(){
        const max = undefined;
        
        const actual = checkSimpleNum(max);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент не число', function(){
        const max = 'str';
        
        const actual = checkSimpleNum(max);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
});

// 3Ц.Найти корень натурального числа с точностью до целого 
// Вариант последовательного подбора
describe('sqrtChecking', function(){
    it('Возврат корня', function(){
        const a = 4;
        
        const actual = sqrtChecking(a);
        
        const expected = 2;
        assert.strictEqual(actual, expected);
    });
    it('Возврат целого числа', function(){
        const a = 22;
        
        const actual = sqrtChecking(a);
        
        const expected = 4;
        assert.strictEqual(actual, expected);
    });
    it('Возврат аргумента если равен 0 или 1', function(){
        const a = 0;
        
        const actual = sqrtChecking(a);
        
        const expected = 0;
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Введите натуральное число" если аргумент дробное число', function () {
        const a = 0.6;
        
        const actual = sqrtChecking(a);

        const expected = "Введите натуральное число";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Введите натуральное число" если аргумент отрицательное число', function () {
        const a = -3;
        
        const actual = sqrtChecking(a);

        const expected = "Введите натуральное число";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = null', function(){
        const a = null;
        
        const actual = sqrtChecking(a);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = undefined', function(){
        const a = undefined;
        
        const actual = sqrtChecking(a);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент не число', function(){
        const a = 'str';
        
        const actual = sqrtChecking(a);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
});

// 4Ц.Вычислить факториал числа n. n! = 1*2*…*n-1*n;!
describe('findFact', function(){
    it('Возврат факториала аргумента', function(){
        const n = 3;
        
        const actual = findFact(n);
        
        const expected = 6;
        assert.strictEqual(actual, expected);
    });
    it('Возврат 1, если аргумент = 0', function(){
        const n = 0;
        
        const actual = findFact(n);
        
        const expected = 1;
        assert.strictEqual(actual, expected);
    });
    it('Возврат агрумента, если он равен 1 или 2', function(){
        const n = 1;
        
        const actual = findFact(n);
        
        const expected = 1;
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Введите натуральное число" если аргумент дробное число', function () {
        const n = 1.1;
        
        const actual = findFact(n);

        const expected = "Введите натуральное число";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Введите натуральное число" если аргумент отрицательное число', function () {
        const n = -1;
        
        const actual = findFact(n);

        const expected = "Введите натуральное число";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = null', function(){
        const n = null;
        
        const actual = findFact(n);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = undefined', function(){
        const n = undefined;
        
        const actual = findFact(n);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент не число', function(){
        const n = 'str';
        
        const actual = findFact(n);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
});

// 5Ц. Посчитать сумму цифр заданного числа
describe('CalcSumDig', function(){
    it('Возврат суммы чисел', function(){
        const num = 33;
        
        const actual = CalcSumDig(num);
        
        const expected = 6;
        assert.strictEqual(actual, expected);
    });
    it('Возврат суммы чисел отрицательного аргумента', function(){
        const num = -33;
        
        const actual = CalcSumDig(num);
        
        const expected = 6;
        assert.strictEqual(actual, expected);
    });
    it('Возврат суммы чисел дробного числа', function () {
        const num = 1234.5;
        
        const actual = CalcSumDig(num);
        
        const expected = 15;
        assert.strictEqual(actual, expected);   
    });
    it('Возврат если аргумент состоит из одной цифры', function(){
        const num = 2;
        
        const actual = CalcSumDig(num);
        
        const expected = 2;
        assert.strictEqual(actual, expected);;
    });
    it('Возврат "Данные введены некорректно" если аргумент = null', function(){
        const num = null;
        
        const actual = CalcSumDig(num);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = undefined', function(){
        const num = undefined;
        
        const actual = CalcSumDig(num);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент не число', function(){
        const num = 'str';
        
        const actual = CalcSumDig(num);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
});

// 6Ц.Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321
describe('doReverseNum', function(){
    it('Возврат реверса аргумента', function(){
        const num = 123;
        
        const actual = doReverseNum(num);
        
        const expected = 321;
        assert.strictEqual(actual, expected);
    });
    it('Возврат реверса отрицательного аргумента', function(){
        const num = -123;
        
        const actual = doReverseNum(num);
        
        const expected = 321;
        assert.strictEqual(actual, expected);
    });
    it('Возврат реверса, если аргумент дробное число', function () {
        const num = 123.5;
        
        const actual = doReverseNum(num);
        
        const expected = 5.321;
        assert.strictEqual(actual, expected);   
    });
    it('Возврат целого числа, если начинается аргумент с "0."', function(){
        const num = 0.563;
        
        const actual = doReverseNum(num);
        
        const expected = 365;
        assert.strictEqual(actual, expected);
    });
    it('Возврат если аргумент состоит из одной цифры', function(){
        const num = 7;
        
        const actual = doReverseNum(num);
        
        const expected = 7;
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = null', function(){
        const num = null;
        
        const actual = doReverseNum(num);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = undefined', function(){
        const num = undefined;
        
        const actual = doReverseNum(num);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент не число', function(){
        const num = 'str';
        
        const actual = doReverseNum(num);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
});

// ОМ

// 1ОМ. Найти минимальный элемент массива
describe('findMinElement', function(){
    it('Возврат минимального элемента массива', function(){
        const arr = [1,2,3,4];
        
        const actual = findMinElement(arr);
        
        const expected = 1;
        assert.strictEqual(actual, expected);
    });
    it('Если массив состоит из одного элемента', function(){
        const arr = [1];
        
        const actual = findMinElement(arr);
        
        const expected = 1;
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = null', function(){
        const arr = null;
        
        const actual = findMinElement(arr);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = undefined', function(){
        const arr = undefined;
        
        const actual = findMinElement(arr);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент не массив', function(){
        const arr = {};
        
        const actual = findMinElement(arr);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Массив должен состоять только из чисел" если элементы не числа', function(){
        const arr = [1, 'str'];
        
        const actual = findMinElement(arr);
        
        const expected = "Массив должен состоять только из чисел";
        assert.strictEqual(actual, expected);
    });
});

//2ОМ. Найти максимальный элемент массива
describe('findMaxElement', function(){
    it('Возврат максимального элемента массива', function(){
        const arr = [1,2,3,4];
        
        const actual = findMaxElement(arr);
        
        const expected = 4;
        assert.strictEqual(actual, expected);
    });
    it('Если массив состоит из одного элемента', function(){
        const arr = [1];
        
        const actual = findMaxElement(arr);
        
        const expected = 1;
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = null', function(){
	const arr = null;
        
        const actual = findMaxElement(arr);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = undefined', function(){
        const arr = undefined;
        
        const actual = findMaxElement(arr);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент не массив', function(){
        const arr = {};
        
        const actual = findMaxElement(arr);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Массив должен состоять только из чисел" если элементы не числа', function(){
        const arr = [1, 'str'];
        
        const actual = findMaxElement(arr);
        
        const expected = "Массив должен состоять только из чисел";
        assert.strictEqual(actual, expected);
    });
});

//3ОМ. Найти индекс минимального элемента массива
describe('findMinIndex', function(){
    it('Возврат индекса минимального элемента массива', function(){
        const arr = [1,2,3,4];
        
        const actual = findMinIndex(arr);
        
        const expected = 0;
        assert.strictEqual(actual, expected);
    });
    it('Если массив состоит из одного элемента', function(){
        const arr = [1];
        
        const actual = findMinIndex(arr);
        
        const expected = 1;
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = null', function(){
	const arr = null;
        
        const actual = findMinIndex(arr);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = undefined', function(){
        const arr = undefined;
        
        const actual = findMinIndex(arr);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент не массив', function(){
        const arr = {};
        
        const actual = findMinIndex(arr);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Массив должен состоять только из чисел" если элементы не числа', function(){
        const arr = [1, 'str'];
        
        const actual = findMinIndex(arr);
        
        const expected = "Массив должен состоять только из чисел";
        assert.strictEqual(actual, expected);
    });
});

// 4ОМ. Найти индекс максимального элемента массива
describe('findMaxIndex', function(){
    it('Возврат индекса максимального элемента массива', function(){
        const arr = [1,2,3,4];
        
        const actual = findMaxIndex(arr);
        
        const expected = 3;
        assert.strictEqual(actual, expected);
    });
    it('Если массив состоит из одного элемента', function(){
        const arr = [1];
        
        const actual = findMaxIndex(arr);
        
        const expected = 1;
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = null', function(){
	const arr = null;
        
        const actual = findMaxIndex(arr);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = undefined', function(){
        const arr = undefined;
        
        const actual = findMaxIndex(arr);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент не массив', function(){
        const arr = {};
        
        const actual = findMaxIndex(arr);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Массив должен состоять только из чисел" если элементы не числа', function(){
        const arr = [1, 'str'];
        
        const actual = findMaxIndex(arr);
        
        const expected = "Массив должен состоять только из чисел";
        assert.strictEqual(actual, expected);
    });
});

// 5ОМ. Посчитать сумму элементов массива с нечетными индексами 
describe('calcSum', function(){
    it('Возврат суммы элементов  массива с нечетными индексами', function(){
        const arr = [7, 42, 3, 15, 1, 18];
        
        const actual = calcSum(arr);
        
        const expected = 75;
        assert.strictEqual(actual, expected);
    });
    it('Если массив состоит из одного элемента', function(){
        const arr = [1];
        
        const actual = calcSum(arr);
        
        const expected = 1;
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = null', function(){
	const arr = null;
        
        const actual = calcSum(arr);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = undefined', function(){
        const arr = undefined;
        
        const actual = calcSum(arr);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент не массив', function(){
        const arr = {};
        
        const actual = calcSum(arr);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Массив должен состоять только из чисел" если элементы не числа', function(){
        const arr = [1, 'str'];
        
        const actual = calcSum(arr);
        
        const expected = "Массив должен состоять только из чисел";
        assert.strictEqual(actual, expected);
    });
});

// 6ОМ. Сделать реверс массива (массив в обратном направлении) 
describe('findReverseArr', function(){
    it('Возврат реверса массива', function(){
        const arr = [1,2,3,4];
        
        const actual = findReverseArr(arr);
        
        const expected = [4,3,2,1];
        assert.deepEqual(actual, expected);
    });
    it('Если массив состоит из одного элемента', function(){
        const arr = [1];
        
        const actual = findReverseArr(arr);
        
        const expected = [1];
        assert.deepEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = null', function(){
        const arr = null;
        
        const actual = findReverseArr(arr);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = undefined', function(){
        const arr = undefined;
        
        const actual = findReverseArr(arr);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент не массив', function(){
        const arr = {};
        
        const actual = findReverseArr(arr);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
});

// 7ОМ. Посчитать количество нечетных элементов массива
describe('calcOddElem', function(){
    it('Возврат количества нечетных элементов массива', function(){
        const arr = [1,2,3,4,5];
        
        const actual = calcOddElem(arr);
        
        const expected = 3;
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = null', function(){
        const arr = null;
        
        const actual = calcOddElem(arr);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = undefined', function(){
        const arr = undefined;
        
        const actual = calcOddElem(arr);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент не массив', function(){
        const arr = {};
        
        const actual = calcOddElem(arr);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Массив должен состоять только из чисел" если элементы не числа', function(){
        const arr = [1, 'str'];
        
        const actual = calcOddElem(arr);
        
        const expected = "Массив должен состоять только из чисел";
        assert.strictEqual(actual, expected);
    });
});

// 8ОМ. Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2




// Ф
// 1Ф. Получить строковое название дня недели по номеру дня
describe('getDay', function(){
    it('Возврат строки названия недели по номеру дня', function(){
        const days = 5;
        
        const actual = getDay(days);
        
        const expected = 'Пятница';
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Нет такого дня" если данные не из диапазона 1 - 7', function(){
        const days = 11;
        
        const actual = getDay(days);
        
        const expected = "Нет такого дня";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = null', function(){
        const days = null;
        
        const actual = getDay(days);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = undefined', function(){
        const days = undefined;
        
        const actual = getDay(days);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент не число', function(){
        const days = "str";
        
        const actual = getDay(days);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
});

// 2Ф. Найти расстояние между двумя точками в двухмерном декартовом пространстве
describe('findDistance', function(){
    it('Возврат расстояния между двумя точками в ДДП', function(){
        const x1 = 1;
        const x2 = 6;
        const y1 = 2;
        const y2 = 5;
        
        const actual = findDistance(x1, x2, y1, y2);
        
        const expected = 5.830951894845301;
        assert.strictEqual(actual, expected);
    });
    it('Возврат нуля, если точка имеет равные координаты', function(){
        const x1 = 1;
        const x2 = 1;
        const y1 = 1;
        const y2 = 1;
        
        const actual = findDistance(x1, x2, y1, y2);
        
        const expected = 0;
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = null', function(){
        const x1 = null;
        const x2 = null;
        const y1 = null;
        const y2 = null;
        
        const actual = findDistance(x1, x2, y1, y2);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент = undefined', function(){
        const x1 = undefined;
        const x2 = undefined;
        const y1 = undefined;
        const y2 = undefined;
        
        const actual = findDistance(x1, x2, y1, y2);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
    it('Возврат "Данные введены некорректно" если аргумент не числа', function(){
        const x1 = 'str';
        const x2 = true;
        const y1 = [];
        const y2 = NaN;
        
        const actual = findDistance(x1, y1, x2, y2);
        
        const expected = "Данные введены некорректно";
        assert.strictEqual(actual, expected);
    });
});