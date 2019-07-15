var nameVar = "Peter";
var nameVar = "Joe";
console.log( "nameVar", nameVar );

let nameLet = "Susy";
nameLet = "Betty";
console.log( "nameLet", nameLet );

const nameConst = "Bobby";
console.log( "nameConst", nameConst );

const fullName = "Rich Johnson";
let firstName;

if( fullName ) {
	firstName = fullName.split( " " )[0];
	console.log( firstName );
}

console.log( firstName );