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
      options: ["primary", "secondary", "solid", "outlined", "contained"],
    },
    spacing: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl"],
    },
    rounded: {
      control: "select",
      options: ["sm", "md"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
  render: (args) => (
    <Card {...args}>
      <CardContent>
        <p className="text-lg font-semibold text-gray-50">Primary Card</p>
        <p className="text-gray-200">Card content goes here.</p>
      </CardContent>
    </Card>
  ),
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
  render: (args) => (
    <Card {...args}>
      <CardContent>
        <p className="text-lg font-semibold text-gray-50">Secondary Card</p>
        <p className="text-gray-200">Card content goes here.</p>
      </CardContent>
    </Card>
  ),
};

export const Solid: Story = {
  args: {
    variant: "solid",
  },
  render: (args) => (
    <Card {...args}>
      <CardContent>
        <p className="text-lg font-semibold text-gray-50">Solid Card</p>
        <p className="text-gray-200">Card content goes here.</p>
      </CardContent>
    </Card>
  ),
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
  render: (args) => (
    <Card {...args}>
      <CardContent>
        <p className="text-lg font-semibold text-gray-50">Outlined Card</p>
        <p className="text-gray-200">Card content goes here.</p>
      </CardContent>
    </Card>
  ),
};

export const Contained: Story = {
  args: {
    variant: "contained",
  },
  render: (args) => (
    <Card {...args}>
      <CardContent>
        <p className="text-lg font-semibold text-gray-50">Contained Card</p>
        <p className="text-gray-200">Card content goes here.</p>
      </CardContent>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(["primary", "secondary", "solid", "outlined", "contained"] as const).map((variant) => (
        <Card key={variant} variant={variant}>
          <CardContent>
            <p className="text-gray-50 font-semibold">{variant}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
};

export const Spacings: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(["none", "xs", "sm", "md", "lg", "xl"] as const).map((spacing) => (
        <Card key={spacing} spacing={spacing}>
          <CardContent>
            <p className="text-gray-50 font-semibold">Spacing: {spacing}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
};
