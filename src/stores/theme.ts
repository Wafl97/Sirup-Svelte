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
    input_color: "rgba(125,125,125,.25)",
    input_hover_color: "rgba(125,125,125,.5)",
    tooltip_color: "rgb(0,50,125)",
}

const light_theme: Theme = {
    font_color: "black",
    card_color: "rgba(125,125,125,.125)",
    background_color: "linear-gradient(90deg, rgb(220,220,230), rgb(230,230,240), rgb(220,220,230))",
    footer_color: "linear-gradient(90deg, rgb(200,200,210), rgb(210,210,220), rgb(200,200,210))",
    link_color: "blue",
    link_visited_color: "purple",
    input_color: "rgba(125,125,125,.25)",
    input_hover_color: "rgba(125,125,125,.5)",
    tooltip_color: "rgb(150,200,255)",
}

const default_themes = {
    light_theme: light_theme,
    dark_theme: dark_theme,
}

const theme: Writable<Theme> = writable(undefined);

const initTheme = () => {
    const storedThemeName = localStorage.getItem("theme");
    changeTheme(storedThemeName);
}

const changeTheme = (themeName: string) => {
    console.log(themeName)
    let newTheme: Theme = default_themes[themeName];
    if (!newTheme) {
        newTheme = light_theme;
        themeName = "light_theme";
    }
    localStorage.setItem("theme",themeName);
    theme.set(newTheme);
}

export { theme, default_themes, initTheme, changeTheme }

