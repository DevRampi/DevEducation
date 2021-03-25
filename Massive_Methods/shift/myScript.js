// shift

class AList {
	constructor(store) {
		this.store = store;
	}
	
	shift() {
		if (this.store.length === 0) {
			return undefined
		} else {
			let someArray = [];
			let storeLength = this.store.length;
			// let firstElem = this.store[storeLength];
			
			for (let i = 0; i < storeLength; i++) {
				someArray[i] = this.store[i];
			}
			
			this.store = someArray;
			let firstElem = someArray.splice(0, 1);
			// console.log(firstElem);
			return firstElem;
		}
	}
}	
// let array = new AList([1, 2, 3,]);
array.shift();
