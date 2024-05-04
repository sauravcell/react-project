// import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";


export default function App() {
	window.addEventListener("resize", 	//adding a resize event on a window/page 
	(e)=>{
		console.log(window.innerHeight,window.innerWidth);
	})
	
	return (
		<div>
			<RegisterForm/>
		</div>
	)
}