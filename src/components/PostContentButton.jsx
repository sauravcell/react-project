import { useContext } from "react"
import { userContext } from "../utils/contexts/userContext"

export function PostContentButton({data}){

    const userContextData = useContext(userContext);
    return(
        <div>
            {userContextData.id}
        </div>
    )
}