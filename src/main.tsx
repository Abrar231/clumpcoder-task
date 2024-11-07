import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import RevenueChart from './components/RevenueChart.tsx'
import TestChart from './components/TestChart.tsx'
import ProfitChart from './components/ProfitChart.tsx'
import Ecommerce from './components/Ecommerce.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <RevenueChart /> */}
    {/* <ProfitChart /> */}
    {/* <TestChart /> */}
    <Ecommerce />
  </StrictMode>,
)
