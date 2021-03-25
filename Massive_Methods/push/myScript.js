// push

class AList {
	constructor(store) {
		this.store = store;
	}
	
	push() {
		if (this.store.length === 0) {
			return undefined
		} else {
			let someArray = [];
			let storeLength = this.store.length+1;
			
			for (let i = 0; i < storeLength; i++) {
				someArray[i] = this.store[i];
			}
			
			this.store = someArray;
			return storeLength;
		}
	}
}	
let array = new AList([1, 2, 3,]);
array.push(1);
//console.log(array.length);

	