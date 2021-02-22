import './App.css';
import './App.scss';
import NavBar from './Components/NavBar'
import HomePage from './Pages/HomePage'
import { Switch, Route } from 'react-router-dom'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/About' exact>
              <About />
            </Route>
            <Route path='/Portfolio' exact>
              <Portfolio />
            </Route>
            <Route path='/Blogs' exact>
              <Blogs />
            </Route>
            <Route path='/Contact' exact>
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
