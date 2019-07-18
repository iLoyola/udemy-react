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

export { firebase, database as default };
