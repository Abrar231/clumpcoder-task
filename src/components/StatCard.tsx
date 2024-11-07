import { LucideProps, ArrowDown, ArrowUp } from "lucide-react"

interface Props {
    card: {
        title: string,
        value: string,
        change: string,
        icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
        iconBg: string,
        iconColor: string,
        changeColor: string
    }
}

function StatCard({card}: Props) {
    const Icon = card.icon
    return (
        <div className="rounded-lg border bg-white p-6 flex flex-col">
            <div className={`rounded-full w-max ${card.iconBg} p-3`}>
                <Icon className={`h-6 w-6 ${card.iconColor}`} />
            </div>
            <div className="my-2">
                <p className="text-2xl font-bold">
                    {card.value}
                </p>
                <div className="flex justify-between">
                    <p className="text-sm text-gray-500">{card.title}</p>
                    <p className={`flex items-center text-sm ${card.changeColor}`}>
                        {card.change.slice(1)}
                        {card.change[0] === '-' ? <ArrowDown size={16} />: <ArrowUp size={16} />}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default StatCard