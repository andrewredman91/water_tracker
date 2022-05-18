import { useState } from 'react';
import MainPage from './pages/MainPage';
import { DarkMode } from './hooks/hooks';

function App() {

  const toggleDarkMode = DarkMode()



  return (
    <div className={toggleDarkMode.isDarkMode ? "dark" : "light"}>
      <button onClick={toggleDarkMode.toggleDarkMode}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
