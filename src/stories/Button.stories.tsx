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
  label: "PROGRAMAÇÃO"
};

export const Yellow = Template.bind({});
Yellow.args = {
  contentBackgroundColor: "#f3b633",
  contentBackgroundColorHover: "#d39815",
  bottomBarColor: "#d39815",
  bottomBarColorHover: "#f3b633",
  label: "INSCRIÇÕES"
};

export const DarkGreen = Template.bind({});
DarkGreen.args = {
  contentBackgroundColor: "#2e4837",
  contentBackgroundColorHover: "#466d53",
  bottomBarColor: "#466d53",
  bottomBarColorHover: "#2e4837",
  label: "ASSISTA AOS VÍDEOS"
};

export const Violet = Template.bind({});
Violet.args = {
  contentBackgroundColor: "#43273b",
  contentBackgroundColorHover: "#5c3d56",
  bottomBarColor: "#5c3d56",
  bottomBarColorHover: "#43273b",
  label: "ASSISTA AOS VÍDEOS"
};
