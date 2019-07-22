import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../components/Header';

test( 'Should render Header', () => {
	const wrapper = shallow( <Header startLogout={() => {}} /> );
	expect( wrapper ).toMatchSnapshot();
});

test( 'Should call logout on button click', () => {
	const onLogoutSpy = jest.fn();
	const wrapper = shallow( <Header startLogout={onLogoutSpy} /> );
	wrapper.find( 'button' ).simulate( 'click' );
	expect( onLogoutSpy ).toHaveBeenCalled();
});