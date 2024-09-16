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
import { chartConfig, StatsType } from "../apis"

export const description = "An interactive pie chart"

export default function CollectionsPieChart(props: { stats: StatsType }) {
  const id = "pie-interactive"
  const [activeCollection] = React.useState(props.stats.pieChart[0].collection)

  const activeIndex = React.useMemo(
    () => props.stats.pieChart.findIndex((item) => item.collection === activeCollection),
    [activeCollection]
  )

  return (
    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Commission Distribution by Collection</CardTitle>
          <CardDescription>Percentage of commissions for each collection type</CardDescription>
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
                  suffix="%"
                  className="bg-gray-800 text-white border-gray-700"
                />
              }
            />
            <Pie
              data={props.stats.pieChart}
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
              {props.stats.pieChart.map((entry, index) => (
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
                          {props.stats.pieChart[activeIndex].share}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {props.stats.pieChart[activeIndex].collection}
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
