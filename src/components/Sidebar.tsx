// export default function Sidebar() {
//     return (
//       <aside className="fixed left-0 top-0 h-full w-64 bg-[#1a1f37] text-white">
//         <div className="flex items-center gap-2 p-4">
//           <div className="h-8 w-8 rounded-lg bg-blue-600"></div>
//           <span className="text-xl font-semibold">TailAdmin</span>
//         </div>
        
//         <nav className="p-4">
//           <div className="space-y-4">
//             <div className="flex items-center gap-2 rounded-lg p-2 hover:bg-white/10">
//               <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//               <span>Task</span>
//             </div>
            
//             <div className="space-y-2">
//               <div className="flex items-center gap-2 rounded-lg bg-white/10 p-2">
//                 <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//                 </svg>
//                 <span>Forms</span>
//               </div>
//               <div className="ml-4 space-y-2">
//                 <div className="flex items-center justify-between rounded-lg p-2 text-gray-400">
//                   <span>Form Elements</span>
//                 </div>
//                 <div className="flex items-center justify-between rounded-lg p-2 text-gray-400">
//                   <span>Pro Form Elements</span>
//                   <span className="rounded bg-blue-600 px-2 py-0.5 text-xs">Pro</span>
//                 </div>
//                 <div className="flex items-center justify-between rounded-lg p-2 text-gray-400">
//                   <span>Form Layout</span>
//                 </div>
//                 <div className="flex items-center justify-between rounded-lg p-2 text-white">
//                   <span>Pro Form Layout</span>
//                   <span className="rounded bg-blue-600 px-2 py-0.5 text-xs">Pro</span>
//                 </div>
//               </div>
//             </div>
  
//             <div className="pt-4">
//               <div className="px-4 text-sm text-gray-400">SUPPORT</div>
//               <div className="space-y-2 pt-2">
//                 <div className="flex items-center justify-between rounded-lg p-2">
//                   <div className="flex items-center gap-2">
//                     <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
//                     </svg>
//                     <span>Messages</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <span className="rounded bg-blue-600 px-2 py-0.5">5</span>
//                     <span className="rounded bg-blue-600 px-2 py-0.5 text-xs">Pro</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </aside>
//     )
//   }





import { useState } from 'react'
import { ChevronDown, Layout, FileText, Table, FileInput, MessageSquare, Inbox, FileSpreadsheet, PieChart, Layers, Key, LayoutDashboard, CalendarDays, User } from 'lucide-react'


