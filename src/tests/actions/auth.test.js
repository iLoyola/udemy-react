import { login, logout } from '../../actions/auth';

test( 'Should generate log in action object', () => {
	const uid = '123qwe';
	const action = login( uid );
	expect( action ).toEqual({
		type: 'LOGIN',
		uid
	});
});

test( 'Should generate log out action object', () => {
	const action = logout();
	expect( action ).toEqual({
		type: 'LOGOUT'
	});
});