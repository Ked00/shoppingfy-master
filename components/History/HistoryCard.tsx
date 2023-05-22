import {Card} from "@mui/joy";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import {CompletedChip} from "./CompletedChip";
import {CancelledChip} from "./CancelledChip";

type Props = {
  groceryListName: string;
  Date: string;
  completed: boolean;
};

export function HistoryCard(props: Props) {
  return (
    <Card
      sx={{width: "811.96px", height: "63.45px"}}
      orientation="horizontal"
      className="flex justify-between"
    >
      <h5>{props.groceryListName}</h5>
      <div>
        <CalendarMonth sx={{color: "#C1C1C4"}} className="me-3" />
        <p className="text-[#C1C1C4] inline-flex me-3">{props.Date}</p>
        {props.completed ? <CompletedChip /> : <CancelledChip />}
        <KeyboardArrowRight sx={{color: "#F9A109", width: "70px", height: "35px"}} />
      </div>
    </Card>
  );
}
