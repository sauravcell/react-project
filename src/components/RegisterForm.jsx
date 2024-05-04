import { useState } from "react"

export function RegisterForm() {

	// const [username, setUsername] = useState("");
	// const [password, setPassword] = useState("");
	// const [displayName, setDisplayName] = useState("");

	const [formFields, setformFields] = useState({
		username: "",
		password: "",
		displayName: "",
	});
	const isDisabled = !formFields.username || !formFields.password || !formFields.displayName;

	return (
		<form>
			<div>
				{console.log(formFields)}
				<label htmlFor="username">Username:</label>
				<input id="username"
					value={formFields.username}
					// onChange={(e) => { setUsername(e.target.value) }} 		//this method to update variable is not for objects.
					onChange={(e) => {
						setformFields((currrentState) => ({		//creates a copy of the entire present state of formFields
							...currrentState,	//this spread oprator is used to preseve all key-value pairs/state of formFields with previous values bfr updating username

							username: e.target.value		//finally this will update the username or the field to be updated is targeted.
						}))	
					}}

				/>
			</div>
			<div>
				<label htmlFor="password">Password:</label>
				<input id="password"
					value={formFields.password}
					// onChange={(e) => { setPassword(e.target.value) }} 		//this method to update state is not  for objects.
					onChange={(e) => {
						setformFields((currrentState) => ({		//creates a copy of the entire present state of 	 formFields
							...currrentState,		//this spread oprator is used to preseve all key-value pairs/state of formFields with previous values bfr updating password

							password: e.target.value		//finally this will update the password or the field to be updated is targeted.
						}))	
					}}

				/>
			</div>
			<div>
				<label htmlFor="displayName">Display Name:</label>
				<input id="displayName"
					value={formFields.displayName}
				// onChange={(e) => { setDisplayName(e.target.value) }} 		//this method to update state is not for objects.
				onChange={(e) => {
					setformFields((currrentState) => ({		//creates a copy of the entire present state of formFields
						...currrentState,		//this spread oprator is used to preseve all key-value pairs/state of formFields with previous values bfr updating displayName

						displayName: e.target.value		//finally this will update the displayName or the field to be updated is targeted.
					}))	
				}}
				/>
			</div>
			{/* always the upadated current values of the variables is displayed after updating them using useState */}
			<div>
				<span>{'USERNAME: ' + formFields.username}	
				</span><br />
				<span>{'PASSWORD: ' + formFields.password}
				</span><br />
				<span>{'DISPLAYNAME: ' + formFields.displayName}
				</span><br />
				<button disabled={isDisabled}>Submit</button>
			</div>
		</form>
	)
}