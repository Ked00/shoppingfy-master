import {Input, FormControl, FormLabel, Select} from "@mui/joy";
import {InputWithLabel} from "../Inputs/InputWithLabel";

export function AddNewItem() {
  return (
    <div className="container p-3">
      <h3>Add a new item</h3>
      <form className="mt-3 p-3">
        <InputWithLabel label="Name" placeHolder="Enter a name" className="p-3 mb-2" />
        <InputWithLabel label="Note (optional)" placeHolder="Enter a note" className="p-14 mb-3 text-left" />
        <InputWithLabel label="image (optional)" placeHolder="Enter a url" className="p-3 mb-4" />
        <Select placeholder="Enter a category">
            
        </Select>
      </form>
    </div>
  );
}
