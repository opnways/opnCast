
import './scss/global.scss';
import React, {useState} from 'react';
import './utils/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Auth } from './pages';
import { LoggedNavigation } from './routes';
function App() {

  const [user, setUser] = useState(undefined);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    setUser(user)
  })
  if(user === undefined) return null;
  return user ? <LoggedNavigation /> : <Auth />;
}

export default App;
