import {Button} from "@mui/material";

type groceryItem = {
    itemName: string,
    quanity: number
}

export function GroceryItem(props: groceryItem){
    return(
        <div className="flex justify-between align-items-center w-11/12">
          <p className="mt-3 font-medium ms-3">{props.itemName}</p>
          <Button
            sx={{border: "orange 2px solid", width: "77px", height: "32px"}}
            variant="outlined"
            className="rounded-full text-orange-500"
          >
          {`${props.quanity} pcs`}
          </Button>
        </div>
    )
}