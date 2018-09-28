import React from 'react'

import Wallet from './Wallet'
import Loot from './Loot'

export default 	() => {
	return (
		<div>
			<h2>Loot Check</h2>
			<hr/>
			<Wallet />
			<hr />
			<Loot />
			<div>
				Powered by <a target='_blank' rel="noopener noreferrer" href="https://www.coindesk.com/price">Coindesk</a>
			</div>
		</div>
	)
}