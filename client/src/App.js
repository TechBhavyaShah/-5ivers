import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Account from './components/account/Account'
import Home from './components/account/Home'
import Landing from './components/account/Landing'
import Navigation from './components/account/Navigation'
import SignIn from './components/account/SignIn'
import SignUp from './components/account/SignUp'
import Restaurant from './components/restaurant/Restaurant'
import { AuthProvider } from './firebase/Auth'

import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <div className="App">
            <header className="App-header">
              <Navigation />
            </header>
          </div>
        </div>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="landing" element={<Landing />} />
          {/* Private route */}
          <Route path="/home" element={<Home />} />
          {/* Private route */}
          <Route path="/account" element={<Account />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/restaurant/:restaurantId" element={<Restaurant />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
