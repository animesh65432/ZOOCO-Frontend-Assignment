import React from 'react'
import { Remiders, AddRemider } from "./pages"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from './components'

const App: React.FC = () => (
  <BrowserRouter>
    <Routes >
      <Route path="/" element={<Layout />}>
        <Route index path='/' element={<Remiders />}></Route>
        <Route path='/add' element={<AddRemider />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)


export default App