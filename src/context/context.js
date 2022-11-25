import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer";

const AppContext = React.createContext();

const API = "https://dummyjson.com/products";

const initialState = {
  name: "",
  image: "",
  services: [],
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Lokesh Debnath",
        image: "./images/hero.svg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Lokesh Debnath",
        image: "./images/about1.svg",
      },
    });
  };

  // To get the API data
  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // To call the API

  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// Global custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
