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
      options: ["heading", "subtitle", "paragraph"],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading: Story = {
  args: {
    variant: "heading",
    children: "Heading One",
  },
};

export const Subtitle: Story = {
  args: {
    variant: "subtitle",
    children: "Subtitle text",
  },
};

export const Paragraph: Story = {
  args: {
    variant: "paragraph",
    children:
      "Paragraph text example with paragraph spacing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Typography variant="heading">Heading One</Typography>
      <Typography variant="subtitle">Subtitle text</Typography>
      <Typography variant="paragraph">
        Paragraph text example with paragraph spacing. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </div>
  ),
};
