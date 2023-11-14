import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Stats from "./pages/Stats"
import "./styles/fonts.css"
const App = (): JSX.Element => {
  return (
    <>
      <main className="my-10  mx-auto max-w-4xl">
        <h1 className="m-5 font-light">Match ReportGg</h1>
        <Navbar />
        <div className="mx-2">
          <Routes>
            <Route path="/" element={<Stats />} />
            <Route path="/lineup" />
            <Route path="/zones" />
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
