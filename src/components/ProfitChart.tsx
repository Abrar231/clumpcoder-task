"use client"

import React from 'react'
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const data = [
  { day: "M", sales: 40, revenue: 10 },
  { day: "T", sales: 50, revenue: 20 },
  { day: "W", sales: 40, revenue: 20 },
  { day: "T", sales: 65, revenue: 10 },
  { day: "F", sales: 20, revenue: 10 },
  { day: "S", sales: 40, revenue: 30 },
  { day: "S", sales: 60, revenue: 20 }
]

export default function ProfitChart() {
  return (
    <Card className='w-full'>
        <CardHeader className="w-full">
            <div className='flex justify-between'>
                <div>
                    <CardTitle className='text-xl'>Profit this week</CardTitle>
                </div>
                <Select defaultValue="week">
                    <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="week">This Week</SelectItem>
                        <SelectItem value="month">This Month</SelectItem>
                        <SelectItem value="year">This Year</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='flex gap-5'>
                <div className='flex items-center gap-3'>
                    <div className='bg-violet w-4 h-4 rounded-full'></div>
                    <div>Sales</div>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='bg-lightblue w-4 h-4 rounded-full'></div>
                    <div>Revenue</div>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <ChartContainer
            config={{
                sales: {
                label: "Sales",
                color: "#4338ca",
                },
                revenue: {
                label: "Revenue",
                color: "#7dd3fc",
                },
            }}
            className="h-[300px] w-[350px]"
            >
            <ResponsiveContainer>
                <BarChart data={data}  barSize={10} >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="day" className="text-sm" />
                <YAxis className="text-sm" domain={[0, 100]}  ticks={[0, 20, 40, 60, 80, 100]} />
                <Tooltip />
                <Bar dataKey="sales" stackId="a" fill="#4338ca" radius={[4, 4, 0, 0]} />
                <Bar dataKey="revenue" stackId="a" fill="#7dd3fc" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
            </ChartContainer>
        </CardContent>
    </Card>
  )
}