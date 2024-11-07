export default function ContactForm() {
    return (
      <div className="rounded-lg border bg-white ">
        <h2 className="text-xl font-semibold px-6 py-4">Contact Form 2</h2>
        <hr />
        
        <form className="space-y-6 p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">First name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Last name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
  
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="yourmail@gmail.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                placeholder="(321) 5555-0115"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
  
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Select option</label>
            <div className="grid grid-cols-2 gap-4">
              {['Graphics Design', 'Web Development', 'Logo Design', 'Others'].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input type="radio" name="service" className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
  
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Type your message"
              rows={6}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700 focus:outline-none"
          >
            Send Message
          </button>
        </form>
      </div>
    )
  }