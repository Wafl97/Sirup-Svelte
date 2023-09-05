import { writable} from "svelte/store";
import type { Writable } from "svelte/store";

type Theme = {
    font_color: string;
    card_color: string;
    background_color: string;
    footer_color: string;
    link_color: string;
    link_visited_color: string;
    input_color: string;
    input_hover_color: string;
    tooltip_color: string;
}

const dark_theme: Theme = {
    font_color: "white",
    card_color: "rgba(125,125,125,.125)",
    background_color: "linear-gradient(90deg, rgb(15,15,25), rgb(25,25,35), rgb(15,15,25))",
    footer_color: "linear-gradient(90deg, rgb(10,10,20), rgb(20,20,30), rgb(10,10,20))",
    link_color: "cyan",
    link_visited_color: "magenta",
    input_color: "rgba(20,20,30)",
    input_hover_color: "rgba(50,50,60)",
    tooltip_color: "rgb(0,50,125)",
}

const light_theme: Theme = {
    font_color: "black",
    card_color: "rgba(125,125,125,.125)",
    background_color: "linear-gradient(90deg, rgb(220,220,230), rgb(230,230,240), rgb(220,220,230))",
    footer_color: "linear-gradient(90deg, rgb(200,200,210), rgb(210,210,220), rgb(200,200,210))",
    link_color: "blue",
    link_visited_color: "purple",
    input_color: "rgb(230,230,240)",
    input_hover_color: "rgba(200,200,210)",
    tooltip_color: "rgb(150,200,255)",
}

const default_themes: Record<string, Theme> = {
    light_theme: light_theme,
    dark_theme: dark_theme,
}

const theme: Writable<Theme> = writable<Theme>(undefined);

const initTheme = () => {
    const storedThemeName = localStorage.getItem("theme");
    changeTheme(storedThemeName);
}

const changeTheme = (themeName: string | null) => {
    console.log(themeName);
    if (!themeName) {
        themeName = "light_theme";
    }
    let newTheme: Theme = default_themes[themeName];
    localStorage.setItem("theme",themeName);
    theme.set(newTheme);
}

export { theme, default_themes, initTheme, changeTheme }

