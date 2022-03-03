import { ComponentStory, ComponentMeta } from '@storybook/react';

import Test from '.';

export default {
  title: 'Molecules/Test',
  component: Test,
  subcomponents: {
    'Test.Title': Test.Title,
  },
} as ComponentMeta<typeof Test>;

const Template: ComponentStory<typeof Test> = (args) => (
  <Test {...args}>
    <Test.Title>Hi world</Test.Title>
  </Test>
);

export const TestStory = Template.bind({});
TestStory.storyName = 'Test';
TestStory.args = {
  className: 'h-[300px] w-[165px]',
};
