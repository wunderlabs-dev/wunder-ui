import type { Meta, StoryObj } from "@storybook/react";

import { StatusBar } from "./status-bar";
import { Badge } from "@/components/badge";
import { Pill } from "@/components/pill";

const meta = {
  title: "Components/StatusBar",
  component: StatusBar,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#191919" }],
    },
  },
} satisfies Meta<typeof StatusBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col items-start">
      <StatusBar>
        <Badge>V2.1.1 Available !</Badge>
        <Pill>RAM 0.4 GB</Pill>
        <Pill>CPU 8.29%</Pill>
        <Pill>DISK 40.81 GB AVAIL. OF 62.67GB</Pill>
      </StatusBar>
    </div>
  ),
};
