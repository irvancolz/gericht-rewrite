"use client";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

export type DropdownContextValue = {
  listExpanded: boolean;
  toggleListExpand: () => void;
  value: string;
  updateValue: (s: string) => void;
};

const DropdownContext = createContext<DropdownContextValue | null>(null);

export const useDropdown = () => useContext(DropdownContext);

export function DropDownContextProvider({ children }: PropsWithChildren) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  function toggleExpanded() {
    setIsExpanded((a) => !a);
  }

  function updateValue(s: string) {
    setValue(() => s);
  }

  return (
    <DropdownContext.Provider
      value={{
        listExpanded: isExpanded,
        toggleListExpand: toggleExpanded,
        value,
        updateValue,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
}
