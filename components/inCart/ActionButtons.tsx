import {Button} from "@mui/joy";

type Props = {
  Button1text: string;
  Button2text: string;
  backToCart?: () => void;
};
export default function ActionButtons(props: Props) {
  return (
    <div className="absolute bottom-0 w-full text-center mb-4">
      <Button variant="plain" className="mr-3 text-black" onClick={props.backToCart}>
        {props.Button1text}
      </Button>
      <Button variant="solid">
        {props.Button2text}
      </Button>
    </div>
  );
}
