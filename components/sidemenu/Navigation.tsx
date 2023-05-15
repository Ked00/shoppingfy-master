import {List, ListItemButton, ListItem} from "@mui/material";
import {InsertChartOutlined, ReplayOutlined, FormatListBulletedOutlined} from "@mui/icons-material";

export function Navigation() {
  return (
    <List>
      <ListItem className="mb-5">
        <ListItemButton disableRipple={true} disableTouchRipple={true} href="/items">
          <FormatListBulletedOutlined />
        </ListItemButton>
      </ListItem>
      <ListItem className="mb-5">
        <ListItemButton disableRipple={true} disableTouchRipple={true} href="/history">
          <ReplayOutlined />
        </ListItemButton>
      </ListItem>
      <ListItem className="mb-5">
        <ListItemButton disableRipple={true} disableTouchRipple={true} href="/stats">
          <InsertChartOutlined />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
