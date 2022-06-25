import React, { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Theme } from '../Config/Theme';
const STORAGE_KEY = 'THEME_ID';
const ThemeContext = React.createContext({});

export const ThemeContextProvider = ({ children }: any) => {
    const [themeID, setThemeID] = useState("");
    useEffect(() => {
        (async () => {
            const storedThemeID = await AsyncStorage.getItem(STORAGE_KEY);
            if (storedThemeID) {
                setThemeID(storedThemeID);
            } else {
                setThemeID("LIGHT");
            }
        })();
    }, []);

    return (
        <ThemeContext.Provider value={{ themeID, setThemeID }}>
            {children}
        </ThemeContext.Provider>
    );
};


export function withTheme(Component: any) {
    return props => {
        const { setThemeID, themeID } = useContext(ThemeContext);
        const getTheme = (themeID: String) => Theme[themeID]
        const setTheme = (themeId: String) => {
            AsyncStorage.setItem(STORAGE_KEY, themeId);
            setThemeID(themeId);
        };
        const getAppTheme = (themeId: String) => {
            var theme = getTheme(themeId);
            return { ...theme };
        };

        return (
            <Component
                {...props}
                themes={Theme}
                theme={getAppTheme(themeID)}
                setTheme={setTheme}
                themeID={themeID}
            />
        );
    };
}