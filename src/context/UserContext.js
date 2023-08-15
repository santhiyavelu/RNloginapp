import React, {createContext, useState, useEffect} from 'react';

const UserContext = createContext();

const UserProvider = ({children}) => {
  // const [isUserloggedin, setIsuserlogged] = useState(false);

  useEffect(() => {
    setIsuserlogged(isUserloggedin);
  }, []);

  const updateData = newdata => {
    setIsuserlogged(newdata);
  };

  console.log('userprovider running');
  return (
    <UserContext.Provider value={{isUserloggedin, setIsuserlogged}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};

// import React, {createContext, useContext, useState, useEffect} from 'react';

// const UserContext = createContext();

// export function UserContextProvider({children, value}) {
//   const [isloggedin, setIslogged] = useState(false);

//   useEffect(() => {
//     setData(false);
//   }, [value]);

//   const updateData = newdata => {
//     setData(newdata);
//   };

//   return (
//     <UserContext.Provider value={{data, updateData}}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// export function useUserContext() {
//   return useContext(UserContext);
// }
