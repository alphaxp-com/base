import type { Story } from "@ladle/react";
import React from "react";

import { Notification } from "./Notification";
import { NotificationProps } from "./Notification.d";

export default {
  title: "Components/Notification",
};

const Template: Story<NotificationProps> = (args) => <Notification {...args} />;
export const Default = Template.bind({});
Default.args = {
  message: "Notification message",
  onClose: () => null,
};
