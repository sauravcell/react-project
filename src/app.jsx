// import { LoginForm } from "./components/LoginForm";
// import { RegisterForm } from "./components/RegisterForm";
import { useEffect, useState } from "react"
// import { UserDetails } from "./components/UserDetails";


export default function App() {
	const [counter, setCounter] = useState(0);
	const [sync, setSync] = useState(false);

	//useEffect runs whenever App is rendered
	useEffect(
		// () => {		//callback function will be called always wheverver App is rendered/re-rendered 
		// 	document.title = "Saurav Developer"
		// 	console.log("Rendering");
		// })

		// 	()=> {		//callback function will be called only once if empty dependency array '[]' is passed (effective in API fetching after first time loading)
		// 	document.title = "Saurav Developer"
		// 	console.log("Rendering");
		// },[]) 

		() => {		//callback function will be called whenevr there is a state update mentioned in dependency array
			document.title = "Saurav Developer"+counter
			console.log("Rendering");
		}, [sync]); // should pass the state variables used insde useEffect in dependency array to always get the update value on re-rendering



	return (
		<div>
			<div>Clicked button {counter} times!</div>
			<button onClick={() => setCounter((count) => count + 1)}>Click me</button>
			<button onClick={() => { setSync((currentSync) => !currentSync) }}>sync</button>
		</div>
	)
}