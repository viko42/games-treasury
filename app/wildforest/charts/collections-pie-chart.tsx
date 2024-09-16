"use client"

import * as React from "react"
import { Label, Pie, PieChart, Sector, Cell, Legend } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An interactive pie chart"

const chartConfig = {
  Skins: {
    label: "Skins",
    color: "hsl(var(--chart-1))",
  },
  Units: {
    label: "Units",
    color: "hsl(var(--chart-2))",
  },
  Lords: {
    label: "Lords",
    color: "hsl(var(--chart-3))",
  },
  Packs: {
    label: "Packs",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

const data = [
  { collection: 'Skins', share: 50, fill: chartConfig.Skins.color },
  { collection: 'Units', share: 10, fill: chartConfig.Units.color },
  { collection: 'Lords', share: 15, fill: chartConfig.Lords.color },
  { collection: 'Packs', share: 25, fill: chartConfig.Packs.color },
];

export default function CollectionsPieChart() {
  const id = "pie-interactive"
  const [activeCollection] = React.useState(data[0].collection)

  const activeIndex = React.useMemo(
    () => data.findIndex((item) => item.collection === activeCollection),
    [activeCollection]
  )

  return (
    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Collections Pie Chart</CardTitle>
          <CardDescription>Distribution of collections</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  className="bg-gray-800 text-white border-gray-700"
                  labelFormatter={(value, payload) => {
                    console.log(value, payload);
                    return '-'
                  }}
                />
              }
            />
            <Pie
              data={data}
              dataKey="share"
              nameKey="collection"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                </g>
              )}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {data[activeIndex].share}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {data[activeIndex].collection}
                        </tspan>
                      </text>
                    )
                  }
                  return null;
                }}
              />
            </Pie>
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              iconSize={10}
              iconType="circle"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
