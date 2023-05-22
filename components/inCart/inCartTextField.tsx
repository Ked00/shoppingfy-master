import {TextField} from "@mui/material";
import { ChangeEvent } from "react";


type Props = {
  updateInput: (event: ChangeEvent<HTMLInputElement>) => void
}

export function NameListTextField(props: Props) {
  return (
    <div className="bg-white h-36 fixed bottom-0 w-96 flex justify-center align-items-center">
      <TextField
        placeholder="Enter a name"
        className="w-72 rounded"
        sx={{border: "#F9A109 2px solid"}}
        name="cart"
        onChange={props.updateInput}
      />
    </div>
  );
}