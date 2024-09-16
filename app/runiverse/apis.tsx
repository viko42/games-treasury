import { ChartConfig } from "@/components/ui/chart"

export const chartConfig = {
    ['Real Estate']: {
      label: "Real Estate",
      color: "hsl(var(--chart-1))",
    },
    ['Watchers Rings']: {
      label: "Watchers Rings",
      color: "hsl(var(--chart-2))",
    },
    Items: {
      label: "Items",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig
  
  
  export type StatsType = {
    treasury: number;
    commissionPercentage: number;
    createdSince: string;
    totalSales: number;
    yesterdaysSales: number;
    yesterdaysCommission: number;
    events: Array<{
      date: string;
      name: string;
      color: string;
    }>;
    pieChart: Array<{
      collection: string;
      share: number;
      fill: string;
    }>;
    commissionChart: Array<{
      date: string;
      wildforest: number;
      kaidro: number;
      runiverse: number;
      pixels: number;
    }>;
  };

  export const mockResponseApi: StatsType = {
    treasury: 10000,
    commissionPercentage: 5,
    createdSince: new Date("08/26/2024").toISOString(),
    totalSales: 20,
    yesterdaysSales: 10,
    yesterdaysCommission: 30,
    events: [
      {
        date: "2024-08-26",
        name: "Beta",
        color: "white",
      },
      // {
      //   date: "2024-07-15",
      //   name: "Update",
      //   color: "white",
      // },
      // {
      //   date: "2024-08-15",
      //   name: "TGE",
      //   color: "white",
      // },
      // {
      //   date: "2024-08-19",
      //   name: "CBT #1",
      //   color: "white",
      // },
      // Add more events as needed
    ],
    pieChart: [
        { collection: 'Real Estate', share: 50, fill: chartConfig['Real Estate'].color },
        { collection: 'WatchersRings', share: 25, fill: chartConfig['Watchers Rings'].color },
        { collection: 'Items', share: 25, fill: chartConfig.Items.color },
      ],
    commissionChart: [
        { date: "2024-07-01", wildforest: 0, kaidro: 0, runiverse: 18.75, pixels: 0 },
        { date: "2024-07-02", wildforest: 0, kaidro: 0, runiverse: 12.50, pixels: 0 },
        { date: "2024-07-03", wildforest: 0, kaidro: 0, runiverse: 21.25, pixels: 0 },
        { date: "2024-07-04", wildforest: 0, kaidro: 0, runiverse: 15.00, pixels: 0 },
        { date: "2024-07-05", wildforest: 0, kaidro: 0, runiverse: 23.75, pixels: 0 },
        { date: "2024-07-06", wildforest: 0, kaidro: 0, runiverse: 28.75, pixels: 0 },
        { date: "2024-07-07", wildforest: 0, kaidro: 0, runiverse: 20.00, pixels: 0 },
        { date: "2024-07-08", wildforest: 0, kaidro: 0, runiverse: 35.00, pixels: 0 },
        { date: "2024-07-09", wildforest: 0, kaidro: 0, runiverse: 13.75, pixels: 0 },
        { date: "2024-07-10", wildforest: 0, kaidro: 0, runiverse: 22.50, pixels: 0 },
        { date: "2024-07-11", wildforest: 0, kaidro: 0, runiverse: 28.75, pixels: 0 },
        { date: "2024-07-12", wildforest: 0, kaidro: 0, runiverse: 25.00, pixels: 0 },
        { date: "2024-07-13", wildforest: 0, kaidro: 0, runiverse: 31.25, pixels: 0 },
        { date: "2024-07-14", wildforest: 0, kaidro: 0, runiverse: 17.50, pixels: 0 },
        { date: "2024-07-15", wildforest: 0, kaidro: 0, runiverse: 15.00, pixels: 0 },
        { date: "2024-07-16", wildforest: 0, kaidro: 0, runiverse: 16.25, pixels: 0 },
        { date: "2024-07-17", wildforest: 0, kaidro: 0, runiverse: 40.00, pixels: 0 },
        { date: "2024-07-18", wildforest: 0, kaidro: 0, runiverse: 38.75, pixels: 0 },
        { date: "2024-07-19", wildforest: 0, kaidro: 0, runiverse: 21.25, pixels: 0 },
        { date: "2024-07-20", wildforest: 0, kaidro: 0, runiverse: 16.25, pixels: 0 },
        { date: "2024-07-21", wildforest: 0, kaidro: 0, runiverse: 17.50, pixels: 0 },
        { date: "2024-07-22", wildforest: 0, kaidro: 0, runiverse: 20.00, pixels: 0 },
        { date: "2024-07-23", wildforest: 0, kaidro: 0, runiverse: 18.75, pixels: 0 },
        { date: "2024-07-24", wildforest: 0, kaidro: 0, runiverse: 33.75, pixels: 0 },
        { date: "2024-07-25", wildforest: 0, kaidro: 0, runiverse: 23.75, pixels: 0 },
        { date: "2024-07-26", wildforest: 0, kaidro: 0, runiverse: 15.00, pixels: 0 },
        { date: "2024-07-27", wildforest: 0, kaidro: 0, runiverse: 40.00, pixels: 0 },
        { date: "2024-07-28", wildforest: 0, kaidro: 0, runiverse: 15.00, pixels: 0 },
        { date: "2024-07-29", wildforest: 0, kaidro: 0, runiverse: 27.50, pixels: 0 },
        { date: "2024-07-30", wildforest: 0, kaidro: 0, runiverse: 41.25, pixels: 0 },
        { date: "2024-07-31", wildforest: 0, kaidro: 0, runiverse: 30.75, pixels: 0 },
        { date: "2024-08-01", wildforest: 0, kaidro: 0, runiverse: 30.00, pixels: 0 },
        { date: "2024-08-02", wildforest: 0, kaidro: 0, runiverse: 12.50, pixels: 0 },
        { date: "2024-08-03", wildforest: 0, kaidro: 0, runiverse: 21.25, pixels: 0 },
        { date: "2024-08-04", wildforest: 0, kaidro: 0, runiverse: 15.00, pixels: 0 },
        { date: "2024-08-05", wildforest: 0, kaidro: 0, runiverse: 23.75, pixels: 0 },
        { date: "2024-08-06", wildforest: 0, kaidro: 0, runiverse: 28.75, pixels: 0 },
        { date: "2024-08-07", wildforest: 0, kaidro: 0, runiverse: 20.00, pixels: 0 },
        { date: "2024-08-08", wildforest: 0, kaidro: 0, runiverse: 35.00, pixels: 0 },
        { date: "2024-08-09", wildforest: 0, kaidro: 0, runiverse: 13.75, pixels: 0 },
        { date: "2024-08-10", wildforest: 0, kaidro: 0, runiverse: 22.50, pixels: 0 },
        { date: "2024-08-11", wildforest: 0, kaidro: 0, runiverse: 28.75, pixels: 0 },
        { date: "2024-08-12", wildforest: 0, kaidro: 0, runiverse: 25.00, pixels: 0 },
        { date: "2024-08-13", wildforest: 0, kaidro: 0, runiverse: 31.25, pixels: 0 },
        { date: "2024-08-14", wildforest: 0, kaidro: 0, runiverse: 17.50, pixels: 0 },
        { date: "2024-08-15", wildforest: 0, kaidro: 0, runiverse: 15.00, pixels: 0 },
        { date: "2024-08-16", wildforest: 0, kaidro: 0, runiverse: 16.25, pixels: 0 },
        { date: "2024-08-17", wildforest: 0, kaidro: 0, runiverse: 40.00, pixels: 0 },
        { date: "2024-08-18", wildforest: 0, kaidro: 0, runiverse: 38.75, pixels: 0 },
        { date: "2024-08-19", wildforest: 0, kaidro: 0, runiverse: 21.25, pixels: 0 },
        { date: "2024-08-20", wildforest: 0, kaidro: 0, runiverse: 16.25, pixels: 0 },
        { date: "2024-08-21", wildforest: 0, kaidro: 0, runiverse: 17.50, pixels: 0 },
        { date: "2024-08-22", wildforest: 0, kaidro: 0, runiverse: 20.00, pixels: 0 },
        { date: "2024-08-23", wildforest: 0, kaidro: 0, runiverse: 18.75, pixels: 0 },
        { date: "2024-08-24", wildforest: 0, kaidro: 0, runiverse: 33.75, pixels: 0 },
        { date: "2024-08-25", wildforest: 0, kaidro: 0, runiverse: 23.75, pixels: 0 },
        { date: "2024-08-26", wildforest: 0, kaidro: 0, runiverse: 15.00, pixels: 0 },
        { date: "2024-08-27", wildforest: 0, kaidro: 0, runiverse: 40.00, pixels: 0 },
        { date: "2024-08-28", wildforest: 0, kaidro: 0, runiverse: 15.00, pixels: 0 },
        { date: "2024-08-29", wildforest: 0, kaidro: 0, runiverse: 27.50, pixels: 0 },
        { date: "2024-08-30", wildforest: 0, kaidro: 0, runiverse: 35.75, pixels: 0 },
        { date: "2024-08-31", wildforest: 0, kaidro: 0, runiverse: 37.50, pixels: 0 },
        { date: "2024-09-01", wildforest: 0, kaidro: 0, runiverse: 40.00, pixels: 0 },
        { date: "2024-09-02", wildforest: 0, kaidro: 0, runiverse: 12.50, pixels: 0 },
        { date: "2024-09-03", wildforest: 0, kaidro: 0, runiverse: 21.25, pixels: 0 },
        { date: "2024-09-04", wildforest: 0, kaidro: 0, runiverse: 15.00, pixels: 0 },
        { date: "2024-09-05", wildforest: 0, kaidro: 0, runiverse: 23.75, pixels: 0 },
        { date: "2024-09-06", wildforest: 0, kaidro: 0, runiverse: 28.75, pixels: 0 },
        { date: "2024-09-07", wildforest: 0, kaidro: 0, runiverse: 20.00, pixels: 0 },
        { date: "2024-09-08", wildforest: 0, kaidro: 0, runiverse: 35.00, pixels: 0 },
        { date: "2024-09-09", wildforest: 0, kaidro: 0, runiverse: 13.75, pixels: 0 },
        { date: "2024-09-10", wildforest: 0, kaidro: 0, runiverse: 22.50, pixels: 0 },
        { date: "2024-09-11", wildforest: 0, kaidro: 0, runiverse: 28.75, pixels: 0 },
        { date: "2024-09-12", wildforest: 0, kaidro: 0, runiverse: 25.00, pixels: 0 },
        { date: "2024-09-13", wildforest: 0, kaidro: 0, runiverse: 31.25, pixels: 0 },
        { date: "2024-09-14", wildforest: 0, kaidro: 0, runiverse: 17.50, pixels: 0 },
        { date: "2024-09-15", wildforest: 0, kaidro: 0, runiverse: 15.00, pixels: 0 },
        { date: "2024-09-16", wildforest: 0, kaidro: 0, runiverse: 16.25, pixels: 0 },
        { date: "2024-09-17", wildforest: 0, kaidro: 0, runiverse: 40.00, pixels: 0 },
        { date: "2024-09-18", wildforest: 0, kaidro: 0, runiverse: 38.75, pixels: 0 },
        { date: "2024-09-19", wildforest: 0, kaidro: 0, runiverse: 21.25, pixels: 0 },
        { date: "2024-09-20", wildforest: 0, kaidro: 0, runiverse: 16.25, pixels: 0 },
        { date: "2024-09-21", wildforest: 0, kaidro: 0, runiverse: 17.50, pixels: 0 },
        { date: "2024-09-22", wildforest: 0, kaidro: 0, runiverse: 20.00, pixels: 0 },
        { date: "2024-09-23", wildforest: 0, kaidro: 0, runiverse: 18.75, pixels: 0 },
        { date: "2024-09-24", wildforest: 0, kaidro: 0, runiverse: 33.75, pixels: 0 },
        { date: "2024-09-25", wildforest: 0, kaidro: 0, runiverse: 23.75, pixels: 0 },
        { date: "2024-09-26", wildforest: 0, kaidro: 0, runiverse: 15.00, pixels: 0 },
        { date: "2024-09-27", wildforest: 0, kaidro: 0, runiverse: 40.00, pixels: 0 },
        { date: "2024-09-28", wildforest: 0, kaidro: 0, runiverse: 15.00, pixels: 0 },
        { date: "2024-09-29", wildforest: 0, kaidro: 0, runiverse: 27.50, pixels: 0 },
        { date: "2024-09-30", wildforest: 0, kaidro: 0, runiverse: 35.75, pixels: 0 },
      ]
}

export const defaultStats: StatsType = {
  treasury: 1,
  commissionPercentage: 1,
  createdSince: new Date("08/26/2024").toISOString(),
  totalSales: 1,
  yesterdaysSales: 1,
  yesterdaysCommission: 1,
  events: [
  ],
  pieChart: [
      { collection: 'Real Estate', share: 50, fill: chartConfig['Real Estate'].color },
      { collection: 'Watchers Rings', share: 25, fill: chartConfig['Watchers Rings'].color },
      { collection: 'Items', share: 25, fill: chartConfig.Items.color },
    ],
  commissionChart: []
}