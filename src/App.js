
import './scss/global.scss';
import React from 'react';
import './utils/firebase';
import { getAuth } from 'firebase/auth';
function App() {
 console.log(getAuth());
  return (
    <div className="App">
      <header className="App-header">
      OpnCast
      </header>
    </div>
  );
}

export default App;
