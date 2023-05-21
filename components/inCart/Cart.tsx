import {Drawer} from "@mui/material";
import {useIsOpen} from "../../hooks/isOpen";

// components
import {AddItem} from "./AddItem";
import {GroceryItem} from "./GroceryItem";
import {NameListTextField} from "./inCartTextField";
import {AddNewItem} from "../sidemenu/AddNewItem";

export function ShoppingList() {
  const showing = useIsOpen();
  return (
    <Drawer
      open={showing.isShowing}
      hideBackdrop={true}
      anchor="right"
      PaperProps={{sx: {width: "389px", bgcolor: "#FAFAFA", boxShadow: 0}}}
      className="relative overflow-hidden"
      variant="permanent"
    >
      {/* <AddItem />
        <div className="flex justify-between align-items-center my-5 container">
          <h2 className="ms-3">Shopping List</h2>
          <img src={require("../../public/edit.png")} />
        </div>
      <NameListTextField /> */}
      <AddNewItem />
    </Drawer>
  );
}
