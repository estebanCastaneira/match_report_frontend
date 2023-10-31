import { Routes, Route } from "react-router-dom";
import "./styles/fonts.css";
function App() {
  return (
    <>
      <main className="my-10  mx-auto max-w-4xl">
        <h1 className="m-5 font-light">Match ReportGg</h1>
        {/* <Navbar /> */}
        <div className="mx-2">
          <Routes>
            <Route path="/" />
            <Route path="/lineup" />
            <Route path="/zones" />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
