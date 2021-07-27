import React from "react";
import { ComponentStory, Meta } from "@storybook/react";

import { Page } from "./Page";

export default {
  component: Page,
  title: "Components/Error/Page",
} as Meta;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;
export const Default = Template.bind({});
Default.args = {
  code: 404,
  message: "Not Found!",
};
