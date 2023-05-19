import {LinearProgress} from "@mui/joy";

export function TopItem() {
  return (
    <div className="mb-5">
      <div className="flex justify-between">
        <p className="font-semibold">Bread</p>
        <h5>12%</h5>
      </div>
      <LinearProgress determinate value={12} />
    </div>
  );
}
