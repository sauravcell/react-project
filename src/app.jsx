import { UserDetails } from "./components/UserDetails"


export default function App() {
	const mockUsers = [		//consider it to be json returned by api call
		{
			id: 1,
			username: "anson",
			email: "anson@gmail.com",
		},
		{
			id: 2,
			username:"saurav",
			email: "saurav@gmail.com"
		}
	]


//mockUser is converted to jsx from json
	return (
		<div>
			{mockUsers.map(
				(user)=>{
					return(
						<UserDetails key={user.id} user={user} />						
					)
				}
			)}
		</div>
	)
}