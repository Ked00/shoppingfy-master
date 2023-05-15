import {Drawer, Avatar, Button, Badge, IconButton} from "@mui/material";
import {ShoppingCartOutlined} from "@mui/icons-material";

export function CartButton() {
  return (
    <IconButton className="bg-[#F9A109] mb-4" disableRipple={true} disableTouchRipple={true}>
      <Badge badgeContent={4} max={999} color="error">
        <ShoppingCartOutlined />
      </Badge>
    </IconButton>
  );
}
