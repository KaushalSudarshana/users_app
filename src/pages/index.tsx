import Link from "next/link";
import { routes, getRoute } from "./routes";
// This is the main page of the Next.js application
// It serves as the landing page and provides a link to the Users page
export default function Home() {
  // Get the route object for the 'users' page from the route definitions
  const usersRoute = getRoute('users');
  
  return (
    // Full-page container with gradient background and center alignment
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      
      {/* Card container for welcome content */}
      <div className="max-w-md mx-auto text-center p-8 bg-white rounded-lg shadow-lg">
        
        {/* App title pulled from the routes object */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {routes.home.title}
        </h1>
        
        {/* Subtitle/description */}
        <p className="text-gray-600 mb-8">
          A Next.js application to display users from a public API
        </p>
        
        {/* Navigation button to Users page */}
        <Link
          href={usersRoute.path}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          {usersRoute.label}
        </Link>
      </div>
    </div>
  );
}
