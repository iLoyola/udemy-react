import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

test( 'Should set text filter', () => {
	const testText = 'Something in';
	const action = setTextFilter( testText );
	expect( action ).toEqual( {
		type: 'SET_TEXT_FILTER',
		text: testText
	});
});

test( 'Should set text filter with empty string', () => {
	const action = setTextFilter();
	expect( action ).toEqual( {
		type: 'SET_TEXT_FILTER',
		text: ''
	});
});

test( 'Should sort by date', () => {
	const action = sortByDate();
	expect( action ).toEqual( {
		type: 'SORT_BY_DATE'
	});
});

test( 'Should sort by amount', () => {
	const action = sortByAmount();
	expect( action ).toEqual( {
		type: 'SORT_BY_AMOUNT'
	});
});


test( 'Should set start date', () => {
	const action = setStartDate(moment(0));
	expect( action ).toEqual( {
		type: 'SET_START_DATE',
		startDate: moment(0)
	});
});

test( 'Should set end date', () => {
	const action = setEndDate(moment(0));
	expect( action ).toEqual( {
		type: 'SET_END_DATE',
		endDate: moment(0)
	});
});