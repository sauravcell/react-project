import PropTypes from "prop-types"
import { useState } from "react"

export function UserDetails({ user, setUsers }) {

	const [isEditing, setIsEditing] = useState(false);
	const [username, setUsername] = useState(user.username);
	const [email, setEmail] = useState(user.email)

//"EDIT || DELETE || SAVE" operations are done in immutable manner. filter & map is used to achieve immutability bcz they returns a new array using the present array.
	return (
		<div>
			<div>
				<button onClick={() => {
					setIsEditing((currentState) => !currentState);
				}}>Edit</button>

				<button onClick={
					() => {
						setUsers((currentUsersState) =>
							currentUsersState.filter(
								(currentUser) =>
									currentUser.id !== user.id
							)
						);
					}
				}
				>Delete</button> 


				{/* *#*#*#*___Logic for SAVE button to appears only in editing mode using && operator___*#*#*# */}
				{/* {isEditing && (
					<button					//updating the new value in an immutable manner 
						onClick={() => {
							// console.log(user)
							setUsers(
								(currentUsersState) => {
									return currentUsersState.map(
										(currentUser) => {		//currentUser points to the intance of the user wich is being edited.
											//using if-else updates the particular instance of user which is in editing mode.
											if (currentUser.id === user.id)
												return ({ ...currentUser, username, email });
											else return currentUser;
										}
									);
								}
							);
							setIsEditing(false);
						}}
					>save</button>
				)} */}

				{/*^%^%%^^%%___Logic for SAVE button to appears only in editing mode using ternary operator^%^%%^%^%___*/}

				{isEditing && (
					<button
						onClick={() => {
							setUsers((currentUsersState) =>
							(currentUsersState.map((currentUser) =>
								currentUser.id === user.id ? { ...currentUser, username, email } : currentUser	//passing the currentUser values and updating username nd email.
							))
							);
							setIsEditing(false);
						}}
					>save</button>
				)}

			</div>

			<div>
				<b>id: </b>
				<span>{user.id}</span>
				<br />
				<b>Username: </b>
				{/* Logic for input field to appear only in editing mode using ternary operator */}
				{isEditing ?
					<input
						id="username"
						value={username}
						onChange={(e) => {
							setUsername(e.target.value);
						}}
						name="username"
					/> :
					<span>{user.username}</span>}
				<br />
				<b>Email: </b>
				{isEditing ?
					<input
						id="email"
						type="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						name="username"
					/> :
					<span>{user.email}</span>}
				<br /><br />
			</div>
		</div>

	)
}

UserDetails.propTypes = {
	user: PropTypes.shape({
		id: PropTypes.number.isRequired,
		username: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
	}).isRequired,
	setUsers: PropTypes.func.isRequired,
}