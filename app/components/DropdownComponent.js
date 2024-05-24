import React, { useEffect } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function DropdownComponent({ title, items, setCategory }) {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["Todos los productos"])
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  useEffect(() => {
    setCategory(selectedValue);
  }, [selectedKeys]);

  return (
    <Dropdown className="bg-white rounded-lg px-2 py-1 shadow-md ">
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="capitalize bg-white rounded-lg px-2 py-1 shadow-md"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        className="bg-white"
      >
        <DropdownItem key="Todos los productos" className="hover:bg-slate-100">
          Todos los productos
        </DropdownItem>
        {items.map((item, index) => {
          return (
            <DropdownItem key={item.category} className="hover:bg-slate-100">
              {item.category}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}
