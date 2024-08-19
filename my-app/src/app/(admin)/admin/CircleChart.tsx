"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { formatDate } from "@/lib/utils";
import { ApplicationStatus } from "@/interfaces/application";
type _ChartConfig = {
  [key in ApplicationStatus | "count" | "other"]: {
    label?: string;
    color?: string;
  };
};

type ChartData = {
  status: keyof _ChartConfig | "other";
  count: number;
  fill: string;
};

const chartConfig: _ChartConfig = {
  count: {
    label: "Counts",
  },
  pending: {
    label: "Pending Applications",
    color: "#2563EB",
  },
  not_eligible: {
    label: "Not Eligible Applications",
    color: "#E11D48",
  },
  eligible: {
    label: "Eligible Applications",
    color: "green",
  },
  processing: {
    label: "Processing",
    color: "yellow",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};

export function CircleChart({
  eligibleCount,
  notEligibleCount,
  pendingCount,
  processingCount,
  otherCount,
  forPerc
}: {
  eligibleCount: number;
  notEligibleCount: number;
  pendingCount: number;
  processingCount: number;
  otherCount: number;
}) {
  const chartData: ChartData[] = [
    { status: "eligible", count: eligibleCount, fill: "green" },
    {
      status: "not_eligible",
      count: notEligibleCount,
      fill: "#E7496C",
    },
    { status: "pending", count: pendingCount, fill: "#336DEC" },
    { status: "processing", count: processingCount, fill: "yellow" },
    // { status: "other", count: otherCount, fill: "var(--color-other)" },
  ];

  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr?.count, 0);
  }, [chartData]);
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Statistics Of Over all Applications</CardTitle>
        <CardDescription>
          {formatDate(new Date(), "YYYY/MM/DD")} - Today{" "}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="status"
              innerRadius={60}
              strokeWidth={5}
            >
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
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Counts
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Latest Data Based On The Interaction On Platform{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Here You Can Perform Various Dicision Based on the provided data
        </div>
      </CardFooter>
    </Card>
  );
}
