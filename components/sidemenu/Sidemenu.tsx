import {Drawer} from "@mui/material";
import {UserPic} from "./UserPic";
import {Navigation} from "./Navigation";
import { CartButton } from "./CartButton";

export function Sidemenu() {
  return (
    <Drawer variant="permanent">
      <div className="flex justify-between align-items-center flex-col h-full">
        <UserPic />
        <Navigation />
        {/* controls shopping list */}
       <CartButton />
      </div>
    </Drawer>
  );
}
