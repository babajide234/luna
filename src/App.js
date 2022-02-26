import './App.css';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

import Home from './pages/Home';
import { ParallaxProvider } from 'react-scroll-parallax';
function App() {

  return (
    <ParallaxProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" render={<Home />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
