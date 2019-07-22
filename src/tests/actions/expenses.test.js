import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
	startAddExpense,
	addExpense,
	editExpense,
	startEditExpense,
	removeExpense,
	startRemoveExpense,
	setExpenses,
	startSetExpenses
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = {auth: {uid}};
const createMockStore = configureMockStore( [thunk] );

beforeEach( ( done ) => {
	const expenseData = {};
	expenses.forEach( ( {id, description, note, amount, createdAt} ) => {
		expenseData[id] = {description, note, amount, createdAt};
	});
	database.ref( `users/${uid}/expenses` ).set( expenseData ).then( () => done() );
});

test( 'Should remove expense', () => {
	const action = removeExpense( {id: '123abc'} );
	expect( action ).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test( 'Should remove expense from firebase', ( done ) => {
	const store = createMockStore( defaultAuthState );
	const id = expenses[2].id;
	store.dispatch( startRemoveExpense( {id} ) ).then( () => {
		const actions = store.getActions();
		expect( actions[0] ).toEqual({
			type: 'REMOVE_EXPENSE',
			id
		});
		return database.ref( `users/${uid}/expenses/${id}` ).once( 'value' );
	}).then( ( snapshot ) => {
		expect( snapshot.val() ).toBeFalsy();
		done();
	});
});

test( 'Should edit expense', () => {
	const edit = editExpense( '123abc', {note: 'New note value'} );
	expect( edit ).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			note: 'New note value'
		}
	});
});

test( 'Should edit expense from firebase', ( done ) => {
	const store = createMockStore( defaultAuthState );
	const id = expenses[0].id;
	const updates = { amount: 21045 };
	store.dispatch( startEditExpense( id, updates ) ).then( () => {
		const actions = store.getActions();
		expect( actions[0] ).toEqual({
			type: 'EDIT_EXPENSE',
			id, updates
		});
		return database.ref( `users/${uid}/expenses/${id}` ).once( 'value' );
	}).then( ( snapshot ) => {
		expect( snapshot.val().amount ).toBe( updates.amount );
		done();
	});
});

test( 'Should add expense', () => {
	const add = addExpense( expenses[2] );
	expect( add ).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2]
	});
});

test( 'Should add expense to database and store', ( done ) => {
	const store = createMockStore( defaultAuthState );
	const expenseData = {
		description: 'Mouse',
		amount: 3000,
		createdAt: 1000,
		note: 'This one is better.'
	};
	store.dispatch( startAddExpense( expenseData ) ).then( () => {
		const actions = store.getActions();
		expect( actions[0] ).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any( String ),
				...expenseData
			}
		});
		return database.ref( `users/${uid}/expenses/${actions[0].expense.id}` ).once( 'value' );
	}).then( ( snapshot ) => {
		expect( snapshot.val() ).toEqual( expenseData );
		done();
	});
});

test( 'Should add expense with defaults to database and store', ( done ) => {
	const store = createMockStore( defaultAuthState );
	const expenseDefaults = {
		description: '',
		amount: 0,
		createdAt: 0,
		note: ''
	};
	store.dispatch( startAddExpense( expenseDefaults ) ).then( () => {
		const actions = store.getActions();
		expect( actions[0] ).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any( String ),
				...expenseDefaults
			}
		});
		return database.ref( `users/${uid}/expenses/${actions[0].expense.id}` ).once( 'value' );
	}).then( ( snapshot ) => {
		expect( snapshot.val() ).toEqual( expenseDefaults );
		done();
	});
});

test( 'Should setup set expense action object with data', () => {
	const result = setExpenses( expenses );
	expect( result ).toEqual({
		type: 'SET_EXPENSES',
		expenses
	});
});

test( 'Should fetch the expenses from firebase', ( done ) => {
	const store = createMockStore(defaultAuthState);
	store.dispatch( startSetExpenses() ).then( () => {
		const actions = store.getActions();
		expect( actions[0] ).toEqual({
			type: 'SET_EXPENSES',
			expenses
		});
		done();
	});
});
