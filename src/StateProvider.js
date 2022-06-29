// setup date layer

// we need this to track the basket
import { createContext, useContext, useReducer } from "react";

export const StateContext=createContext();


// build a Provider

export const StateProvider=({reducer, initialState, children})=>(
    

    <StateContext.Provider value={useReducer(reducer, initialState)} >

    {children}

    </StateContext.Provider>


 )

//  this is how we use it inside of a component

export const useStateValue=()=>useContext(StateContext)