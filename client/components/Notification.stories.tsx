import React from "react";
import { ComponentStory, Meta } from "@storybook/react";

import { Notification } from "./Notification";

export default {
  component: Notification,
  title: "Components/Notification",
} as Meta;

const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification {...args} />
);
export const Default = Template.bind({});
Default.args = {
  message: "Notification message",
  onClose: () => null,
};
