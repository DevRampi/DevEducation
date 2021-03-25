// pop

describe("pop", function() {

    it('Проверка логики pop', function(){
        const myList = new AList([1,2,3]); 
		
        const actual = myList.pop();
        
        const expected = 3;
        assert.deepEqual(actual, expected);
    });

});
