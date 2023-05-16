"use client";
import {Card, Stack, Chip} from "@mui/joy";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function history() {
  return (
    <div className="container p-5 me-5">
      <div>
        <h2>Shopping history</h2>
      </div>

      <h5 className="mt-16 mb-3">August 2020</h5>
      <Stack spacing={3}>
        <Card
          sx={{width: "811.96px", height: "63.45px"}}
          orientation="horizontal"
          className="flex justify-between"
        >
          <h5>Grocery List</h5>
          <div>
            <CalendarMonth sx={{color: "#C1C1C4"}} className="mx-3" />
            <p className="text-[#C1C1C4] inline-flex">Mon 24.8.2020</p>
            <Chip variant="outlined" className=" border-1 border-[#56CCF2] text-[#56CCF2]">
              Completed
            </Chip>
            <KeyboardArrowRight
              sx={{color: "#F9A109", width: "70px", height: "35px"}}
            />
          </div>
        </Card>
      </Stack>
    </div>
  );
}
