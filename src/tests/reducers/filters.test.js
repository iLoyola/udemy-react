import moment from 'moment';

import filtersReducer from '../../reducers/filters';

test( 'Should setup default values', () => {
	const state = filtersReducer( undefined, {type: '@@INIT'} );
	expect( state ).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf( 'month' ),
		endDate: moment().endOf( 'month' )
	});
});

test( 'Should set sort by amount', () => {
	const state = filtersReducer( undefined, {type: 'SORT_BY_AMOUNT'} );
	expect( state.sortBy ).toBe( 'amount' );
});

test( 'Should set sort by date', () => {
	const currentState = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	};
	const action = {type: 'SORT_BY_DATE'};
	const state = filtersReducer( currentState, action );
	expect( state.sortBy ).toBe( 'date' );
});

test( 'Should set text filter', () => {
	const textCurrent = 'Something in';
	const action = {
		type: 'SET_TEXT_FILTER',
		text: textCurrent
	};
	const result = filtersReducer( undefined, action );
	expect( result.text ).toBe( textCurrent );
});

test( 'Should set start date filter', () => {
	const startDate = moment();
	const action = {
		type: 'SET_START_DATE',
		startDate
	}
	const result = filtersReducer( undefined, action );
	expect( result.startDate ).toEqual( startDate );
});

test( 'Should set start amount filter', () => {
	const endDate = moment();
	const action = {
		type: 'SET_END_DATE',
		endDate
	};
	const result = filtersReducer( undefined, action );
	expect( result.endDate ).toEqual( endDate );
});
