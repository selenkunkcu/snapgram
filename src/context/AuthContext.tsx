// Kullanıcı oturum durumunu uygulamanın çeşitli yerlerinde merkezi olarak yönetmektir.

import { getCurrentUser } from "../lib/appwrite/api";
import { IContextType, IUser } from "../types";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// empty users
const INITIAL_USER = {
  id: "",
  name: "",
  username: "",
  email: "",
  imageUrl: "",
  bio: "",
};

// to know whether we have a user logged in at all times
const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false as boolean,
};

// INITIAL_STATE ile oluşturulan context'tir. Uygulamanın farklı yerlerinden bu context'e erişilerek, kullanıcı bilgileri ve oturum durumu yönetilir.
const AuthContext = createContext<IContextType>(INITIAL_STATE);

// Uygulamanın sarıldığı ve kullanıcı bilgilerini yönetmek için kullanıldığı ana bileşendir.
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser>(INITIAL_USER);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  //has to be called whenever we reload our page
  const checkAuthUser = async () => {
    try {
      const hasSession = localStorage.getItem("cookieFallback") !== "[]" && localStorage.getItem("cookieFallback") !== null;
      if (!hasSession) {
        setIsAuthenticated(false);
        return false;
      }

      const currentAccount = await getCurrentUser();

      if (currentAccount) {
        setUser({
          id: currentAccount.$id,
          name: currentAccount.name,
          username: currentAccount.username,
          email: currentAccount.email,
          imageUrl: currentAccount.imageUrl,
          bio: currentAccount.bio,
        });

        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      console.log("Error -> checkAuthUser: ", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    //navigate the user back to the sign in screen
    if (localStorage.getItem("cookieFallback") === "[]" || localStorage.getItem("cookieFallback") === null) navigate("/sign-in");

    checkAuthUser(); //whenever we reload the page we recall the function
  }, []); // empty dependency array means it's only called whenever the app reloads

  const value = {
    user,
    isLoading,
    isAuthenticated,
    setUser,
    setIsAuthenticated,
    checkAuthUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useUserContext = () => useContext(AuthContext);
