import React, { useContext, createContext } from "react";
import { useLocalStorage } from "./use-localstorage";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useLocalStorage("token", "null");

  const signin = (username, password) => {
    // return firebase
    //   .auth()
    //   .signInWithusernameAndPassword(username, password)
    //   .then((response) => {
    //     setUser(response.user);
    //     return response.user;
    //   });
  };

  const signup = (username, password) => {
    // return firebase
    //   .auth()
    //   .createUserWithusernameAndPassword(username, password)
    //   .then((response) => {
    //     setUser(response.user);
    //     return response.user;
    //   });
  };

  const signout = () => {
    // return firebase
    //   .auth()
    //   .signOut()
    //   .then(() => {
    //     setUser(false);
    //   });
  };

  return {
    user,
    setUser,

    signin,

    signup,

    signout,
  };
}
