import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore( [thunk] );

test( 'Should remove expense', () => {
	const action = removeExpense( {id: '123abc'} );
	expect( action ).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
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

test( 'Should add expense', () => {
	const add = addExpense( expenses[2] );
	expect( add ).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2]
	});
});

test( 'Should add expense to database and store', ( done ) => {
	const store = createMockStore({});
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
		database.ref( `expenses/${actions[0].expense.id}` ).once( 'value' );
	}).then( ( snapshot ) => {
		expect( snapshot.val() ).toEqual( expenseData );
		done();
	});
});

test( 'Should add expense with defaults to database and store', () => {

});

// test( 'Should add expense with defaults', () => {
// 	const add = addExpense();
// 	expect( add ).toEqual({
// 		type: 'ADD_EXPENSE',
// 		expense: {
// 			id: expect.any( String ),
// 			description: '',
// 			amount: 0,
// 			createdAt: 0,
// 			note: ''
// 		}
// 	});
// });