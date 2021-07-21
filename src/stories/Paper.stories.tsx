import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Paper } from '../components';

export default {
  title: 'UI/Secondary/Paper',
  component: Paper,
} as ComponentMeta<typeof Paper>;

const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "#f16612",
  textColor: "#ffd"
};

export const Secondary = Template.bind({});
Secondary.args = {
  backgroundColor: "#ffd",
  textColor: "#f16612",
};
