import { createElement } from "react" //old way of  creating element in react

export function UserFavoriteFood() {
	return createElement('section', null,
		
			<span>Favorite foods:</span>,
			<br />,
			<ul>
				<li>Pizza</li>
				<li>Roti</li>
				<li>Lassi</li>
			</ul>
	)
}