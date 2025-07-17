import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import UserCard from "@/components/UserCard";
import { User } from "@/types/user";

// This page fetches and displays a list of users from the JSONPlaceholder API
// It handles loading states and errors gracefully, providing a good user experience
// The users are displayed in a responsive grid layout with individual user cards
export default function UsersPage() {
  // State to store the list of users
  const [users, setUsers] = useState<User[]>([]);
  
  // State to manage loading state
  const [loading, setLoading] = useState<boolean>(true);
  
  // State to handle any errors during fetch
  const [error, setError] = useState<string | null>(null);

  // Fetch users once the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);         // Start loading
        setError(null);           // Reset previous error
        const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);  // Store users in state
      } catch (err) {
        // Set an error message if fetch fails
        setError("Failed to fetch users. Please try again later.");
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);        // Stop loading regardless of success or failure
      }
    };

    fetchUsers();
  }, []);

  // Display loading spinner while fetching data
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading users...</p>
        </div>
      </div>
    );
  }

  // Display error message if fetch failed
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          {/* Error icon */}
          <div className="text-red-500 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          {/* Error text */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          {/* Retry button */}
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Render list of users once data is successfully fetched
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header with back navigation and title */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-4"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          {/* Page title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Users Directory</h1>
          <p className="text-gray-600">
            Displaying {users.length} users from JSONPlaceholder API
          </p>
        </div>

        {/* Grid layout for user cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              phone={user.phone}
              website={user.website}
              company={user.company.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
