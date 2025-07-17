import { UserCardProps } from "@/types/user";

export default function UserCard({ name, email, phone, website, company }: UserCardProps) {
  return (
<div className="bg-gradient-to-r from-white via-gray-100 to-white bg-opacity-70 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200 backdrop-blur-sm">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 font-medium">{company}</p>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center">
          <svg className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a 
            href={`mailto:${email}`} 
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm"
          >
            {email}
          </a>
        </div>
        
        <div className="flex items-center">
          <svg className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a 
            href={`tel:${phone}`} 
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
          >
            {phone}
          </a>
        </div>
        
        <div className="flex items-center">
          <svg className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
          </svg>
          <a 
            href={/^https?:\/\//.test(website) ? website : `https://${website}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm"
          >
            {website}
          </a>
        </div>
      </div>
    </div>
  );
}

// This component is designed to display user information in a card format.
// It includes the user's name, email, phone number, website, and company name.
// The card has a clean design with hover effects for better user interaction.