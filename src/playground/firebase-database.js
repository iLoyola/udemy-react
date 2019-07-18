import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCwJ5hOJzEBF1MxO9mqDrqYP1t8b8vAOIM",
    authDomain: "expensify-31b3a.firebaseapp.com",
    databaseURL: "https://expensify-31b3a.firebaseio.com",
    projectId: "expensify-31b3a",
    storageBucket: "",
    messagingSenderId: "629208714993",
    appId: "1:629208714993:web:204daefb0898cf15"
};

firebase.initializeApp( config );

const database = firebase.database();

database.ref().set({
	name: 'Ivan Loyola',
	age: 23,
	stressLevel: 6,
	isSingle: false,
	job: {
		title: 'Security',
		company: 'Apple'
	},
	location: {
		city: 'Montreal',
		country: 'Canada'
	}
}).then( () => {
	console.log( 'Data is saved!' );
}).catch( ( e ) => {
	console.log( 'This Failed!', e );
});

database.ref().set( 'This is my data.' );

database.ref( 'age' ).set( 27 );
database.ref( 'location/city' ).set( 'Calgary' );

database.ref( 'attributes' ).set({
	height: 75,
	weight: 185
}).then( () => {
	console.log( 'Second set call worked.' );
}).catch( ( e ) => {
	console.log( 'Things didnt for the second error', e );
});

//Remove data
database.ref( 'isSingle' ).remove().then( () => {
	console.log( 'Data removed.' );
}).catch( ( e ) => {
	console.log( 'Remove failed.', e );
});

//same as remove
database.ref( 'isSingle' ).set(null);

//Multipule calls at root
database.ref().update({
	name: 'Mack',
	age: 75,
	job: 'Software Developer',
	isSingle: null
});

//Multipule calls for nested
database.ref().update({
	job: 'Manager',
	'location/city': 'Calgary'
});

//Challenge
database.ref().update({
	stressLevel: 9,
	'job/company': 'Amazon',
	'location/city': 'Vancouver'
}).then( () => {
	console.log( 'Update passed.' );
}).catch( ( error ) => {
	console.log( 'Update Failed.', error );
});

//Fetching data one time
database.ref().once( 'value' )
	.then( ( snapshot ) => {
		const value = snapshot.val();
		console.log( value );
	}).catch( ( error ) => {
		console.log( '', error );
	});

//Fetching data with subscription
const onValueChange = database.ref().on( 'value', ( snapshot ) => {
	console.log( snapshot.val() );
}, ( error ) => {
	console.log( 'Error with data fetching', error );
});

setTimeout( () => {
	database.ref( 'age' ).set( 26 );
}, 3500 );

database.ref().off( onValueChange );

//Challenge
database.ref().on( 'value', ( snapshot ) => {
	const val = snapshot.val();
	console.log( `${val.name} is a ${val.job.title} at ${val.job.company}.` );
}, ( error ) => {
	console.log( 'Error fetching data', error );
});

//Array Data
database.ref( 'notes' ).push({
	title: 'To do',
	body: 'Go for a run'
});

database.ref( 'notes/Lk4jOwZrmBh52_dBC71' ).update({
	body: 'Buy Food'
});

// child_removed
database.ref( 'expenses' ).on( 'child_removed', ( snapshot ) => {
	console.log( snapshot.key, snapshot.val() );
});

// child_changed
database.ref( 'expenses' ).on( 'child_changed', ( snapshot ) => {
	console.log( snapshot.key, snapshot.val() );
});

// child_added
database.ref( 'expenses' ).on( 'child_added', ( snapshot ) => {
	console.log( snapshot.key, snapshot.val() );
});

database.ref( 'expenses' ).push({
	description: 'Rent',
	note: '',
	amount: 10325,
	createdAt: 345353534
});

database.ref( 'expenses' ).once( 'value' )
	.then( ( snapshot ) => {
		const expenses = [];
		snapshot.forEach( ( childSnapshot ) => {
			expenses.push({
				id: childSnapshot.key,
				...childSnapshot.val()
			});
		});
		console.log( expenses );
	}).catch( ( error ) => {
		console.log( 'Error', error );
	});

database.ref( 'expenses' ).on( 'value', ( snapshot ) => {
	const expenses = [];
	snapshot.forEach( ( childSnapshot ) => {
		expenses.push({
			id: childSnapshot.key,
			...childSnapshot.val()
		});
	});
	console.log( expenses );
});
