import { createContext, useState } from "react";


export const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: any) => {

    const ThemeProvideer = {
        backgroundColor: 'black',
        color: 'white'
    }

    const lightTheme = {
        backgroundColor: 'white',
        color: 'black',
    };

    const [toggleTheme, setToggleTheme] = useState<any>(false);

    const themeStyles = toggleTheme ? ThemeProvideer : lightTheme;

    const handleClick = () => {
        setToggleTheme((prev: boolean) => !prev);
    }

    const contextValue = {themeStyles, handleClick, toggleTheme};

    return (
        <ThemeContext.Provider value={contextValue}>
           {children}
        </ThemeContext.Provider>
    )
}