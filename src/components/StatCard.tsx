function StatCard({card}) {
    const Icon = card.icon
    return (
        <div className="rounded-lg border bg-white p-6 flex flex-col">
            <div className={`rounded-full w-max ${card.iconBg} p-3`}>
                <Icon className={`h-6 w-6 ${card.iconColor}`} />
            </div>
            <div className="my-2">
                <p className="text-2xl font-bold">{card.value}</p>
                <div className="flex justify-between">
                    <p className="text-sm text-gray-500">{card.title}</p>
                    <p className={`text-sm ${card.changeColor}`}>
                        {card.change}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default StatCard