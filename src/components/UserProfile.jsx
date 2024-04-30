import { UserFavoriteFood } from "./UserFavoriteFoods"

export function UserProfile(){
	return (
		<div id='user-profile'>
			<p>Username: Bob</p>
			<div>
				<span>Email: </span>
				<span>saurav@gmail.com</span>
			</div>
			<UserFavoriteFood/>
			
		</div>
	)
	
}