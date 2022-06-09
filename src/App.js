import React, { createContext, useReducer } from 'react'
import { Route, Routes } from 'react-router-dom';
// this is for animation
import { AnimatePresence } from 'framer-motion';
import { About, Contact, CreateContainer, Header, MainContainer, Profile } from './components';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

import {initialState, reducer} from './reducer/UseReducer';

export const UserContext = createContext()
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{state, dispatch}}>
      <AnimatePresence exitBeforeEnter>
        <div className="w-screen h-auto flex flex-col">
          <Header/>
          <main className="mt-16 md:mt-24 px-4 md:px-16 py-4 w-full">
              <Routes>
                  <Route path="/*" element={<MainContainer/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/createItem" element={<CreateContainer/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/logout" element={<Logout/>}/>
              </Routes>
          </main>
        </div>
      </AnimatePresence>
    </UserContext.Provider>
  )
}

export default App;
