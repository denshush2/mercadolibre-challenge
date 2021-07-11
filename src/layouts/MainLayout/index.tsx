import Header from '@containers/Header'
import React from 'react'

const MainLayout: React.FC = ({ children }) => (
	<>
		<Header />
		{children}
	</>
)

export default MainLayout
