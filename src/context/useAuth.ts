import React, { createContext, useEffect, useState } from "react";
import { User } from "../interfaces/User";
import { useNavigate } from "react-router-dom";
import { loginAPI, registerAPI } from "../services/AuthServices";
import axios from "axios";

// interface userContextType {
//   user: User | null;
//   token: string | null;
//   registerMethod: (username: string, password: string, email: string) => void;
//   loginUser: (username: string, password: string) => void;
//   logoutMethod: () => void;
//   isLoggedIn: () => boolean;
// }

// interface UserProviderProps {
//   children: React.ReactNode;
// }

// const UserContext = createContext<userContextType>({} as userContextType);

const useAuth = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [reftoken, setrefToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    const reftoken = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    setIsLoading(false); // Set loading to false after checking local storage
  }, []);

  const registerMethod = async (
    email: string,
    username: string,
    password: string
  ) => {
    await registerAPI({ email, username, password })
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res.data.access_token);
          localStorage.setItem("reftoken", res.data.refresh_token);
          const userObj = {
            user_id: res.data.user_id,
            username: res.data.username,
            email: email,
          };
          localStorage.setItem("user", JSON.stringify(userObj));
          setToken(res?.data.access_token);
          setrefToken(res?.data.refresh_token);
          setUser(userObj!);
          alert("User registered successfully");
          navigate("/login");
        }
      })
      .catch((e) => {
        alert("Error registering user");
      });
  };

  const loginUser = async (email: string, password: string) => {
    await loginAPI({ email, password })
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res.data.access_token);
          localStorage.setItem("reftoken", res.data.refresh_token);
          const userObj = {
            user_id: res.data.user_id,
            username: res.data.username,
          };
          localStorage.setItem("user", JSON.stringify(userObj));
          setToken(res?.data.access_token);
          setrefToken(res?.data.refresh_token);
          setUser(userObj!);
          console.log(res.data);

          alert("User registered successfully");
          console.log("logged in");
          
          navigate("/");
          console.log("redireted");
        }
      })
      .catch((e) => {
        alert("Error registering user" + e);
      });
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logoutMethod = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("reftoken");
    setUser(null);
    setToken(null);
    setrefToken(null);
    navigate("/login");
  };

  return {
    loginUser,
    user,
    token,
    reftoken,
    logoutMethod,
    registerMethod,
    isLoggedIn,
    isLoading, // Return isLoading state
  };
};

export default useAuth;

// export const useAuth = () => React.useContext(UserContext);
