import { LoginForm } from "./components/LoginForm";


export default function App() {
	window.addEventListener("resize", 	//adding a resize event on a window/page 
	(e)=>{
		console.log(window.innerHeight,window.innerWidth);
	})
	
	return (
		<div>
			<LoginForm />
		</div>
	)
}