import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#191919" }],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/balajmarius.png" alt="Marius" />
      <AvatarFallback>M</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>M</AvatarFallback>
    </Avatar>
  ),
};
