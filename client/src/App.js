import Restaurants from './components/Restaurants'
import Home from './components/Home'
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
function App() {
  return (
    
    <Router>
       <div className='App'>
         <header >
         <Link className='showlink' to='/'>
						Home
					</Link>
          <br/>

					<Link className='showlink' to='/restaurants'>
          Find Restaurants
					</Link>
          <br/>
          <Link className='showlink' to='/cart'>
          Cart
					</Link>
          <br/>
          <Link className='showlink' to='/userprofile'>
          User Profile
					</Link>
          <br/>
         </header>
         <div className='App-body'>
        <Routes>
            <Route exact path = '/' element = {<Home/>}/>
            <Route exact path = '/restaurants' element = {<Restaurants/>}/>
        </Routes>
        
        
        {/* <Route exact path="*"><NotFound /></Route> */}
        
        </div>
         
       </div>

    </Router>
  
  );
}

export default App;
