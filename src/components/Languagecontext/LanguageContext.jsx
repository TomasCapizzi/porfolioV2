import React, {createContext, useState} from "react";

export const LanguageContext = createContext()

export default function LanguageContextProvider({children}){


    const [english, setEnglish] = useState(true);

    function setSpanishLanguage(){
      setEnglish(false)
    }
  
    function setEnglishLanguage(){
      setEnglish(true)
    }  


    return (
        <LanguageContext.Provider value={{english, setEnglish,setSpanishLanguage, setEnglishLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

