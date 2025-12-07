import { createContext, useState, type ReactNode } from "react";

type TUserData = {
  name: string;
  email: string;
};

type TAuthContext = {
  user: TUserData | null;
  login: (userData: TUserData) => void;
  logout: () => void;
};

const AuthContext = createContext<TAuthContext | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // Initialize user state from localStorage if available
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  // Function to handle user login
  const login = (userData: TUserData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Function to handle user logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export default AuthContext;
