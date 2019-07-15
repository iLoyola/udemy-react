import React from 'react';
import { shallow } from 'enzyme';

import ExpenseForm from '../../components/ExpenseForm';

test( 'Should render Expense Form', () => {
	const wrapper = shallow( <ExpenseForm /> );
	expect( wrapper ).toMatchSnapshot();
});