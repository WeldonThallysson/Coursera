import Header from './components/Header';
import Footer from './components/Footer'; 

import { RouterProvider } from 'react-router';
import { route } from './routes/routes';
import './App.css'

function App() {

  
  return (
    <div className='container__global'>
      <Header />
      <RouterProvider router={route}/> 
      <Footer />
    </div>
  );
}

export default App;
