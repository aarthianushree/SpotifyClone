import React from "react";
import { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext(); // creating the context, preparing the DataLayer

export const DataLayer = ( {initialState, reducer , children} ) =>   (          // basically here children refers to the <App /> , which got wrapped inside the <dataLayer/> in index.js
     <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
       {children}
     </DataLayerContext.Provider>
);         

//state provider

export const useDataLayerValue = () => useContext(DataLayerContext)               // useContext is a hook 