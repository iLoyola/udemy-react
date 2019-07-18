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

// database.ref( 'expenses' ).push({
// 	description: 'Rent',
// 	note: '',
// 	amount: 10325,
// 	createdAt: 345353534
// });

// database.ref( 'expenses' ).once( 'value' )
// 	.then( ( snapshot ) => {
// 		const expenses = [];
// 		snapshot.forEach( ( childSnapshot ) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});
// 		console.log( expenses );
// 	}).catch( ( error ) => {
// 		console.log( 'Error', error );
// 	});

// database.ref( 'expenses' ).on( 'value', ( snapshot ) => {
// 	const expenses = [];
// 	snapshot.forEach( ( childSnapshot ) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});
// 	console.log( expenses );
// });