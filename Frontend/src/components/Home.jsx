import React from "react";

const tickets = [
  {
    id: 1,
    trainName: "XYZ Express",
    trainNumber: "XXXXX",
    from: "City A",
    to: "City B",
    date: "10 March 2025",
    time: "7:30 PM",
    seats: 2,
    seatType: "Sleeper",
    contact: "+91 9999999999",
  },
  {
    id: 2,
    trainName: "ABC Superfast",
    trainNumber: "YYYYY",
    from: "City C",
    to: "City D",
    date: "12 March 2025",
    time: "8:00 AM",
    seats: 1,
    seatType: "AC 3 Tier",
    contact: "+91 8888888888",
  },
];

function TicketCard({ ticket }) {
  return (
    <div className='bg-white text-gray-900 p-4 rounded-lg shadow-md w-full text-left'>
      <h3 className='text-lg font-bold'>Train Name: {ticket.trainName}</h3>
      <h3 className='text-lg font-bold'>Train Number: {ticket.trainNumber}</h3>
      <p>
        <strong>From:</strong> {ticket.from}
      </p>
      <p>
        <strong>To:</strong> {ticket.to}
      </p>
      <p>
        <strong>Date:</strong> {ticket.date}
      </p>
      <p>
        <strong>Time:</strong> {ticket.time}
      </p>
      <p>
        <strong>Seats:</strong> {ticket.seats}
      </p>
      <p>
        <strong>Seat Type:</strong> {ticket.seatType}
      </p>
      <p>
        <strong>Contact:</strong> {ticket.contact}
      </p>

      {/* Actions */}
      <div className='flex gap-4 mt-4'>
        <button className='bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-lg text-white'>
          Edit
        </button>
        <button className='bg-red-600 hover:bg-red-800 px-4 py-2 rounded-lg text-white'>
          Remove
        </button>
      </div>
    </div>
  );
}

function Home() {
  return (
    <main className='p-6 bg-gray-900 min-h-screen w-full'>
      <h2 className='text-xl font-semibold mb-4 text-white'>
        Available Tickets
      </h2>

      {/* Ensure full width */}
      <div className='w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
