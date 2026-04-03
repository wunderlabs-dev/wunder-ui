import type { Meta, StoryObj } from "@storybook/react";

import { AppBar } from "./app-bar";
import { Button } from "@/components/button";
import { SvgIconGear } from "@/components/svg-icon/svg-icon-gear";
import { SvgIconEye } from "@/components/svg-icon/svg-icon-eye";
import { SvgIconCursor } from "@/components/svg-icon/svg-icon-cursor";

const meta = {
  title: "Components/AppBar",
  component: AppBar,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#191919" }],
    },
  },
} satisfies Meta<typeof AppBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AppBar>
      <Button variant="contained" size="icon">
        <SvgIconCursor size="md" />
      </Button>
      <Button variant="contained" size="icon">
        <SvgIconEye size="md" />
      </Button>
      <Button variant="contained" size="icon">
        <SvgIconGear size="md" />
      </Button>
    </AppBar>
  ),
};
