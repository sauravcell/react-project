import { createContext } from "react";

export const userContext =  createContext({     //pasing default values either object, number ,string; in this case object.
    id: 0,
    username: '',
    email: '',
    displayName: '',
});
// values should be set in context provider in App.jsx file