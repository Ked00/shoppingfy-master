import {useState} from "react";
import {AddItemBanner} from "./AddItemBanner";
import {NameListTextField} from "./inCartTextField";

import {useUpdateInputValue} from "../../hooks/UpdateInputValue";

type Props = {
  menuStatus: () => void;
};

export function ItemsList(props: Props) {
  const [cartName, setCartName] = useState("");
  const controlInput = useUpdateInputValue();

  return (
    <>
      <AddItemBanner menuStatus={props.menuStatus} />
      <div className="flex justify-between align-items-center my-5 container">
        <h2 className="ms-3">{cartName}</h2>
        <img src={require("../../public/edit.png")} />
      </div>
      <NameListTextField updateInput={controlInput.updateInput}/>
    </>
  );
}
