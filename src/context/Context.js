import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { auth, db } from "../firebaseconfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { reducer } from "./Reducer";

const InitialState = {
  Notes: [],
  Archive: [],
  Bin: [],
};

const userContext = createContext("");
const userTheme = createContext({
  theme: "",
  setTheme: () => {},
  isExpanded: "",
  setIsExpanded: () => {},
});

export const UserContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [isExpanded, setIsExpanded] = useState(false);
  const [search, setSearch] = useState("");
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    console.log("working");
    if (user)
      getDoc(doc(db, "todo", user.user.uid)).then((res) => {
        console.log(res.data());
        if (res.exists()) {
          dispatch({ type: "ADD_FROM_FIREBASE", payload: res.data() });
        }
      });
  }, [user]);
  useEffect(() => {
    console.log("working");

    if (user) {
      setDoc(doc(db, "todo", user.user.uid), { state })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }, [state]);

  return (
    <userContext.Provider
      value={{
        login,
        signup,
        setUser,
        user,
        theme,
        setTheme,
        isExpanded,
        setIsExpanded,
        state,
        dispatch,
        search,
        setSearch,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(userContext);
};
