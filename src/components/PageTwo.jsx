// PageTwo.jsx
import React, { useContext, useEffect } from 'react';
import VariableContext from './context';

function PageTwo() {
  const { currGuild, theme } = useContext(VariableContext);

  useEffect(() => {
    console.log(currGuild);
  }, [currGuild]);

  const handleClick = () =>(

    console.log(currGuild)
  )
  return (
    <div>
      <h1 onClick={handleClick} >Page Two</h1>
      <p>Current theme: {theme}</p>
    </div>
  );
}

export default PageTwo;
