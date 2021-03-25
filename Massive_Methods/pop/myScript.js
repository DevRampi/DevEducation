// pop

class AList {
	constructor(store) {
		this.store = store;
	}
	
	pop() {
		if (this.store.length === 0) {
			return undefined
		} else {
			let someArray = [];
			let storeLength = this.store.length-1;
			let lastElem = this.store[storeLength];
			
			for (let i = 0; i < storeLength; i++) { //this.store.lengh = ythis.store.len -1
				someArray[i] = this.store[i];
			}
			
			this.store = someArray;
			return lastElem;
		}
	}
}	
// let array = new AList([1, 2, 3,]);
array.pop();

	