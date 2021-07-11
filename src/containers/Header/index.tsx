import Search from '@containers/Search'
import React from 'react'
import { LOGO_ALT, LOGO_URL } from './constants'
import './styles.scss'

const Header: React.FC = () => (
	<header className='header-container'>
		<img className='logo-img' src={LOGO_URL} alt={LOGO_ALT} />
		<Search />
	</header>
)

export default Header
