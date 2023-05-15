import {Button} from "@mui/material";
import {Logo} from "./Logo";

export function AddItem() {
  return (
    <div className="flex justify-center mt-4">
      <div className="bg-[#80485B] w-[308.76px] h-[129.91px] rounded relative flex justify-center align-items-center flex-col">
        <Logo />
        <p className="text-white text-lg font-bold float-right ms-5 my-2">
          Didn't find what you <span className="block">need?</span>
        </p>
        <Button className="w-[120px] h-[40px] bg-white text-black border-white mb-2">
          Add item
        </Button>
      </div>
    </div>
  );
}
