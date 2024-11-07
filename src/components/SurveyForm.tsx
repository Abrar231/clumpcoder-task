export default function SurveyForm() {
    return (
      <div className="rounded-lg border bg-white p-6">
        <h2 className="mb-6 text-xl font-semibold">Survey Form</h2>
        
        <form className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
  
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
  
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              placeholder="Enter your age"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
  
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Which option best describes you?</label>
            <div className="relative">
              <select className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-8 focus:border-blue-500 focus:outline-none">
                <option value="">Select your subject</option>
                <option value="student">Student</option>
                <option value="professional">Professional</option>
                <option value="other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
  
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Would you recommend our site to a friend?</label>
            <div className="space-y-2">
              {['Yes', 'No', 'Maybe'].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input type="radio" name="recommendation" className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
  
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Which languages & frameworks you know?</label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded text-blue-600" />
              <span className="text-sm text-gray-700">C</span>
            </label>
          </div>
        </form>
      </div>
    )
  }