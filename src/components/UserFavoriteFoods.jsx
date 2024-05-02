import { createElement } from "react" //old way of  creating element in react

export function UserFavoriteFood(props) {
	return createElement('section', null,

		<span>Favorite foods:</span>,
		<br />,
		<ul>
			<li>{props.favoriteFoods[0].item}</li>
			<li>{props.favoriteFoods[1].item}</li>
		</ul>
	)
}