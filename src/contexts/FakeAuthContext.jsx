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

    case "logout":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };

    default:
      throw new Errow("Unknownn action");
  }
}

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthPorvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initalState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthConext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthConext.Provider>
  );
}

function useAuth() {
  const context = useContext();

  if (context === undefined)
    throw new Error("Authcontext was used out of AuthPorvider");

  return context;
}

export { AuthPorvider, useAuth };
