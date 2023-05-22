import {Drawer} from "@mui/material";
import {useIsOpen} from "../../hooks/isOpen";

// components
import {AddNewItem} from "../sidemenu/AddNewItem";
import {ItemsList} from "./ItemsList";

export function ShoppingList() {
  const showDrawer = useIsOpen(false);
  const newItemMenu = useIsOpen();
  const bgColor = newItemMenu.isShowing ? "#FFF0DE": "#FAFAFA";

  return (
    <Drawer
      open={showDrawer.isShowing}
      hideBackdrop={true}
      anchor="right"
      PaperProps={{sx: {width: "389px", bgcolor: bgColor, boxShadow: 0, border: "0"}}}
      className="relative overflow-hidden"
      variant="permanent"
    >
      {newItemMenu.isShowing ? (
        <ItemsList menuStatus={newItemMenu.reverseShowing} />
      ) : (
        <AddNewItem backToCart={newItemMenu.reverseShowing} />
      )}
    </Drawer>
  );
}
