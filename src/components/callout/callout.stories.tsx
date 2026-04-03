import type { Meta, StoryObj } from "@storybook/react";

import { Callout, CalloutBody, CalloutAction } from "./callout";
import { SvgIconGlitters } from "@/components/svg-icon/svg-icon-glitters";
import { SvgIconLink } from "@/components/svg-icon/svg-icon-link";

const meta = {
  title: "Components/Callout",
  component: Callout,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#191919" }],
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Callout
      icon={<SvgIconGlitters size="sm" />}
      title="Learn more about Cursor"
      onClose={() => {}}
    >
      <CalloutBody>
        Cursor is an AI-assisted integrated development environment for Visual Studio Code with
        additional AI features. It allows you to develop fast your project.
      </CalloutBody>
      <CalloutAction href="#">
        Get help with Cursor
        <SvgIconLink />
      </CalloutAction>
    </Callout>
  ),
};
