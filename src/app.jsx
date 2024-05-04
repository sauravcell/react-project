// import { LoginForm } from "./components/LoginForm";
// import { RegisterForm } from "./components/RegisterForm";
import { useState } from "react"
import { UserDetails } from "./components/UserDetails";

export default function App() {
	const [username, setUsername] = useState("");	//used to create new username in add operation
	const [email, setEmail] = useState("");			//used to create new email in add operation
	const [counter, setCounter] = useState(3);		//used to assign an id by the system in add operation.(default value is set to 3 bcz array already has 2 elements)	
	const [users, setUsers] = useState([			//used to perform edit operations in users array 
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
			<form onSubmit={(e) => {
				e.preventDefault();
				const newUser = {
					id: counter,
					username,
					email
				};
				setCounter((currentCounter) => currentCounter + 1);
				setUsers((currentUsersState) => [...currentUsersState, newUser]);
			}}>
				<div>
					<label htmlFor="username">Username</label>
					<input name="username" id="username" value={username}
						onChange={(e) => {
							setUsername(e.target.value);
						}} />
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input name="email" id="email"
						onChange={(e) => {
							setEmail(e.target.value)
						}} />
				</div>
				<button>Add user</button>
			</form>

			{users.map((user) =>
				(<UserDetails key={user.id} user={user} setUsers={setUsers} />) 	//never to use the index of array as key, it creates much problems and bugs while adding data like forms to be submit on backend. 
			)}

		</div>
	)
}