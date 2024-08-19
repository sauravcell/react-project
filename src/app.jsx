import { useEffect, useState } from "react"
import { LoginForm } from "./components/LoginForm";


export default function App() {

	const [toggle,setToggle] =useState(false);

	return (
		<div>
			<button onClick={()=>setToggle((currentState)=> !currentState)}>
				Toggle
			</button>
			{
			toggle && <LoginForm/>	// conditional rendering of login form based on the toggle button that will change state.
			}	
		</div>
	)
}