import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#191919" }],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Input",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Input",
    disabled: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Input placeholder="Default" />
      <Input placeholder="Disabled" disabled />
    </div>
  ),
};
