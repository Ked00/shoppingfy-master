"use client";
import {Stack} from "@mui/joy";
import {HistoryCard} from "../../../components/History/HistoryCard";

export default function history() {
  return (
    <div className="container p-5 me-5">
      <div>
        <h2>Shopping history</h2>
      </div>

      <h5 className="mt-16 mb-3">August 2020</h5>
      <Stack spacing={3}>
        <HistoryCard Date="Mon" completed={false} groceryListName="Breakfast" />
        <HistoryCard Date="Tue" completed={true} groceryListName="Lunch" />
        <HistoryCard Date="Wed" completed={true} groceryListName="Thanksgiving" />
        <HistoryCard Date="Wed" completed={false} groceryListName="Dinner with kayla" />
      </Stack>
    </div>
  );
}
