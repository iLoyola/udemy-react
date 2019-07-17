import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach( () => {
	setTextFilter = jest.fn();
	sortByDate = jest.fn();
	sortByAmount = jest.fn();
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	wrapper = shallow(
		<ExpenseListFilters
			setTextFilter={setTextFilter}
			sortByDate={sortByDate}
			sortByAmount={sortByAmount}
			setStartDate={setStartDate}
			setEndDate={setEndDate}
			filters={filters}
		/>
	);
});

test( 'Should render Expense List Filter', () => {
	expect( wrapper ).toMatchSnapshot();
});

test( 'Should render Expense List Filter with alt data', () => {
	wrapper.setProps({
		filters: altFilters
	});
	expect( wrapper ).toMatchSnapshot();
});

test( 'Should handle text change', () => {
	const value = 'Rent';
	wrapper.find( 'input' ).simulate( 'change', {
		target: {value}
	});
	expect( setTextFilter ).toHaveBeenLastCalledWith( value );
});

test( 'Should sort by date', () => {
	const value = 'date';
	wrapper.setProps({
		filters: altFilters
	});
	wrapper.find( 'select' ).simulate( 'change', {
		target: {value}
	});
	expect( sortByDate ).toHaveBeenCalled();
});

test( 'Should sort by amount', () => {
	const value = 'amount';
	wrapper.find( 'select' ).simulate( 'change', {
		target: {value}
	});
	expect( sortByAmount ).toHaveBeenCalled();
});

test( 'Should handle date change', () => {
	const startDate = moment(0).add( 4, 'days' );
	const endDate = moment(0).add( 8, 'days' );
	wrapper.find( 'DateRangePicker' ).prop( 'onDatesChange' )( {startDate, endDate} );
	expect( setStartDate ).toHaveBeenLastCalledWith( startDate );
	expect( setEndDate ).toHaveBeenLastCalledWith( endDate );
});

test( 'Should handle date focus changes', () => {
	const calendarFocused = 'endDate';
	wrapper.find( 'DateRangePicker' ).prop( 'onFocusChange' )( calendarFocused );
	expect( wrapper.state( 'calendarFocused' ) ).toBe( calendarFocused );
});
