import type { Story } from "@ladle/react";
import React from "react";

import { Loading } from "./Loading";
import { LoadingProps } from "./Loading.d";

export default {
  title: "Components/Loading",
};

const Template: Story<LoadingProps> = (args) => <Loading {...args} />;
export const Default = Template.bind({});
Default.args = {
  page: true,
};
