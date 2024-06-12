import logo from './logo.svg';
import './App.css';
import { HashRouter as BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Hello from './pages/Hello'; // Assuming Hello.js is next to App.js
import Bye from './pages/Bye'; // Assuming Bye.js is next to App.js


function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
	  <nav>
            {/* Navigation links using Link component for user-friendly navigation */}
            <Link to="/hello" className="white-link">Hello</Link> {/* Link to the root path for the Hello component */}
            <Link to="/bye" className="white-link">Bye</Link> {/* Link to the /bye path for the Bye component */}
          </nav>
      </header>
	<Routes>
          <Route path="/hello" element={<Hello />} />
          <Route path="/bye" element={<Bye />} />
        </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
