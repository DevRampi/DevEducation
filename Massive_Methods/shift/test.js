// shift

describe("shift", function() {

    it('Проверка логики shift', function(){
        const myList = new AList([1,2,3]); 
		
        
        const actual = myList.shift();
        
        const expected = [1];
        assert.deepEqual(actual, expected);
    });

});
