import useLocalStorage from "./useLocalStorage";
import "./style.css";

const ThemeChange = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark'? 'light': 'dark');
    }

    return <div className="theme-change-container" data-theme={theme}>
        <div className="">
            <p>Hello World!</p>
            <button onClick={toggleTheme} className="button">Change Theme</button>
        </div>
    </div>
}

export default ThemeChange;