import { createContext, useContext, useReducer } from "react";

const AuthConext = createContext();

const initalState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
  }
}

function AuthPorvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initalState
  );

  function login(email, password) {}

  function logout() {}

  return <AuthConext.Provide>{children}</AuthConext.Provide>;
}

function useAuth() {
  const context = useContext();

  if (context === undefined)
    throw new Error("Authcontext was used out of AuthPorvider");

  return context;
}
