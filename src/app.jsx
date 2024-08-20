import { PostContainer } from "./components/PostContainer"
import { userContext } from "./utils/contexts/userContext"

export default function App() {

	return (
		<>
			<userContext.Provider value={{
			id: 1,
			username: 'saurav6215',
			email: 'ghosh@gmail.com',
			displayName: 'Saurav'
			}}>
			<div>
				<PostContainer/>
			</div>
			</userContext.Provider>
		</>
		//	If a component is placed outside the provider scope thn it will not get the latest values of the context, it will only be set to the default values.
		
	)
}