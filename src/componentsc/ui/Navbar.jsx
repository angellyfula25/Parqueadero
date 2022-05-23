import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Navbar = (props) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('user');
    navigate('../login')
  }
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  return (
    <div className='px-8 py-5 w-full bg-[#7be883] rounded-bl-lg'>
      <h1>Autos Colombia</h1>
      <button 
        onClick={handleLogOut}
        type="button" 
        className="absolute right-3 top-3 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Salir</button>
    </div>
  )
}

