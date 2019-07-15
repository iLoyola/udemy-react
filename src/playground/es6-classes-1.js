
class Person {
	constructor( name = "Anonymous", age = 0 ) {
		this.name = name;
		this.age = age;
	}
	getGreeting() {
		// return "Hi, I am " + this.name + "!";
		return `Hi, I am ${ this.name }!`;
	}
	getDescription() {
		return `${ this.name } is ${ this.age } year(s) old.`;
	}
}

class Student extends Person {
	constructor( name, age, major = "undecided" ) {
		super( name, age );
		this.major = major;
	}
	hasMajor() {
		return !!this.major;
	}
	getDescription() {
		let description = super.getDescription();
		if( this.hasMajor() ) {
			description += ` Thier major is ${ this.major }.`;
		}
 		return description;
	}
}

class Traveler extends Person {
	constructor( name, age, homeLocation ) {
		super( name, age );
		this.homeLocation = homeLocation;
	}
	getGreeting() {
		let home = super.getGreeting();
		if( this.homeLocation ) {
			home += ` I'm am from ${ this.homeLocation }.`
		}
		return home;
	}
}

const me = new Traveler( "Ivan Loyola", 47, 'Montreal' );
console.log( me.getGreeting() );

const other = new Traveler();
console.log( other.getGreeting() );