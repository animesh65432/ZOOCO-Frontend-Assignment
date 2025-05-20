import React from 'react'
import { Remiders, AddRemider } from "./pages"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Remiders />}></Route>
      <Route path='/add' element={<AddRemider />}></Route>
    </Routes>
  </BrowserRouter>
)


export default App