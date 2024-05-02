import PropTypes from 'prop-types'
import { UserFavoriteFood } from "./UserFavoriteFoods"
import { UserUsername } from "./UserUsername"

export function UserProfile(props) {
	// console.log({ 'printing props': props });
	// props.callMe();
	return (
		<>
			<UserUsername username={props.username} />
			<br></br>
			<b>Age: </b>
			<span>{props.age}</span>
			<UserFavoriteFood favoriteFoods={props.favoriteFoods} />
			{/* <b>Session: </b>
			<span>{props.isLoggedIn}</span> */}

		</>
	)


}

UserProfile.propTypes = {
	username: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	callMe: PropTypes.func.isRequired,
	isLoggedIn: PropTypes.bool,
	favoriteFoods: PropTypes.arrayOf(		//can use only array to check if arra is passed & arrayOf also chks the content of array
		PropTypes.shape({
			item: PropTypes.string.isRequired,
			id: PropTypes.number.isRequired
		})
	),

}

// UserProfile.PropTypes={
// 	props.username: PropTypes.string.isRequired
// 	// age: PropTypes.number.isRequired

// }

// username: PropTypes.string.isRequired,
// 	age: PropTypes.number.isRequired,
// 	callMe: PropTypes.func.isRequired,
// 	isLoggedIn: PropTypes.bool,
// favoriteFoods: PropTypes.arrayOf(
// 	PropTypes.shape({
// 		name: PropTypes.string.isRequired,
// 		id: PropTypes.string.isRequired,
// 	})
// )