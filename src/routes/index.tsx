import HomePage from '@pages/Home'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Routes: React.FC = () => (
	<Router>
		<Switch>
			<Route exact path='/' component={HomePage} />
		</Switch>
	</Router>
)

export default Routes
