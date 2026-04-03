import type { Meta, StoryObj } from "@storybook/react";

import { Toast, ToastTitle, ToastDescription, ToastAction } from "./toast";
import { Button } from "@/components/button";
import { SvgIconGlitters } from "@/components/svg-icon/svg-icon-glitters";
import { SvgIconSkull } from "@/components/svg-icon/svg-icon-skull";

const meta = {
  title: "Components/Toast",
  component: Toast,
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
      options: ["success", "error"],
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  render: () => (
    <Toast variant="success" icon={<SvgIconGlitters size="md" />} onClose={() => {}}>
      <ToastTitle>Pixel Draft is imported !</ToastTitle>
    </Toast>
  ),
};

export const Error: Story = {
  render: () => (
    <Toast variant="error" icon={<SvgIconSkull size="md" />} onClose={() => {}}>
      <ToastTitle>Oh sorry... Something went wrong... Try again !</ToastTitle>
    </Toast>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Toast variant="error" size="lg" icon={<SvgIconSkull size="md" />} onClose={() => {}}>
      <ToastTitle>Error Heading</ToastTitle>
      <ToastDescription>
        Error description copy that can be longer and span multiple lines without being truncated as
        this component is a card, NOT a toast.
      </ToastDescription>
      <ToastAction>
        <Button variant="error" size="sm">
          <SvgIconGlitters />
          Error card button copy
        </Button>
      </ToastAction>
    </Toast>
  ),
};

export const AllToasts: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <Toast variant="success" icon={<SvgIconGlitters size="md" />} onClose={() => {}}>
        <ToastTitle>Pixel Draft is imported !</ToastTitle>
      </Toast>
      <Toast variant="error" icon={<SvgIconSkull size="md" />} onClose={() => {}}>
        <ToastTitle>Oh sorry... Something went wrong...</ToastTitle>
      </Toast>
      <Toast variant="error" size="lg" icon={<SvgIconSkull size="md" />} onClose={() => {}}>
        <ToastTitle>Error Heading</ToastTitle>
        <ToastDescription>
          Error description copy that can be longer and span multiple lines.
        </ToastDescription>
        <ToastAction>
          <Button variant="error" size="sm">
            <SvgIconGlitters />
            Error card button copy
          </Button>
        </ToastAction>
      </Toast>
    </div>
  ),
};
