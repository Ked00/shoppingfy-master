import ActionButtons from "./ActionButtons";
import KeyboardBackspace from "@mui/icons-material/KeyboardBackspace";
import Image from "next/image";

type Props = {
  backToCart: () => void;
};

export function ItemInfo(props: Props) {
  return (
    <div className="container relative h-full">
      <div className="flex text-[#F9A109] mt-3">
        <KeyboardBackspace />
        <p>Back</p>
      </div>
      <Image src={require("../../public/orange.jpg")} alt="fruit" className="p-3" />
      <div className="mt-4">
        <p>Name</p>
        <h2>Avocado</h2>

        <p className="mt-4">Category</p>
        <h5>Fruit and vegetables</h5>

        <p className="mt-4">note</p>
        <h5>
          Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and
          other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80
          calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense
          food choice.
        </h5>
      </div>
      <ActionButtons
        Button1text="Cancel"
        Button2text="Add to cart"
        backToCart={props.backToCart}
      />
    </div>
  );
}
