import { createElement } from "react" //old way of  creating element in react
import styles from "./users.module.scss"


export function UserFavoriteFood(props) {
	return createElement('section', null,

		<span  className={styles.foodsTitle}>Favorite foods:</span>,
		<ul>
			<li>{props.favoriteFoods[0].item}</li>
			<li>{props.favoriteFoods[1].item}</li>
		</ul>
	)
}