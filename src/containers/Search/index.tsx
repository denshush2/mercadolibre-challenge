import React from 'react'
import { SEARCH_PLACEHOLDER } from './constants'
import './styles.scss'

const SearchContainer: React.FC = () => (
	<nav className='search-container'>
		<form role='search'>
			<input className='searchbox' placeholder={SEARCH_PLACEHOLDER} />
		</form>
	</nav>
)

export default SearchContainer
