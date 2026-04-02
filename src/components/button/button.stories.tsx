import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["link", "primary", "secondary", "contained", "success", "error"],
    },
    size: {
      control: "select",
      options: ["default", "icon"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const Contained: Story = {
  args: {
    variant: "contained",
    children: "Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Button",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Button",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "Button",
  },
};

export const Icon: Story = {
  args: {
    variant: "primary",
    size: "icon",
    children: "→",
  },
};
