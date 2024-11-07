import ProfileImage from '../assets/Photo.jpg'
import {ChevronDown} from 'lucide-react'

export default function Header() {
    return (
      <header className="fixed left-64 right-0 top-0 z-10 flex items-center justify-between border-b bg-white px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Type to search..."
              className="w-64 rounded-lg border border-gray-200 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>
  
        <div className="flex items-center gap-4">
          <button className="rounded-lg bg-gray-100 p-2">
            <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
          <button className="relative rounded-full bg-gray-100 p-2">
            <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500 text-xs text-white"></span>
          </button>
          <button className="relative rounded-full bg-gray-100 p-2">
            <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500 text-xs text-white"></span>
          </button>
          <div className="flex items-center gap-2 mx-2">
            <div className="text-right">
              <div className="font-medium">Thomas Anree</div>
              <div className="text-sm text-gray-500">UX Designer</div>
            </div>
            <img src={ProfileImage} alt="Profile" className="mx-1 h-10 w-10 rounded-full" />
            <ChevronDown className={`h-4 w-4 `} />
          </div>
        </div>
      </header>
    )
  }