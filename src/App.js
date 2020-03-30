import React from 'react';
import Contact from './compenents/Contact';

function App() {
  return (
    <div className="App">
      <Contact 
        name="Yvonne Snyder"
        avatar="https://randomuser.me/api/portraits/women/27.jpg"
        online
      />
      <Contact 
        name="Dale Green"
        avatar="https://randomuser.me/api/portraits/men/58.jpg"
      />
      <Contact 
        name="Norma Douglas"
        avatar="https://randomuser.me/api/portraits/women/92.jpg"
        online
      />
    </div>
  );
}

export default App;
