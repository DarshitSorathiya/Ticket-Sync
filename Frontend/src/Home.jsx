function Home(){
    return(
        <>
         <main class="p-6 ">
        <h2 class="text-xl font-semibold mb-4 text-white">Available Tickets</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* <!-- Ticket Card --> */}
            <div class="bg-white text-gray-900 p-4 rounded-lg shadow-md">
                <h3 class="text-lg font-bold">Train Name: XYZ Express</h3>
                <h3 class="text-lg font-bold">Train Number: XXXXX</h3>
                <p><strong>From:</strong> City A</p>
                <p><strong>To:</strong> City B</p>
                <p><strong>Date:</strong> 10 March 2025</p>
                <p><strong>Time:</strong> 7:30 PM</p>
                <p><strong>Seats:</strong> 2</p>
                <p><strong>Seat Type:</strong> Sleeper</p>
                <p><strong>Contact:</strong> +91 9999999999</p>

                {/* <!-- Actions --> */}
                <div class="flex gap-4 mt-4">
                    <button class="bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-lg text-white">Edit</button>
                    <button class="bg-red-600 hover:bg-red-800 px-4 py-2 rounded-lg text-white">Remove</button>
                </div>
            </div>

            
            {/* <!-- More tickets can be added dynamically --> */}
        </div>
    </main>

        </>
    );
}
export default Home;