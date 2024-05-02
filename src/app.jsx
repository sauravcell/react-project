export default function App() {
//using ternary operator.	
	// const isAuthenticated = 1;

	// return isAuthenticated ? <div>Welcome User!</div> : <div>Not logged in</div>

//using if-else
	//NOT_VERIFIED || VERIFIED || ACOOUNT_DISABLED\
	const user_status = "verified";
	// if (user_status === "verified")
	// 	return (
	// 		<div>
	// 			<span>Allowed</span>
	// 		</div>
	// 	)
	// else if (user_status === 'not_verified')
	// 	return (
	// 		<div>
	// 			<span>not verifed</span>
	// 		</div>
	// 	)
	// else if (user_status === 'disabled')
	// 	return (
	// 		<div>
	// 			<span>Account diaabled</span>
	// 		</div>
	// 	)
//using switch
	switch (user_status) {
		case "verified":
			return (
				<div>
					<span>Allowed</span>
				</div>
			);

		case "not-verified":
			return (
				<div>
					<span>Allowed</span>
				</div>
			);

		case "disabled":
			return (
				<div>
					<span>account closed</span>
				</div>
			);
		default:
			return (
				<div>
					<span>contact Admin</span>
				</div>
			)
	};
}