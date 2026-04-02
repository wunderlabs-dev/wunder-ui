import type { Meta, StoryObj } from "@storybook/react";

import { Pill } from "./pill";

const meta = {
  title: "Components/Pill",
  component: Pill,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#191919" }],
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "warning", "error"],
    },
  },
} satisfies Meta<typeof Pill>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Within parameters",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Resource Usage High",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "Resource Limit Almost Reached",
  },
};

export const AllPills: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Pill variant="default">Within parameters</Pill>
      <Pill variant="warning">Resource Usage High</Pill>
      <Pill variant="error">Resource Limit Almost Reached</Pill>
    </div>
  ),
};
