export const exampleCode = `import { createContext } from "react";

export const UserContext = createContext(null);`;

export const exampleCode1 = `    
    <UserContext.Provider value={{ contextValue, setContextValue }}>
    ...component tree
    </UserContext.Provider>
`;

export const exampleCode2 = `import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

const { contextValue } = useContext(UserContext);
`;
