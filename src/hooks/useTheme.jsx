import { useEffect, useState } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      };

      useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
      }, [theme]);
      return [toggleTheme]
};

export default useTheme;