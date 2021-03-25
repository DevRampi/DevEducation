// unshift

class AList {
	constructor(store) {
		this.store = store;
	}
	
	unshift() {
		if (this.store.length === 0) {
			return undefined
		} else {
			let someArray = [];
			let storeLength = this.store.length;
			
			for (let i = 0; i < storeLength; i++) {
				someArray[i] = this.store[i];
			}
			
			this.store = someArray;
			let firstElem = someArray.splice(0, 0, 1);
			return storeLength+1;
		}
	}
}	
let array = new AList([1, 2, 3,]);
array.unshift();


	