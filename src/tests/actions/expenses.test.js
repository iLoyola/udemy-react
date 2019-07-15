import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
	const expenseData = {
		description: 'Rent',
		amount: 123244,
		createdAt: 1000,
		note: 'This was late months rent'
	};
	const add = addExpense( expenseData );
	expect( add ).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any( String )
		}
	});
});

test( 'Should add expense with defaults', () => {
	const add = addExpense();
	expect( add ).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any( String ),
			description: '',
			amount: 0,
			createdAt: 0,
			note: ''
		}
	});
});