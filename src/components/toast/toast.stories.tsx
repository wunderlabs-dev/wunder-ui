import type { Meta, StoryObj } from "@storybook/react";

import { Toast } from "./toast";
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
  args: {
    variant: "success",
    icon: <SvgIconGlitters size="md" />,
    children: "Pixel Draft is imported !",
    onClose: () => {},
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    icon: <SvgIconSkull size="md" />,
    children: "Oh sorry... Something went wrong... Try again !",
    onClose: () => {},
  },
};

export const WithoutIcon: Story = {
  args: {
    variant: "success",
    children: "Changes saved successfully",
    onClose: () => {},
  },
};

export const AllToasts: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <Toast variant="success" icon={<SvgIconGlitters size="md" />} onClose={() => {}}>
        Pixel Draft is imported !
      </Toast>
      <Toast variant="error" icon={<SvgIconSkull size="md" />} onClose={() => {}}>
        Oh sorry... Something went wrong... Try again !
      </Toast>
    </div>
  ),
};
