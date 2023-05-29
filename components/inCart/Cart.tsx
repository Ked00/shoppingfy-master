import {Drawer} from "@mui/material";
import {useIsOpen} from "../../hooks/isOpen";

// components
import {AddNewItem} from "../sidemenu/AddNewItem";
import {ItemsList} from "./ItemsList";
import {ItemInfo} from "./ItemInfo";

export function ShoppingList() {
  const newItemMenu = useIsOpen(false);
  const itemInfo = useIsOpen(false);
  // const bgColor = itemList.isShowing ? "#FFF0DE" : "#FAFAFA";

  const showItemInfo = () => {
    newItemMenu.setShowingState(false);
    itemInfo.setShowingState(true);
  };

  const showMenu = () => {
    itemInfo.setShowingState(false);
    newItemMenu.setShowingState(true);
  };

  return (
    <Drawer
      open={true}
      hideBackdrop={true}
      anchor="right"
      PaperProps={{sx: {width: "389px", boxShadow: 0, border: "4"}}}
      className="relative overflow-hidden"
      variant="persistent"
    >
      {!itemInfo.isShowing && !newItemMenu.isShowing && <ItemsList menuStatus={newItemMenu.reverseShowing} />}
      {itemInfo.isShowing && <ItemInfo backToCart={newItemMenu.reverseShowing} />}
      {newItemMenu.isShowing &&  <AddNewItem backToCart={newItemMenu.reverseShowing} />}
    </Drawer>
  );
}
