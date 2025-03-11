import Post from './Post'
import Login from './Login'
import SignUp from './SignUp'


function Footer(){
return(
    <>
        <footer class="bg-gray-900 text-gray-300 p-6 mt-10">
      <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* <!-- About Section --> */}
          <div>
              <h3 class="text-lg font-semibold text-white mb-3">About TicketSync</h3>
              <p class="text-sm">TicketSync is a hassle-free platform for exchanging train tickets and planning shared rides. Connect with fellow travelers and make your journey smoother.</p>
          </div>
  
          {/* <!-- Quick Links --> */}
          <div>
              <h3 class="text-lg font-semibold text-white mb-3">Quick Links</h3>
              <ul class="space-y-2">
                  <li><a href="http://127.0.0.1:3002/swaphome.html" class="hover:text-blue-400 transition">Home</a></li>
                  <li><a href="http://127.0.0.1:3000/homeswap.html" class="hover:text-blue-400 transition">Post a Ticket</a></li>
                  <li><a href="http://127.0.0.1:3002/login.html" class="hover:text-blue-400 transition">Login</a></li>
                  <li><a href="http://127.0.0.1:3002/signup.html" class="hover:text-blue-400 transition">Sign Up</a></li>
              </ul>
          </div>
  
          {/* <!-- Contact Section --> */}
          <div>
              <h3 class="text-lg font-semibold text-white mb-3">Contact Us</h3>
              <p class="text-sm">✉ sarvakmakani@gmail.com</p>
              <p class="text-sm">✉ darshitsorthiya@gmail.com</p>
          </div>
      </div>
  
      {/* <!-- Bottom Section --> */}
      <div class="border-t border-gray-700 mt-6 pt-4 text-center">
          <p class="text-sm">&copy; 2025 TicketSync. All rights reserved.</p>
      </div>
  </footer>
    </>
);
}
export default Footer