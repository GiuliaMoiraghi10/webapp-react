import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import MoviePage from "./pages/movies/MoviePage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies/:id" element={<MoviePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
