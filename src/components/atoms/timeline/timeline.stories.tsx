import type { Meta, StoryObj } from "@storybook/react";

import Timeline from "./timeline";

const meta = {
  title: "Atoms/Timeline",
  component: Timeline,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

const events = [
  {
    title: "New branch",
    content: "You've created a new branch fix-notifications from master",
    time: "2 hours ago",
  },
  {
    title: "Commits",
    content: "You've pushed 23 commits to fix-notifications branch",
    time: "52 minutes ago",
  },
  {
    title: "Pull request",
    content:
      "You've submitted a pull request Fix incorrect notification message (#187)",
    time: "34 minutes ago",
  },
  {
    title: "Code review",
    content: "Robert Gluesticker left a code review on your pull request",
    time: "12 minutes ago",
  },
];

export const TimelineDefault: Story = {
  args: {
    layout: "alternating",
    events,
  },
  render: ({ layout, events }) => <Timeline layout={layout} events={events} />,
};
