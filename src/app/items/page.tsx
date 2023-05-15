"use client";
import {Input} from "@mui/joy";
import {ItemCard} from "../../../components/itemCards/ItemCard";
import {Row, Col} from "react-bootstrap";

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
        <h4>Fruits and vegetables</h4>
        <Row className="w-3/4 my-5">
          <Col xs={4} className="mb-3">
            <ItemCard item="Avocado" category="Fruits and vegetables" />
          </Col>
          <Col xs={4} className="mb-3">
            <ItemCard item="Banana" category="Fruits and vegetables" />
          </Col>
          <Col xs={4} className="mb-3">
            <ItemCard item="Bunch of carrots 5pcs" category="Fruits and vegetables" />
          </Col>
          <Col xs={4} className="mb-3">
            <ItemCard item="Chicken 1kg" category="Fruits and vegetables" />
          </Col>
          <Col xs={4} className="mb-3">
            <ItemCard item="Pre-cooked corn 450g" category="Fruits and vegetables" />
          </Col>
          <Col xs={4} className="mb-3">
            <ItemCard item="Mandarin Nadorcott" category="Fruits and vegetables" />
          </Col>
          <Col xs={4}>
            <ItemCard item="Piele De Sapo Melon" category="Fruits and vegetables" />
          </Col>
          <Col xs={4}>
            <ItemCard item="Watermelon" category="Fruits and vegetables" />
          </Col>
        </Row>

        <h4>Meat and Fish</h4>
        <Row className="w-3/4 my-5">
          <Col xs={4} className="mb-3">
            <ItemCard item="Chicken leg box" category="Meat and Fish" />
          </Col>
          <Col xs={4} className="mb-3">
            <ItemCard item="Chicken 1kg" category="Meat and Fish" />
          </Col>
          <Col xs={4} className="mb-3">
            <ItemCard item="Pork fillets 450g" category="Meat and Fish" />
          </Col>
          <Col xs={4} className="mb-3">
            <ItemCard item="Salmon 1kg" category="Meat and Fish" />
          </Col>
        </Row>

        <h4>Beverages</h4>
        <Row className="w-3/4 my-5">
          <Col xs={4} className="mb-3">
            <ItemCard item="Fruit Punch" category="Beverages" />
          </Col>
          <Col xs={4} className="mb-3">
            <ItemCard item="Root Beer" category="Beverages" />
          </Col>
          <Col xs={4} className="mb-3">
            <ItemCard item="Water" category="Beverages" />
          </Col>
          <Col xs={4} className="mb-3">
            <ItemCard item="Orange Juice" category="Beverages" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
