"use client"
import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, ReferenceLine } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { chartData } from "./chartsMockData"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/useMediaQuery";

export const description = ""

export const events = [
  {
    date: "2024-07-05",
    name: "New unit",
    color: "white",
  },
  {
    date: "2024-07-15",
    name: "Update",
    color: "white",
  },
  {
    date: "2024-08-15",
    name: "TGE",
    color: "white",
  },
  {
    date: "2024-08-19",
    name: "CBT #1",
    color: "white",
  },
  // Add more events as needed
];

const chartConfig = {
  wildforest: {
    label: "Wildforest",
    color: "hsl(var(--chart-1))",
  },
  // kaidro: {
  //   label: "Kaidro",
  //   color: "hsl(var(--chart-2))",
  // },
  // runiverse: {
  //   label: "Runiverse",
  //   color: "hsl(var(--chart-3))",
  // },
  // pixels: {
  //   label: "Pixels",
  //   color: "hsl(var(--chart-4))",
  // },
} satisfies ChartConfig

export default function Component() {
  const [timeRange, setTimeRange] = React.useState("90d")
  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const now = new Date()
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    now.setDate(now.getDate() - daysToSubtract)
    return date >= now
  })
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <Card className="bg-gray-900 text-white border-2 border-[#1E2027] rounded-[0.625rem] shadow-none">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b border-gray-700 py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardDescription className="text-gray-300">
            Showing total commissions every day for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto bg-gray-800 text-white"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl bg-gray-800 text-white">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className={cn(
            "aspect-auto h-[250px] w-full",
            "[&_.recharts-cartesian-grid-horizontal_line]:stroke-gray-700",
            "[&_.recharts-cartesian-grid-vertical_line]:stroke-gray-700",
            "[&_.recharts-xAxis_line]:stroke-gray-700",
            "[&_.recharts-xAxis_tick]:fill-gray-400",
            "[&_.recharts-legend-item-text]:fill-gray-400"
          )}
        >
          <AreaChart
            data={filteredData}
            margin={{ top: 10, right: 30, left: 0, bottom: 30 }} // Added bottom margin
          >
            <defs>
              <linearGradient id="fillwildforest" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-wildforest)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-wildforest)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              {/* <linearGradient id="fillkaidro" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-kaidro)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-kaidro)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillruniverse" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-runiverse)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-runiverse)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillpixels" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-pixels)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-pixels)"
                  stopOpacity={0.1}
                />
              </linearGradient> */}
            </defs>
            <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.1)" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={16} // Increased tickMargin
              minTickGap={32}
              tick={{ fill: 'rgba(255,255,255,0.7)' }}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={{ fill: 'rgba(255,255,255,0.1)' }}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            {/* <Area
              dataKey="kaidro"
              type="natural"
              fill="url(#fillkaidro)"
              stroke="var(--color-kaidro)"
              stackId="a"
            /> */}
            <Area
              dataKey="wildforest"
              type="natural"
              fill="url(#fillwildforest)"
              stroke="var(--color-wildforest)"
              stackId="a"
            />
            {/* <Area
              dataKey="runiverse"
              type="natural"
              fill="url(#fillruniverse)"
              stroke="var(--color-runiverse)"
              stackId="a"
            />
            <Area
              dataKey="pixels"
              type="natural"
              fill="url(#fillpixels)"
              stroke="var(--color-pixels)"
              stackId="a"
            /> */}
            {!isMobile && events.map((event, index) => (
              <ReferenceLine
                key={index}
                x={event.date}
                stroke={event.color || "red"}
                label={isMobile ? '' : {
                  value: event.name,
                  position: "bottom",
                  fill: event.color || "red",
                  fontSize: 12,
                }}
              />
            ))}
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}