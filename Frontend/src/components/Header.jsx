import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

function Header() {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <header className='bg-white shadow-lg p-4 flex justify-between items-center'>
      <h1 className='text-2xl font-bold text-gray-900'>
        <Link to='/' className='hover:text-blue-600 transition'>
          🎟 TicketSync
        </Link>
      </h1>

      <div className='flex flex-wrap gap-2 sm:gap-4'>
        {/* Navigate to /post instead of setting active component */}
        <button
          className='bg-blue-600 text-white w-full sm:w-auto px-4 py-2 rounded-lg hover:bg-blue-700 transition text-center'
          onClick={() => navigate("/post")}>
          Post Ticket
        </button>

        <Link
          to='/login'
          className='bg-blue-600 text-white w-full sm:w-auto px-4 py-2 rounded-lg hover:bg-blue-700 transition text-center'>
          Login
        </Link>
      </div>
    </header>
  );
}

export default Header;
