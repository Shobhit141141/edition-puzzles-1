import { Link } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row justify-center items-center relative gap-10">
      <Link
        to='/crosswords'
        className='text-4xl text-center text-white p-4 bg-[#292727] mountains-of-christmas font-bold rounded-lg'
      >
        CrossWords
      </Link>
      <Link
        to='/connections'
        className='text-4xl font-bold text-center text-white p-4 mountains-of-christmas font-bold bg-[#292727]'
      >
        Connections
      </Link>
    </div>
  );
}

export default App;
