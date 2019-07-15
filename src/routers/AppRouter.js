import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
{/* Pages */}
import ExpenseDashoardPage from '../pages/ExpenseDashboardPage';
import AddExpensePage from '../pages/AddExpensePage';
import EditExpensePage from '../pages/EditExpensePage';
import HelpPage from '../pages/HelpPage';
import NotFoundPage from '../pages/NotFoundPage';
{/* Components */}
import Header from '../components/Header';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
			{/*Switch goes thru routes one by one until the url matches then stops*/}
				<Route path="/" component={ExpenseDashoardPage} exact={true} />
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit/:id" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;
