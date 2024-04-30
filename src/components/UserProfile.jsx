import { UserFavoriteFood } from "./UserFavoriteFoods"
import { UserUsername } from "./UserUsername"

export function UserProfile(props){
	console.log(props);
	props.callMe();
	return (
		<div id='user-profile'>
			<UserUsername username='bob'/>
			<b>Age: </b>
			<span>{props.age}</span>
			<UserFavoriteFood/>
			{props.isLoggedIn}
			
		</div>
	)
	
}