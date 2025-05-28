import {Navbar} from './Components/Navbar/Navbar'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {About, Contact, Services, Home} from './Components/Pages';
import viteLogo from "../public/vite.svg";
import reactLogo from "./assets/react.svg";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <div className="credit">
        <a href="https://vite.dev" target="_blank">
           <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
           <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  );
}

export default App

    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>