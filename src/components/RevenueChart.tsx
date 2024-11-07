import { Line, Area, AreaChart, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { FormControl } from "./ui/form"

const data = [
  { month: "Sep", revenue: 30, sales: 45 },
  { month: "Oct", revenue: 25, sales: 30 },
  { month: "Nov", revenue: 15, sales: 45 },
  { month: "Dec", revenue: 20, sales: 35 },
  { month: "Jan", revenue: 25, sales: 45 },
  { month: "Feb", revenue: 35, sales: 35 },
  { month: "Mar", revenue: 40, sales: 60 },
  { month: "Apr", revenue: 35, sales: 50 },
  { month: "May", revenue: 45, sales: 55 },
  { month: "Jun", revenue: 25, sales: 35 },
  { month: "Jul", revenue: 30, sales: 40 },
  { month: "Aug", revenue: 40, sales: 50 }
]

export default function RevenueChart() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-8">
          <div className=" flex gap-5">
            {/* <FormControl> */}
              {/* <RadioGroup defaultValue="option-one">
                <RadioGroupItem className="checked:bg-blue-500 checked:border-blue-500" value="option-one" id="option-one" /> */}
                <div className="flex gap-3">
                  <div className="bg-violet w-4 h-4 rounded-full mt-1"></div>
                  <div>
                    <div className="text-violet">Total Revenue</div>
                    <div className="text-sm">12.04.2022 - 12.05.2022</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-lightblue w-4 h-4 rounded-full mt-1"></div>
                  <div>
                    <div className="text-lightblue">Total Sales</div>
                    <div className="text-sm">12.04.2022 - 12.05.2022</div>
                  </div>
                </div>
              {/* </RadioGroup> */}
            {/* </FormControl> */}
          </div>
          <div className="bg-gray-200 p-2 rounded flex justify-between text-sm">
            <div className="bg-white px-2 py-1 rounded" >Day</div>
            <div className=" px-2 py-1 rounded">Week</div>
            <div className="px-2 py-1 rounded">Month</div>
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              revenue: {
                label: "Total Revenue",
                color: "#4338ca",
              },
              sales: {
                label: "Total Sales",
                color: "#7dd3fc",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" className="text-sm" />
                <YAxis className="text-sm" domain={[0, 100]}  ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} />
                <Tooltip  />
                <Area
                  type="linear"
                  dataKey="revenue"
                  stroke="#4338ca"
                  strokeWidth={2}
                  dot={{ stroke: '#4338ca', strokeWidth: 2 }}
                />
                <Area
                  type="linear"
                  dataKey="sales"
                  stroke="#7dd3fc"
                  strokeWidth={2}
                  dot={{ stroke: '#7dd3fc', strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </>
  )
}