import type { Meta, StoryObj } from "@storybook/react";

import { Card, CardContent } from "./card";

const meta = {
  title: "Components/Card",
  component: Card,
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
      options: ["solid", "glass"],
    },
    spacing: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
  },
  render: (args) => (
    <Card {...args}>
      <CardContent>
        <p className="text-gray-50 text-lg font-semibold">Card Title</p>
        <p className="text-gray-200">Card content goes here.</p>
      </CardContent>
    </Card>
  ),
};

export const Glass: Story = {
  args: {
    variant: "glass",
  },
  render: (args) => (
    <Card {...args}>
      <CardContent>
        <p className="text-gray-50 text-lg font-semibold">Glass Card</p>
        <p className="text-gray-200">With backdrop blur effect.</p>
      </CardContent>
    </Card>
  ),
};

export const Spacings: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(["none", "sm", "md", "lg"] as const).map((spacing) => (
        <Card key={spacing} spacing={spacing}>
          <CardContent>
            <p className="text-gray-50 font-semibold">Spacing: {spacing}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
};
