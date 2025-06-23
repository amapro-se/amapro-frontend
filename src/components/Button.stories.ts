import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "버튼이요!",
  },
};

export const Disabled: Story = {
  args: {
    label: "비활성화됨",
    disabled: true,
  },
};

export const Primary: Story = {
  args: {
    label: "확인",
    variant: "primary",
  },
};
