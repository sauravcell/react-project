//custom hook implementation

import { useEffect } from "react";

export function useDocumentClick(){
    useEffect(()=>
    {
        console.log('useDocumentClick...');
        const handleDocumentClick = (e)=>{
            console.log('Clicked Document')
        }
        document.addEventListener('click',handleDocumentClick);
        
        return ()=>{
            document.removeEventListener('click',handleDocumentClick); 
        }
    }, [] ) //Dependency Array: Optional, controls when the effect runs (after every render, once on mount, or when specific values change). If you provide an empty array [], the effect will only run once after the initial render. If you omit the deps array altogether, the effect will run after every render
}