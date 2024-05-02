// import PropTypes from 'prop-types'
import { UserProfile } from "./components/UserProfile"

export default function App() {
	const callMe = () => {
		console.log("Running callMe");
	};
	console.log('Output');

	return (
		<>
			<div>
				<h1>Root Component</h1>
				<UserProfile
					username="Alias" 
					age={20}
					isLoggedIn={true}
					favoriteFoods={[
						{
							item: 'pizza',
							id: 1,
						},
						{
							item: 'lassi',
							id: 2,
						}
					]}
					callMe={callMe}
				/>

			</div>
		</>

	)

}