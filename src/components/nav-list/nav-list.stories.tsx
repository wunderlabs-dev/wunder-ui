import type { Meta, StoryObj } from "@storybook/react";

import {
  NavList,
  NavListGroup,
  NavListGroupTitle,
  NavListGroupItems,
  NavListItem,
} from "./nav-list";
import { Switch } from "@/components/switch";
import { SvgIconPlay } from "@/components/svg-icon/svg-icon-play";
import { SvgIconFolder } from "@/components/svg-icon/svg-icon-folder";

const meta = {
  title: "Components/NavList",
  component: NavList,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#191919" }],
    },
  },
} satisfies Meta<typeof NavList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NavList className="w-46">
      <NavListGroup>
        <NavListGroupTitle icon={<SvgIconPlay className="text-green-400" />}>
          Running
        </NavListGroupTitle>
        <NavListGroupItems>
          <NavListItem active action={<Switch defaultChecked />}>
            Pixel draft
          </NavListItem>
          <NavListItem>Web Canvas</NavListItem>
        </NavListGroupItems>
      </NavListGroup>
      <NavListGroup>
        <NavListGroupTitle icon={<SvgIconFolder />}>Projects</NavListGroupTitle>
        <NavListGroupItems>
          <NavListItem>Layout Lab</NavListItem>
          <NavListItem active action={<Switch />}>
            Pixel Draft
          </NavListItem>
          <NavListItem>Mock Forge API</NavListItem>
          <NavListItem>UI Blueprint</NavListItem>
          <NavListItem action={<Switch />}>Hover state</NavListItem>
          <NavListItem>Frame flow</NavListItem>
          <NavListItem>Page Proto</NavListItem>
          <NavListItem>Design Sandbox</NavListItem>
          <NavListItem>Frontend Test 3D</NavListItem>
        </NavListGroupItems>
      </NavListGroup>
    </NavList>
  ),
};