export default function Sidebar() {
    const [openMenus, setOpenMenus] = useState({
        dashboard: false,
        calender: false,
        profile: false,
        task: false,
        forms: true,
        tables: false,
        pages: false,
        chart: false,
        uiElements: false,
        authentication: false,
    })

    const toggleMenu = (menu) => {
        setOpenMenus(prevState => ({
            ...prevState,
            [menu]: !prevState[menu]
        }))
    }

    const MenuItem = ({ icon: Icon, label, isOpen, hasSubmenu, onClick, children }) => (
        <div>
            <button
                onClick={onClick}
                className={`flex w-full items-center justify-between rounded-lg p-2 text-sm ${isOpen ? 'bg-white/10' : 'hover:bg-white/10'}`}
                aria-expanded={isOpen}
            >
                <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    <span>{label}</span>
                </div>
                {hasSubmenu && (
                    <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                )}
                {!hasSubmenu && children}
            </button>
            {isOpen && children}
        </div>
    )

    const SubMenuItem = ({ label, isPro }) => (
        <div className="flex items-center justify-between rounded-lg p-2 text-sm text-gray-400 hover:bg-white/5">
            <span>{label}</span>
            {isPro && <span className="rounded bg-blue-600 px-2 py-0.5 text-xs text-white">Pro</span>}
        </div>
    )

  return (
    <aside className="fixed left-0 top-0 h-full w-64 overflow-y-auto bg-[#1a1f37] text-white no-scrollbar">
        <div className="flex items-center gap-2 p-4">
            <div className="h-8 w-8 rounded-lg bg-blue-600"></div>
            <span className="text-xl font-semibold">TailAdmin</span>
        </div>
        
        <nav className="p-4">
            <div className="pt-4">
                <div className="px-4 text-xs font-semibold uppercase text-gray-400">Menu</div>
                <div className="mt-2 space-y-2">
                    <MenuItem
                        icon={LayoutDashboard}
                        label="Dashboard"
                        isOpen={openMenus.dashboard}
                        hasSubmenu={true}
                        onClick={() => toggleMenu('dashboard')}
                    >
                        <div className="ml-7 mt-2 space-y-2">
                            <SubMenuItem label="eCommerce" />
                            <SubMenuItem label="Analytics" isPro={true} />
                            <SubMenuItem label="Marketing" isPro={true} />
                            <SubMenuItem label="CRM" isPro={true} />
                            <SubMenuItem label="Stocks" isPro={true} />
                        </div>
                    </MenuItem>

                    <MenuItem
                        icon={CalendarDays}
                        label="Calender"
                        isOpen={openMenus.calender}
                        hasSubmenu={true}
                        onClick={() => toggleMenu('calender')}
                    />

                    <MenuItem
                        icon={User}
                        label="Profile"
                        isOpen={openMenus.profile}
                        hasSubmenu={true}
                        onClick={() => toggleMenu('profile')}
                    />
                    
                    <MenuItem
                        icon={Layout}
                        label="Task"
                        isOpen={openMenus.task}
                        hasSubmenu={true}
                        onClick={() => toggleMenu('task')}
                    />
                    
                    <MenuItem
                        icon={FileText}
                        label="Forms"
                        isOpen={openMenus.forms}
                        hasSubmenu={true}
                        onClick={() => toggleMenu('forms')}
                    >
                        <div className="ml-7 mt-2 space-y-2">
                            <SubMenuItem label="Form Elements" />
                            <SubMenuItem label="Pro Form Elements" isPro={true} />
                            <SubMenuItem label="Form Layout" />
                            <SubMenuItem label="Pro Form Layout" isPro={true} />
                        </div>
                    </MenuItem>
                    
                    <MenuItem
                        icon={Table}
                        label="Tables"
                        isOpen={openMenus.tables}
                        hasSubmenu={true}
                        onClick={() => toggleMenu('tables')}
                    />
                    
                    <MenuItem
                        icon={FileInput}
                        label="Pages"
                        isOpen={openMenus.pages}
                        hasSubmenu={true}
                        onClick={() => toggleMenu('pages')}
                    />
                </div>
            </div>

            <div className="pt-4">
                <div className="px-4 text-xs font-semibold uppercase text-gray-400">Support</div>
                <div className="mt-2 space-y-2">
                    <MenuItem
                        icon={MessageSquare}
                        label="Messages"
                        isOpen={false}
                        hasSubmenu={false}
                        onClick={() => {}}
                    >
                        <div className="flex items-center gap-2">
                            <span className="rounded bg-blue-600 px-2 py-0.5 text-xs">5</span>
                            <span className="rounded bg-blue-600 px-2 py-0.5 text-xs">Pro</span>
                        </div>
                    </MenuItem>
                    
                    <MenuItem
                        icon={Inbox}
                        label="Inbox"
                        isOpen={false}
                        hasSubmenu={false}
                        onClick={() => {}}
                    >
                        <span className="rounded bg-blue-600 px-2 py-0.5 text-xs">Pro</span>
                    </MenuItem>
                    
                    <MenuItem
                        icon={FileSpreadsheet}
                        label="Invoice"
                        isOpen={false}
                        hasSubmenu={false}
                        onClick={() => {}}
                    >
                        <span className="rounded bg-blue-600 px-2 py-0.5 text-xs">Pro</span>
                    </MenuItem>
                </div>
            </div>

            <div className="pt-4">
                <div className="px-4 text-xs font-semibold uppercase text-gray-400">Others</div>
                <div className="mt-2 space-y-2">
                    <MenuItem
                        icon={PieChart}
                        label="Chart"
                        isOpen={openMenus.chart}
                        hasSubmenu={true}
                        onClick={() => toggleMenu('chart')}
                    />
                    
                    <MenuItem
                        icon={Layers}
                        label="UI Elements"
                        isOpen={openMenus.uiElements}
                        hasSubmenu={true}
                        onClick={() => toggleMenu('uiElements')}
                    />
                    
                    <MenuItem
                        icon={Key}
                        label="Authentication"
                        isOpen={openMenus.authentication}
                        hasSubmenu={true}
                        onClick={() => toggleMenu('authentication')}
                    />
                </div>
            </div>
        </nav>
    </aside>
  )
}