import React from 'react'
import Hero from './component/Header/Hero'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './component/Header/Header'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' 
        element={<Hero/>}
        >
        
        </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App