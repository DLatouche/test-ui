import React from "react";
import { ButtonProps } from "./types";

export const Button = ({ children }: ButtonProps) => {
	return <div className="bg-main-600 p-4 rounded">{children}</div>;
};
