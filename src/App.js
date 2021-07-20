
import './App.css'
import NavBar from './Components/NavBar'
import HomePage from './Pages/HomePage'
import { Switch, Route } from 'react-router-dom'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import { useState } from 'react'

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
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
