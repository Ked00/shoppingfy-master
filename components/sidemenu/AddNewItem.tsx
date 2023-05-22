import {FormControl, FormLabel, Select, Option, Button} from "@mui/joy";
import {TextInputWithLabel} from "../Inputs/TextInputWithLabel";

type Props = {
  backToCart: () => void;
};

export function AddNewItem(props: Props) {
  return (
    <div className="container p-3 h-full relative">
      <h3>Add a new item</h3>
      <form className="mt-3 p-3">
        <TextInputWithLabel label="Name" placeHolder="Enter a name" className="p-3 mb-2" />
        <TextInputWithLabel
          label="Note (optional)"
          placeHolder="Enter a note"
          className="p-14 mb-3 text-left"
        />
        <TextInputWithLabel label="image (optional)" placeHolder="Enter a url" className="p-3 mb-4" />
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Select placeholder="Enter a category">
            <Option value="Fruit and vegetables">Fruit and vegetables</Option>
            <Option value="Meat and Fish">Meat and Fish</Option>
            <Option value="Beverages">Beverages</Option>
            <Option value="Snacks">Snacks</Option>
          </Select>
        </FormControl>
      </form>
      <div className="absolute bottom-0 w-full text-center mb-4">
        <Button variant="plain" className="mr-3 text-black" onClick={props.backToCart}>
          Cancel
        </Button>
        <Button variant="solid">Save</Button>
      </div>
    </div>
  );
}
