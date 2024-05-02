export function LoginForm() {
	return (
		//Example of registering form submit events with a HTML element
		<form 
		onSubmit={(e)=>{
			e.preventDefault();  //disables the default behavior of refreshing after  hitting login.
			const formData=new FormData(e.target);
			const username= formData.get("username");
			const password= formData.get("password");
			fetch("http://localhost:3002/api/login",
			{
				body:{
					username,
					password,
				},
				method: "POST",
			}
			);
		}}
		>
			<label htmlFor="username">Username</label>
			<br />
			<input 
			id="username" 
			onChange={(e)=>{		//onchange is detecting whenevr the input field is changed either in typing or file uploading
				console.log("username console")
				console.log(e.target.value)	//gives value typed by user
			}} 
			name="username"
			// onKeyDown={(e)=>console.log(e)}
			// onKeyDown={(e)=>console.log(e.key)} 

			/>
			<br />
			<label htmlFor="password">Password</label>
			<br />
			<input 
			id="password" 
			type="password" 
			onChange={(e)=>{
				console.log(`password: ${e.target.value}`);
			}}
			name="password"
			/>
			<br/>
			<button>Login</button>
		</form>
	)
}