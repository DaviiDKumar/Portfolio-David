import './App.css';
import { useState, useEffect } from 'react';
import Mainpage from './Pages/Mainpage';
import LoadingScreen from './Components/LoadingScreen';
import Customcursor from './Components/Customcursor';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('light');

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Fake loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Theme toggle function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
    <Customcursor />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Mainpage toggleTheme={toggleTheme} theme={theme} />
      )}
    </>
  );
}

export default App;
