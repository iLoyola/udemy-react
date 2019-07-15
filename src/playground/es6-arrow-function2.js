const add = ( a, b ) => {
	// console.log( arguments );
	return a + b;
};

console.log( add( 2, 6 ) );


const user = {
	name: "Ivan",
	cities: [ "Chicago", "Vancouver", "Georgetown" ],
	printPlacesLived() {
		return this.cities.map( ( city ) => this.name + " has lived in " + city)
	}
};

console.log( user.printPlacesLived() );

const multiplier = {
	numbers: [ 3, 6, 7, 4 ],
	multiplyBy: 4,
	multiply() {
		return this.numbers.map( ( number ) => number * this.multiplyBy )
	}
}

console.log( multiplier.multiply() );