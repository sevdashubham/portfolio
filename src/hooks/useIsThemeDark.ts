import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";

export enum ThemeType {
    System = 'system',
    Dark = 'dark',
}

export const useIsThemeDark = (): boolean => {
    const [currentStatus, setCurrentStatus] = useState(false);
    const { theme, systemTheme } = useTheme();

    const populateCurrentTheme = useCallback(() => {
        if (theme === ThemeType.System) {
            return systemTheme;
        }
        return theme;
    }, [theme, systemTheme]);

    useEffect(() => {
        setCurrentStatus(populateCurrentTheme() === ThemeType.Dark);
    }, [populateCurrentTheme]);

    return currentStatus;
};
