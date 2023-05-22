import {AddItem} from "./AddItem";
import {NameListTextField} from "./inCartTextField";

type Props = {
    addingItem: ()=> void
}

export function ItemsList(props: Props) {
  return (
    <>
      <AddItem addItem={props.addingItem} />
      <div className="flex justify-between align-items-center my-5 container">
        <h2 className="ms-3">Shopping List</h2>
        <img src={require("../../public/edit.png")} />
      </div>
      <NameListTextField />
    </>
  );
}
