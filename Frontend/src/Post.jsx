function Post(){
    return(
        <>
        <div className="bg-gray-800 flex items-center justify-center min-h-screen">
            <div className="bg-gray-400 p-8 rounded-2xl shadow-lg w-full max-w-lg">
                <h1 className="text-3xl font-bold text-center mb-4">
                    <a
                        href="http://127.0.0.1:3002/swaphome.html"
                        className="text-gray-900 hover:underline"
                        aria-label="Go to TicketSync Homepage"
                    >
                        🎟️ TicketSync
                    </a>
                </h1>

                <h2 className="text-2xl font-bold text-center mb-6">
                    Post Your Ticket
                </h2>

                <form id="ticketForm" className="space-y-5">
                    <div>
                        <label className="block text-gray-900 font-semibold mb-1">
                            Train Name
                        </label>
                        <input
                            type="text"
                            id="trainName"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="Eg: Vadnagar"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-900 font-semibold mb-1">
                            Train Number
                        </label>
                        <input
                            type="text"
                            id="trainNumber"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="Eg: 20960"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-900 font-semibold mb-1">
                                From City
                            </label>
                            <input
                                type="text"
                                id="fromCity"
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="Eg: Nadiad"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-900 font-semibold mb-1">
                                To City
                            </label>
                            <input
                                type="text"
                                id="toCity"
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="Eg: Surat"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-900 font-semibold mb-1">
                                Travel Date
                            </label>
                            <input
                                type="date"
                                id="travelDate"
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-900 font-semibold mb-1">
                                Travel Time
                            </label>
                            <input
                                type="time"
                                id="travelTime"
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-900 font-semibold mb-1">
                                Seat Type
                            </label>
                            <select
                                id="seatType"
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                required
                            >
                                <option value="Sleeper">Sleeper</option>
                                <option value="AC">AC</option>
                                <option value="General">General</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-900 font-semibold mb-1">
                                Ticket Quantity
                            </label>
                            <input
                                type="number"
                                id="ticketQuantity"
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                min="1"
                                placeholder="Eg: 1"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-900 font-semibold mb-1">
                            Contact Info
                        </label>
                        <input
                            type="text"
                            id="contactInfo"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="Eg:+91 9XXXXXXXXX"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-900 font-semibold mb-1">
                            Upload Ticket
                        </label>
                        <input
                            type="file"
                            id="ticketFile"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-all"
                    >
                        Submit Ticket
                    </button>
                </form>
            </div>
        </div>
        </>
    )
}
export default Post;