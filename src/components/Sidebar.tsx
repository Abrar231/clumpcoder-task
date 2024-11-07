import { ReactElement, useState } from 'react'
import { ChevronDown, Layout, FileText, Table, FileInput, MessageSquare, Inbox, FileSpreadsheet, PieChart, Layers, Key, LayoutDashboard, CalendarDays, User, LucideProps } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom';

interface MenuItemProps {
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
    label: string,
    isOpen: boolean,
    hasSubmenu: boolean, 
    onClick: () => void,
    children?: ReactElement
}

interface SubMenuItemProps {
    label: string,
    isPro?: boolean,
    onClick?: () => void
}

interface openMenuProps{
        dashboard: boolean,
        calender: boolean,
        profile: boolean,
        task: boolean,
        forms: boolean,
        tables: boolean,
        pages: boolean,
        chart: boolean,
        uiElements: boolean,
        authentication: boolean,
}

export default function Sidebar() {
    const [openMenus, setOpenMenus] = useState<openMenuProps>({
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
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = (menu: string) => {
        setOpenMenus((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu as keyof openMenuProps]
        }))
    }

    const MenuItem = ({ icon: Icon, label, isOpen, hasSubmenu, onClick, children}: MenuItemProps) => (
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

    const SubMenuItem = ({ label, isPro, onClick }: SubMenuItemProps) => (
        <button onClick={onClick} className="flex w-full items-center justify-between rounded-lg p-2 text-sm text-gray-400 hover:bg-white/5">
            <span className={location.pathname.toLowerCase() === `/${label.replaceAll(' ','').toLowerCase()}` ? 'text-white': ''}>{label}</span>
            {isPro && <span className="rounded bg-blue-600 px-2 py-0.5 text-xs text-white">Pro</span>}
        </button>
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
                            <SubMenuItem label="eCommerce" onClick={() => navigate('/ecommerce')} />
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
                            <SubMenuItem label="Pro Form Layout" isPro={true}  onClick={() => navigate('/proFormLayout')} />
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