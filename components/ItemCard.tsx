import {Card} from "@mui/joy";
import AddIcon from "@mui/icons-material/Add";

type prop = {
  item: string,
  category: string
}

export function ItemCard(Props: prop) {
  return (
    <Card
      sx={{width: "230px", height: "60px", cursor: "pointer"}}
      orientation="horizontal"
      className="flex justify-between"
      
    >
      <p>{Props.item}</p>
      <AddIcon sx={{color: "#C1C1C4"}} cursor="pointer"/>
    </Card>
  );
}
