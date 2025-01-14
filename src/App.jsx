import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import MoviePage from "./pages/movies/MoviePage"
import GlobalContext from "./context/globalContext"
import { useState } from 'react'


function App() {

  const [isLoading, setIsLoading] = useState(false)

  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies/:id" element={<MoviePage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
