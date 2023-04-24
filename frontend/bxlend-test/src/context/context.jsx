import React, { createContext, useEffect, useState } from "react";
// import  WebSocket from 'websocket'
const URL = "http://localhost:3001/v1/currencies";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [currencies, setCurrencies] = useState([]);
  const [updatedCurrencies, setUpdatedCurrencies] = useState([]);
  const [isLogin, setIsLogin] = useState(true);

  // integrating with websockets
  const connectToWS = () => {
    const websocket = new WebSocket("ws://localhost:3333/currency");

    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setCurrencies(data.data);
    };

    setTimeout(() => {
      connectToWS();
    }, 5000);
  };

  // fetching data from the backend
  const fetchAPI = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setCurrencies(data.currencies);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAPI();
    connectToWS();
    const login = setTimeout(() => {
      setIsLogin(false);
      return clearTimeout(login);
    }, 3000);
  }, []);

  return (
    <AppContext.Provider value={{ isLogin, currencies, updatedCurrencies }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
