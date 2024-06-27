import type { Meta, StoryObj } from "@storybook/react";

import Dropdown from "./dropdown";
import { useState } from "react";
import { fn } from "@storybook/test";

const meta = {
  title: "Atoms/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
  { value: "4", label: "Option 4" },
  { value: "5", label: "Option 5" },
];

export const SingleDropdown: Story = {
  args: {
    options,
    label: "Dropdown Select",
    isOpen: false,
    onSelect: fn(),
    onToggle: fn(),
    selected: null,
  },
  render: ({ label, options }) => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSelect = (option: Option) => {
      setSelectedOption(option);
      setIsDropdownOpen(false);
    };

    const handleToggle = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    return (
      <Dropdown
        label={label}
        options={options as Option[]}
        selected={selectedOption}
        isOpen={isDropdownOpen}
        onSelect={handleSelect}
        onToggle={handleToggle}
      />
    );
  },
};
export const MultipleDropdown: Story = {
  args: {
    options,
    label: "Dropdown Select",
    isOpen: false,
    onSelect: fn(),
    onToggle: fn(),
    selected: [],
  },
  render: ({ label, options }) => {
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSelect = (option: Option) => {
      if (
        !selectedOptions.some((selected) => selected.value === option.value)
      ) {
        setSelectedOptions([...selectedOptions, option]);
      }
    };

    const handleRemove = (option: Option) => {
      setSelectedOptions(
        selectedOptions.filter((selected) => selected.value !== option.value)
      );
    };

    const handleToggle = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    return (
      <Dropdown
        label={label}
        multiple
        options={options as Option[]}
        selected={selectedOptions}
        isOpen={isDropdownOpen}
        onSelect={handleSelect}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    );
  },
};
