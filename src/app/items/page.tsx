"use client";
import {Input} from "@mui/joy";
import {ItemCard} from "../../../components/itemCards/itemCard";

export default function Items() {
  return (
    <div className="container p-5">
      <div className="flex">
        <h2 className="w-2/4">
          <span className="text-[#F9A109]">Shoppingify </span>allows you to take your shopping list
          wherever you go
        </h2>
        <Input
          placeholder="search item"
          type="search"
          sx={{width: "275.61px", height: "50.92px"}}
        />
      </div>

      <div className="mt-5">
        <h4 className="mt-3">Fruits and vegetables</h4>
        <ItemCard item="Avocado" category="Fruits and vegetables" />
        <ItemCard item="Banana" category="Fruits and vegetables" />
        <ItemCard item="Bunch of carrots 5pcs" category="Fruits and vegetables" />
        <ItemCard item="Chicken 1kg" category="Fruits and vegetables" />
        <ItemCard item="Pre-cooked corn 450g" category="Fruits and vegetables" />
        <ItemCard item="Mandarin Nadorcott" category="Fruits and vegetables" />
        <ItemCard item="Piele De Sapo Melon" category="Fruits and vegetables" />
        <ItemCard item="Watermelon" category="Fruits and vegetables" />
      </div>
    </div>
  );
}
