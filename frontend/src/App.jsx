import { Toaster } from 'sonner';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from 'react-router';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
    <Toaster richColors/>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 Not Found */}
      </Routes>
    </BrowserRouter>
    
    </>

  );
}

export default App;
