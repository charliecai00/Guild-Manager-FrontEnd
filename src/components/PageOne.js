// PageOne.jsx
import React, { useContext } from 'react';
import VariableContext from './context';

function PageOne() {
  const { currGuild, setCurrGuild, theme, setTheme} = useContext(VariableContext);
  
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));

    setCurrGuild({"id":4, "name":"dfaf"});
    console.log(currGuild)
  };

  return (
    <div>
      <h1>Page One</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default PageOne;
