{/* Object Destructuring */}
const person = {
	name: 'Ivan',
	age: 45,
	location: {
		city: 'Montreal',
		temp: 34
	}
};

const {name : firstName = 'Anonymous', age} = person;
// const name = person.name;
// const age = person.age;

console.log( `${firstName} is ${age}.` );

const { city, temp: temperature } = person.location;
// if( person.location.temp && person.location.city ) {
// 	console.log( `It's ${person.location.temp} in ${person.location.city}` );
// }

if( temperature && city ) {
	console.log( `It's ${temperature} in ${city}` );
}

const book = {
	title: 'Ego is the Enemy',
	author: 'Ryan Holiday',
	publisher: {
		name: 'Penguin'
	}
}


const {name: publisherName = 'alternative'} = book.publisher;
{/* Destructure objects creating seperate variables for those values allowing us to created local variables so we can rename them and set default values. */}

console.log( publisherName );

{/* Array Destructuring */}
const address = [ '234 Fonda Place S.E.', 'Montreal', 'Ohio', 'F3E 4D3' ];
const [ ,, state = 'California' ] = address;
console.log( `You are in ${state}.` );

const item = [ 'Coffee (hot)', '$2.00', '$2.50', '$2.75' ];
const [ coffeeText, , mediumPrice ] = item;
console.log( `A medium ${coffeeText} costs ${mediumPrice}` );
{/* Destructure arrays creating seperate variables for those values allowing us to created local variables so we set default values. */}