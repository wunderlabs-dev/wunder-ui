import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
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
      options: ["success", "warning", "error"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    variant: "success",
    children: "Running",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Uncommited changes",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "Stopped",
  },
};

export const AllBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="success">Running</Badge>
      <Badge variant="warning">Uncommited changes</Badge>
      <Badge variant="error">Stopped</Badge>
      <Badge variant="success">Published</Badge>
      <Badge variant="warning">Unpublished</Badge>
      <Badge variant="error">Sync. failed</Badge>
    </div>
  ),
};
