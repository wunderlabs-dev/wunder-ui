import type { Meta, StoryObj } from "@storybook/react";

import { SvgIcon, SvgIconSizes, SvgIconColors } from "./svg-icon";
import { SvgIconCursor } from "./svg-icon-cursor";
import { SvgIconDownload } from "./svg-icon-download";
import { SvgIconEye } from "./svg-icon-eye";
import { SvgIconGear } from "./svg-icon-gear";
import { SvgIconGlitters } from "./svg-icon-glitters";
import { SvgIconOpenable } from "./svg-icon-openable";
import { SvgIconOpenableSymbol } from "./svg-icon-openable-symbol";
import { SvgIconBrowser } from "./svg-icon-browser";

const meta = {
  title: "Components/SvgIcon",
  component: SvgIcon,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#191919" }],
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: [...SvgIconSizes],
    },
    color: {
      control: "select",
      options: [...SvgIconColors],
    },
  },
} satisfies Meta<typeof SvgIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    color: "default",
    children: (
      <path d="M28.6,8.4l-12-6.9c-0.4-0.2-0.9-0.2-1.2,0l-12,6.9C3,8.6,2.8,8.9,2.8,9.3v14c0,0.4,0.2,0.7,0.5,0.9l12,6.9c0.4,0.2,0.9,0.2,1.2,0l12-6.9c0.3-0.2,0.5-0.5,0.5-0.9v-14C29.1,8.9,28.9,8.6,28.6,8.4z" />
    ),
    viewBox: "0 0 32 32",
  },
};

export const AllIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-6 text-gray-50">
      <SvgIconCursor size="lg" />
      <SvgIconDownload size="lg" />
      <SvgIconEye size="lg" />
      <SvgIconGear size="lg" />
      <SvgIconGlitters size="lg" />
      <SvgIconOpenableSymbol size="lg" />
      <SvgIconOpenable size="lg" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4 text-gray-50">
      <SvgIconCursor size="xs" />
      <SvgIconCursor size="sm" />
      <SvgIconCursor size="md" />
      <SvgIconCursor size="lg" />
      <SvgIconCursor size="xl" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <SvgIconCursor size="lg" color="default" className="text-gray-50" />
      <SvgIconCursor size="lg" color="neutral" />
      <SvgIconCursor size="lg" color="primary" />
    </div>
  ),
};

export const Browser: Story = {
  render: () => (
    <div className="max-w-lg">
      <SvgIconBrowser />
    </div>
  ),
};
