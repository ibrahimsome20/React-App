import { Component } from 'react'
import { BrowserRouter as Router,Route,Routes }from 'react-router-dom';
import {Header,Footer,Container} from "./index"
import "./App.css"
import { Browse } from '../pages/browse/Browse';
import { Home } from '../pages/home/Home';

class App extends Component {
  render(){
  
     return(
      <>
      <Router>
      <Header></Header>
      <Container>
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<Browse/>} path='/Browse' />
        </Routes>
      </Container>
      <Footer></Footer>
      </Router>
      </>
      )
     ;   
     }
}

export default App;
