import {Drawer, Avatar, Button} from "@mui/material";
import {UserPic} from "./UserPic";
import {Navigation} from "./Navigation";

export function Sidemenu() {
  return (
    <Drawer variant="permanent">
      <div className="flex justify-between align-items-center flex-col h-full">
        <UserPic />
        <Navigation />
        {/* controls shopping list */}
        <Button>
          <Avatar className="mb-4" />
        </Button>
      </div>
    </Drawer>
  );
}
