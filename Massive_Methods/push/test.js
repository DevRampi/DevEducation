// push

describe("push", function() {

    it('Проверка логики push', function(){
        const myList = new AList([1,2,3]); 
		
        
        const actual = myList.push(1);
        
        const expected = 4;
        assert.deepEqual(actual, expected);
    });

});
