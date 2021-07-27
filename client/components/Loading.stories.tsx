import React from "react";
import { ComponentStory, Meta } from "@storybook/react";

import { Loading } from "./Loading";

export default {
  component: Loading,
  title: "Components/Loading",
} as Meta;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);
export const Default = Template.bind({});
Default.args = {
  page: true,
};
