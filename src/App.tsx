import ContactForm from "./components/ContactForm"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import SurveyForm from "./components/SurveyForm"

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Sidebar />
        <Header />
        
        <main className="ml-64 pt-20">
          <div className="px-6">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-2xl font-semibold">Pro Form Layout</h1>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Dashboard</span>
                <span>/</span>
                <span className="text-blue-600">Pro Form Layout</span>
              </div>
            </div>
            
            <div className="grid gap-6 lg:grid-cols-2">
              <ContactForm />
              <SurveyForm />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
