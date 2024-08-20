import { useContext, useState } from "react";
import { PostContent } from './PostContent';
import { userContext } from "../utils/contexts/userContext";

export function PostContainer() {
    const [data, setData] = useState('Hello World');
    const userContextData = useContext(userContext)         //consuming the context

    return (
        <div>
            
            <PostContent data={data} />
            <div>{userContextData.displayName}</div>

        </div>
    )

}