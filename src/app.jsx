// import { LoginForm } from "./components/LoginForm";
// import { RegisterForm } from "./components/RegisterForm";
import { useState } from "react"
import { UserDetails } from "./components/UserDetails";

export default function App() {
	const [users, setUsers] = useState([
		{
			id: 1,
			username: "anson",
			email: "anson@gmail.com",
		},
		{
			id: 2,
			username: "saurav",
			email: "saurav@gmail.com",
		},
	]);

	return (
		<div>
			{console.log(users)}
			{users.map((user) => 
				(<UserDetails key={user.id} user={user} setUsers={setUsers} />)
			)}
		</div>
	)
}