import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../fixtures/expenses';
import expensesTotal from '../../selectors/expenses-total';

test( 'Should return 0 if no expenses', () => {
	const result = expensesTotal( [] );
	expect( result ).toBe( 0 );
});

test( 'Should add up a single expense', () => {
	const result = expensesTotal( [expenses[0]] );
	expect( result ).toBe( 195 );
});

test( 'Should add up a multiple expense', () => {
	const result = expensesTotal( expenses );
	expect( result ).toBe( 114195 );
});