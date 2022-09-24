import { BrowserRouter,Link,Route , Routes } from 'react-router-dom';
import {Home} from "./pages/Home" ;
import {Private} from "./pages/Private" ;
import  "./App.css" ;
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Login } from './pages/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
      </Routes>
        <header className="App-header">
        <nav>
          <Link to="/">Home</Link> 
          <Link to="/private">Private</Link>
        </nav>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
