import { UserProfile } from "./components/UserProfile"

export default function App() {
	const callMe = () => {
		console.log("saurav"); 
	};

	return (
		<>
			<div>
				<h1>Root Component</h1>
				<UserProfile
					age={20}
					isLoggedIn={true}
					favoriteFoods={[
						{ item1: 'pizza' }]}
					callMe={callMe}	
				/>

			</div>
		</>

	)

}