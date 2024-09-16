import { ChartConfig } from "@/components/ui/chart";

export const chartConfig = {
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
} satisfies ChartConfig;

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
  createdSince: new Date().toISOString(),
  totalSales: 20,
  yesterdaysSales: 10,
  yesterdaysCommission: 30,
  events: [
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
  ],
  pieChart: [
    { collection: "Skins", share: 50, fill: chartConfig.Skins.color },
    { collection: "Units", share: 10, fill: chartConfig.Units.color },
    { collection: "Lords", share: 15, fill: chartConfig.Lords.color },
    { collection: "Packs", share: 25, fill: chartConfig.Packs.color },
  ],
  commissionChart: [
    {
      date: "2024-07-01",
      wildforest: 22.5,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-02",
      wildforest: 19.7,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-03",
      wildforest: 16.7,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-04",
      wildforest: 24.2,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-05",
      wildforest: 37.3,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-06",
      wildforest: 30.1,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-07",
      wildforest: 24.5,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-08",
      wildforest: 40.9,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-09",
      wildforest: 15.9,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-10",
      wildforest: 26.1,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-11",
      wildforest: 32.7,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-12",
      wildforest: 29.2,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-13",
      wildforest: 34.2,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-14",
      wildforest: 13.7,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-15",
      wildforest: 12.0,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-16",
      wildforest: 13.8,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-17",
      wildforest: 44.6,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-18",
      wildforest: 36.4,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-19",
      wildforest: 24.3,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-20",
      wildforest: 18.9,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-21",
      wildforest: 13.7,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-22",
      wildforest: 22.4,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-23",
      wildforest: 13.8,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-24",
      wildforest: 38.7,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-25",
      wildforest: 21.5,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-26",
      wildforest: 17.5,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-27",
      wildforest: 38.3,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-28",
      wildforest: 12.2,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-29",
      wildforest: 31.5,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-30",
      wildforest: 45.4,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-07-31",
      wildforest: 28.6,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-01",
      wildforest: 33.2,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-02",
      wildforest: 19.7,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-03",
      wildforest: 16.7,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-04",
      wildforest: 24.2,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-05",
      wildforest: 37.3,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-06",
      wildforest: 30.1,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-07",
      wildforest: 24.5,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-08",
      wildforest: 40.9,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-09",
      wildforest: 15.9,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-10",
      wildforest: 26.1,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-11",
      wildforest: 32.7,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-12",
      wildforest: 29.2,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-13",
      wildforest: 34.2,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-14",
      wildforest: 13.7,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-15",
      wildforest: 12.0,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-16",
      wildforest: 13.8,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-17",
      wildforest: 44.6,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-18",
      wildforest: 36.4,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-19",
      wildforest: 24.3,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-20",
      wildforest: 18.9,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-21",
      wildforest: 13.7,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-22",
      wildforest: 22.4,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-23",
      wildforest: 13.8,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-24",
      wildforest: 38.7,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-25",
      wildforest: 21.5,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-26",
      wildforest: 17.5,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-27",
      wildforest: 38.3,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-28",
      wildforest: 12.2,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-29",
      wildforest: 31.5,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-30",
      wildforest: 37.9,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-08-31",
      wildforest: 39.8,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-01",
      wildforest: 41.1,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-02",
      wildforest: 19.7,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-03",
      wildforest: 16.7,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-04",
      wildforest: 24.2,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-05",
      wildforest: 37.3,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-06",
      wildforest: 30.1,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-07",
      wildforest: 24.5,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-08",
      wildforest: 40.9,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-09",
      wildforest: 15.9,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-10",
      wildforest: 26.1,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-11",
      wildforest: 32.7,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-12",
      wildforest: 29.2,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-13",
      wildforest: 34.2,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-14",
      wildforest: 13.7,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-15",
      wildforest: 12.0,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-16",
      wildforest: 13.8,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-17",
      wildforest: 44.6,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-18",
      wildforest: 36.4,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-19",
      wildforest: 24.3,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-20",
      wildforest: 18.9,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-21",
      wildforest: 13.7,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-22",
      wildforest: 22.4,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-23",
      wildforest: 13.8,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-24",
      wildforest: 38.7,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-25",
      wildforest: 21.5,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-26",
      wildforest: 17.5,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-27",
      wildforest: 38.3,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-28",
      wildforest: 12.2,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-29",
      wildforest: 31.5,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
    {
      date: "2024-09-30",
      wildforest: 37.9,
      kaidro: 0,
      runiverse: 0,
      pixels: 0,
    },
  ],
};

export const defaultStats: StatsType = {
  treasury: 1,
  commissionPercentage: 1,
  createdSince: new Date().toISOString(),
  totalSales: 1,
  yesterdaysSales: 1,
  yesterdaysCommission: 1,
  events: [],
  pieChart: [
    { collection: "Skins", share: 25, fill: chartConfig.Skins.color },
    { collection: "Units", share: 25, fill: chartConfig.Units.color },
    { collection: "Lords", share: 25, fill: chartConfig.Lords.color },
    { collection: "Packs", share: 25, fill: chartConfig.Packs.color },
  ],
  commissionChart: [],
};
