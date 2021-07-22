import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EventCard } from '../components';

export default {
  title: 'UI/TDC/EventCard',
  component: EventCard,
  argTypes: {
    primaryGradientColor: {control: { type: 'color' }},
    secondaryGradientColor: {control: { type: 'color' }},
    textColor: {control: { type: 'color' }},
  }
} as ComponentMeta<typeof EventCard>;

const Template: ComponentStory<typeof EventCard> = (args) => <EventCard {...args} />;

export const Innovation = Template.bind({});
Innovation.args = {
  primaryGradientColor: '#e1251b',
  text: "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget."
};

export const Connections = Template.bind({});
Connections.args = {
  primaryGradientColor: '#004a98',
  text: "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget."
};

export const Transformation = Template.bind({});
Transformation.args = {
  primaryGradientColor: '#009845',
  text: "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget."
};

export const Future = Template.bind({});
Future.args = {
  primaryGradientColor: '#5c0f8b',
  text: "Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget."
};
