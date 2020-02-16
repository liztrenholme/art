import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Main from './components/main'
// import Contact from './components/contact'
// import NotFound from './components/NotFound'
// import About from './components/about'

function App() {
  return (
    <div>
      <Main />
    </div>
    // <Router>
    //   <div>
    //     <Switch>
    //       <Route path="/" exact component={Main} />
    //       <Route
    //         path="/about"
    //         render={({ match }) => <About match={match} />}
    //       />
    //       <Route
    //         path="/contact"
    //         render={({ match }) => <Contact match={match} />}
    //       />
    //       <Route
    //         path={!'/about' && !'/contact' && !'/'}
    //         component={NotFound}
    //       />
    //     </Switch>
    //   </div>
    // </Router>
  )
}

export default App
