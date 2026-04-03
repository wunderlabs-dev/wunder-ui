import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/avatar";
import { SvgIconChevronRight } from "@/components/svg-icon/svg-icon-chevron-right";

const meta = {
  title: "Components/Button",
  component: Button,
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
      options: ["link", "primary", "secondary", "contained", "success", "error", "ghost"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "icon"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: "primary",
    children: "Primary",
    disabled: true,
  },
};

export const PrimarySmall: Story = {
  args: {
    variant: "primary",
    size: "sm",
    children: "Small",
  },
};

export const PrimaryIcon: Story = {
  args: {
    variant: "primary",
    size: "icon",
    children: "→",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Contained: Story = {
  args: {
    variant: "contained",
    children: "Contained",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

export const LinkWithIcon: Story = {
  render: () => (
    <Button variant="link">
      Link
      <SvgIconChevronRight size="sm" />
    </Button>
  ),
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "Error",
  },
};

export const WithStartAdornment: Story = {
  render: () => (
    <Button
      variant="secondary"
      startAdornment={
        <Avatar>
          <AvatarImage src="https://github.com/balajmarius.png" alt="Marius" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
      }
    >
      Marius
    </Button>
  ),
};
