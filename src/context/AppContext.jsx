import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) =>{
    const phone ="hihuhi"
return (
  <AppContext.Provider value={phone}>{props.children}</AppContext.Provider>
);
}


export default ContextProvider;


/*
1. creating the context: Create this appContext file
2. providing the context : wrap app in Context Provider

3. consuming the contaxt

*/