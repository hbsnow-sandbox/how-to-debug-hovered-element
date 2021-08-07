import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import { Button, Props } from ".";

export default {
  title: "components/Button",
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};
