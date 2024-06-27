import type { Meta, StoryObj } from "@storybook/react";

import {
  Layout,
  Header,
  LayoutWithSider,
  Content,
  Sider,
  Footer,
} from "./layout";

const meta = {
  title: "Atoms/Layout",
  component: Layout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Layout1: Story = {
  args: {
    children: <div>Content</div>,
  },
  render: ({ children }) => (
    <Layout>
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  ),
};
export const Layout2: Story = {
  args: {
    children: <div>Content</div>,
  },
  render: ({ children }) => (
    <Layout>
      <Header>Header</Header>
      <LayoutWithSider siderPosition="right">
        <Content>{children}</Content>
        <Sider>Sider</Sider>
      </LayoutWithSider>
      <Footer>Footer</Footer>
    </Layout>
  ),
};
export const Layout3: Story = {
  args: {
    children: <div>Content</div>,
  },
  render: ({ children }) => (
    <Layout>
      <Header>Header</Header>
      <LayoutWithSider siderPosition="left">
        <Sider>Sider</Sider>
        <Content>{children}</Content>
      </LayoutWithSider>
      <Footer>Footer</Footer>
    </Layout>
  ),
};
export const Layout4: Story = {
  args: {
    children: <div>Content</div>,
  },
  render: ({ children }) => (
    <Layout>
      <Header>Header</Header>
      <LayoutWithSider siderPosition="top">
        <Sider horizontal>Sider</Sider>
        <Content>{children}</Content>
      </LayoutWithSider>
      <Footer>Footer</Footer>
    </Layout>
  ),
};
export const Layout5: Story = {
  args: {
    children: <div>Content</div>,
  },
  render: ({ children }) => (
    <Layout>
      <Header>Header</Header>
      <LayoutWithSider siderPosition="bottom">
        <Content>{children}</Content>
        <Sider horizontal>Sider</Sider>
      </LayoutWithSider>
      <Footer>Footer</Footer>
    </Layout>
  ),
};
