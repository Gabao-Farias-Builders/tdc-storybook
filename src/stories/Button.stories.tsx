import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components';

export default {
  title: 'UI/TDC/Button',
  component: Button,
  argTypes: {
    contentBackgroundColor: {control: { type: 'color' }},
    contentBackgroundColorHover: {control: { type: 'color' }},
    bottomBarColor: {control: { type: 'color' }},
    bottomBarColorHover: {control: { type: 'color' }},
    textColor: {control: { type: 'color' }},
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Orange = Template.bind({});
Orange.args = {
  label: "CALL4PAPERS"
};

export const Yellow = Template.bind({});
Yellow.args = {
  contentBackgroundColor: "#f3b633",
  contentBackgroundColorHover: "#d39815",
  bottomBarColor: "#d39815",
  bottomBarColorHover: "#f3b633",
  label: "INSCRIÇÕES"
};
