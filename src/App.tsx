import {FC, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import { UserContext } from './UserContext';

const App: FC = () => {
  const [ username, setUsername ] = useState('Bob');
  const switchUser = () => {
    if(username === 'Bob') {
      setUsername('Andy');
    } else {
      setUsername('Bob');
    }
  };

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ username }}>
          <nav>
            <ul>
              <li>
                <button onClick={switchUser}>Switch User</button>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" component={Index} />
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
