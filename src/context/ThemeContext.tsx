import { stat } from "fs";
import { createContext, ReactNode, useReducer } from "react";

interface ThemeState {
    theme:string;
 }

export enum ThemeActionTypes {
    LIGHT = 'light', 
    DARK =  'dark'
}

export interface ThemeAction{
    type : ThemeActionTypes
}

export const initialState : ThemeState = {
    theme:'light'
  } 

type ThemeContextType = {
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
};



export const themeReducer = (state: ThemeState, action: ThemeAction) => {
    switch(action.type){
        case ThemeActionTypes.LIGHT:{
            return {theme:'light'}
        }

        case ThemeActionTypes.DARK:{
            return {theme:{{state.theme}=='dark'?'light:'dark'}}
        }
        default:
            return state;
}
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

export function ThemeProvider({children}:{children:ReactNode}){
 const [state, dispatch] = useReducer(themeReducer, initialState);
 return(
 <ThemeContext.Provider value={{state, dispatch}}>
    {children}
 </ThemeContext.Provider>   
    
)}

