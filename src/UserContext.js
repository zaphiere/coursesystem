import React from 'react';

// Creates a Context Object
// A context object, as sthe name states is a data type of an object that can be used to store information that can be shared to other components within the aoo
//  we use this to avoide the use of prop-drilling
const UserContext = React.createContext();

// Provider component -> it allows the components to consume /use the context object and supply the necessary information needed to the context object
export const UserProvider = UserContext.Provider;

export default UserContext;

