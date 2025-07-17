import Link from "next/link";
import { routes, getRoute } from "./routes";

export default function Home() {
  const usersRoute = getRoute('users');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {routes.home.title}
        </h1>
        <p className="text-gray-600 mb-8">
          A Next.js application to display users from a public API
        </p>
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