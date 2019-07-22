import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from '../../pages/LoginPage';

test( 'Should render Login page', () => {
	const wrapper = shallow( <LoginPage /> );
	expect( wrapper ).toMatchSnapshot();
});

test( 'Should call login on button click', () => {
	const onLoginSpy = jest.fn();
	const wrapper = shallow( <LoginPage startLogin={onLoginSpy} /> );
	wrapper.find( 'button' ).simulate( 'click' );
	expect( onLoginSpy ).toHaveBeenCalled();
});