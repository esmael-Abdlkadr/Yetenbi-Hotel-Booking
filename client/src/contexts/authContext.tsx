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
//create context.
const AuthContext = createContext<AuthContextType | null>(null);
const useAuthContext = () => {
  return useContext(AuthContext);
};
const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<string | null>(
    localStorage.getItem("user") || null,
  );
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token") || null,
  );
  // get user data from local storage
  JSON.parse(localStorage.getItem("user") || "{}");
  // get token from local storage
  JSON.parse(localStorage.getItem("token") || "{}");
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
export { AuthContextProvider, useAuthContext };
