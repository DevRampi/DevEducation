// unshift

describe("unshift", function() {

    it('Проверка логики unshift', function(){
        const myList = new AList([1,2,3]); 
		
        
        const actual = myList.unshift(1);
        
        const expected = 4;
        assert.deepEqual(actual, expected);
    });

});
