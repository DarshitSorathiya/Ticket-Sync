import React from "react";

function Header({ setActiveComponent }) {
  return (
    <header className="bg-white shadow-lg p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900">
        <a href="#" className="hover:text-blue-600 transition">🎟 TicketSync</a>
      </h1>

      <div className="flex flex-wrap gap-2 sm:gap-4">
        <button
          className="bg-blue-600 text-white w-full sm:w-auto px-4 py-2 rounded-lg hover:bg-blue-700 transition text-center"
          onClick={() => setActiveComponent("post")}
        >
          Post Ticket
        </button>

        <a
          href="http://127.0.0.1:3002/login.html"
          className="bg-blue-600 text-white w-full sm:w-auto px-4 py-2 rounded-lg hover:bg-blue-700 transition text-center"
        >
          Login
        </a>
      </div>
    </header>
  );
}

export default Header;
