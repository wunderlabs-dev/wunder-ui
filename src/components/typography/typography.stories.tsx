import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./typography";

const meta = {
  title: "Components/Typography",
  component: Typography,
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
      options: ["h1", "h2", "body1", "body2"],
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "semibold", "bold"],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    variant: "h1",
    children: "Heading One",
  },
};

export const H2: Story = {
  args: {
    variant: "h2",
    children: "Heading Two",
  },
};

export const Body1: Story = {
  args: {
    variant: "body1",
    children:
      "Body1 text example. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};

export const Body2: Story = {
  args: {
    variant: "body2",
    children:
      "Body2 text example. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Typography variant="h1">Heading One</Typography>
      <Typography variant="h2">Heading Two</Typography>
      <Typography variant="body1">
        Body1 text example. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Typography variant="body2">
        Body2 text example. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </div>
  ),
};
