import {Drawer, Container} from "@mui/material";
import {useIsOpen} from "../../hooks/isOpen";

// components
import {AddItem} from "./AddItem";
import {GroceryItem} from "./GroceryItem";
import { NameListTextField } from "./inCartTextField";

export function ShoppingList() {
  const showing = useIsOpen();
  return (
    <Drawer
      open={showing.isShowing}
      hideBackdrop={true}
      anchor="right"
      PaperProps={{sx: {width: "389px", bgcolor: "#FFF0DE", boxShadow: 0}}}
      className="relative overflow-hidden"
      variant="persistent"
    >
      <AddItem />
      <Container>
        <div className="flex justify-between align-items-center my-5">
          <h2 className="ms-3">Shopping List</h2>
          <img src={require("../../public/edit.png")} />
        </div>
        <p className="text-[#828282]">Fruits & vegtables</p>
        <GroceryItem itemName="Tomato" quanity={3} />
        <GroceryItem itemName="Apple" quanity={7} />
        <GroceryItem itemName="Apple" quanity={7} />
        <GroceryItem itemName="Apple" quanity={7} />
      </Container>
      <NameListTextField />
    </Drawer>
  );
}
