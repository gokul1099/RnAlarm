import React, { useContext } from "react"
import { ThemeContext } from "../utils/ThemeManager"
import { Theme } from "../Config/Theme"

const useGetTheme = () => {
    const { themeID, setThemeID } = useContext(ThemeContext)
    const getTheme = (themeID: string) => {
        return Theme.themeID
    }
    const getAppTheme = (themeId: string) => {
        var theme = getTheme(themeId);
        if (theme) {
            return { ...theme };
        }
        else {
            return { ...Theme['LIGHT'] }
        }

    };

    return getAppTheme(themeID)
}

export default useGetTheme