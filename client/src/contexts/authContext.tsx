import { createContext, ReactNode, useContext, useState } from "react";
interface AuthContextType {
  user: string | null;
  token: string | null;
  updateUser: (user: string) => void;
  updateToken: (token: string) => void;
}
interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const userFromStorage = localStorage.getItem("user");
  const tokenFromStorage = localStorage.getItem("token");

  const [user, setUser] = useState<string | null>(
    userFromStorage && userFromStorage !== "undefined"
      ? JSON.parse(userFromStorage)
      : null,
  );
  const [token, setToken] = useState<string | null>(
    tokenFromStorage && tokenFromStorage !== "undefined"
      ? tokenFromStorage
      : null,
  );

  const updateUser = (user: string) => {
    setUser(user);
    // save user in local storage.
    localStorage.setItem("user", JSON.stringify(user));
  };

  const updateToken = (token: string) => {
    setToken(token);
    // store token on local storage.
    localStorage.setItem("token", token);
  };

  return (
    <AuthContext.Provider value={{ user, updateUser, token, updateToken }}>
      {children}
    </AuthContext.Provider>
  );
};
//create context.
const AuthContext = createContext<AuthContextType | null>(null);
export const useAuthContext = () => {
  return useContext(AuthContext);
};
