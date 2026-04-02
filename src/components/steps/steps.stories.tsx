import type { Meta, StoryObj } from "@storybook/react";

import { Steps, Step } from "./steps";

const meta = {
  title: "Components/Steps",
  component: Steps,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#191919" }],
    },
  },
} satisfies Meta<typeof Steps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Steps>
      <Step variant="success">Import project</Step>
      <Step variant="success">Configure settings</Step>
      <Step variant="progress">Run deployment</Step>
      <Step variant="pending">Verify output</Step>
    </Steps>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Steps>
      <Step variant="success">Completed step</Step>
      <Step variant="error">Failed step</Step>
      <Step variant="progress">In progress</Step>
      <Step variant="pending">Pending step</Step>
    </Steps>
  ),
};

export const WithError: Story = {
  render: () => (
    <Steps>
      <Step variant="success">Import project</Step>
      <Step variant="success">Configure settings</Step>
      <Step variant="error">Run deployment</Step>
      <Step variant="pending">Verify output</Step>
    </Steps>
  ),
};
