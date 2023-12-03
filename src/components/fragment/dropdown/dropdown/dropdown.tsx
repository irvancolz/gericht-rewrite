import React from "react";
import { Select, SelectProps } from "..";
import { DropDownContextProvider } from "./context";

export function Dropdown({ ...props }: SelectProps) {
  return (
    <DropDownContextProvider>
      <Select {...props} />
    </DropDownContextProvider>
  );
}
