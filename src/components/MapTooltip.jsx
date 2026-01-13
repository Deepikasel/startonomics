import { Tooltip } from "react-tooltip";

export default function MapTooltip() {
  return (
    <Tooltip
      id="map-tooltip"
      place="top"
      className="bg-green-700 text-white px-3 py-2 rounded-lg text-sm shadow-lg z-50"
    />
  );
}
