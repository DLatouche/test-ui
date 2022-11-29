import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./button";

export default {
	title: "Components/Inputs/Buttons/Button",
	component: Button,
	parameters: {
		docs: {
			description: {
				component: "Button is used to catch user action.",
			},
		},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
	return <Button {...args}>{args.children}</Button>;
};
Template.args = {};

export const Default = Template.bind({});
Default.args = { children: "Button" };
Default.storyName = "Button";
