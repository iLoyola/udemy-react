import React from 'react';
import { shallow } from 'enzyme';

import ExpenseDashboardPage from '../../pages/ExpenseDashboardPage';

test( 'Should render the Expense Dashboard Page', () => {
	const wrapper = shallow( <ExpenseDashboardPage /> );
	expect( wrapper ).toMatchSnapshot();
});