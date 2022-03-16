import type { Story } from "@ladle/react";
import React from "react";

import { Page } from "./Page";
import { PageProps } from "./Page.d";

export default {
  title: "Components/Error/Page",
};

const Template: Story<PageProps> = (args) => <Page {...args} />;
export const Default = Template.bind({});
Default.args = {
  code: 404,
  message: "Not Found!",
};
