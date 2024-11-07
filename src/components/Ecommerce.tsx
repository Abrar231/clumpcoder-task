import { Eye, ShoppingCart, ShoppingBag, Users } from 'lucide-react'
import Header from "./Header"
import Sidebar from "./Sidebar"
import StatCard from './StatCard'
import RevenueChart from './RevenueChart'
import ProfitChart from './ProfitChart'

const cards = [
  {
    title: "Total views",
    value: "$3,456K",
    change: "+0.43%",
    icon: Eye,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    changeColor: "text-green-600"
  },
  {
    title: "Total Profit",
    value: "$45.2K",
    change: "+4.35%",
    icon: ShoppingCart,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    changeColor: "text-green-600"
  },
  {
    title: "Total Product",
    value: "2,450",
    change: "+2.59%",
    icon: ShoppingBag,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    changeColor: "text-green-600"
  },
  {
    title: "Total Users",
    value: "3,456",
    change: "-0.95%",
    icon: Users,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    changeColor: "text-red-600"
  }
]

function Ecommerce() {
  return (
    <>
        <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <Header />
            
            <main className="ml-64 mt-5 pt-20 flex gap-5">
                <div className="flex flex-col gap-5 px-6 w-full">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {cards.map((card, index) => <StatCard key={index} card={card} /> )}
                    </div>
                    
                    <div className="flex gap-5">
                        <div className='w-2/3'>
                            <RevenueChart />
                        </div>
                        <div className='w-1/3'>
                            <ProfitChart />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </>
  )
}

export default Ecommerce