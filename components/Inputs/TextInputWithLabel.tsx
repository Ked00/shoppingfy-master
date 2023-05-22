import {FormControl, FormLabel, Input} from "@mui/joy";

type Props = {
  label: string;
  placeHolder: string;
  className: string;
};

export function TextInputWithLabel(props: Props) {
  return (
    <FormControl>
      <FormLabel>{props.label}</FormLabel>
      <Input placeholder={`${props.placeHolder}`} className={`${props.className}`} />
    </FormControl>
  );
}
