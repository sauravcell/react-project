import { useContext } from 'react';
import { PostContentButton } from './PostContentButton';
import { userContext } from '../utils/contexts/userContext';

export function PostContent({data}){

    const userConntextData = useContext(userContext);
    return(
        <div>
            <PostContentButton data={data} />
            <div>{userConntextData.email}</div>
        </div>
    );
}
