import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { motion } from "framer-motion";
import MapTooltip from "./MapTooltip";
import { asiaStartupData } from "../data/asiaStartupData";
import startups from "../data/startups";
import { getCountryCounts } from "../utils/getCountryCounts";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const countryCounts = getCountryCounts(startups);

export default function WorldMap() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-white to-green-50 py-20">

      {/* Title */}
      <motion.h2
        className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        🌍 Asian Startup Ecosystem
      </motion.h2>

      <p className="text-center text-gray-600 mb-10">
        Hover over Asian countries to view startup count
      </p>

      {/* Map Wrapper */}
      <div className="w-full flex justify-center">
        <div className="w-[95%] max-w-5xl border rounded-xl shadow-md bg-white p-4">

          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 500,
              center: [100, 30], // Asia focus
            }}
            width={800}
            height={500}
          >
            <Geographies geography={geoUrl}>
  {({ geographies }) =>
    geographies.map((geo) => {
      const countryName = geo.properties.name;
      const count = countryCounts[countryName];

      return (
        <Geography
          key={geo.rsmKey}
          geography={geo}
          fill={count ? "#22c55e" : "#e5e7eb"}
          data-tooltip-id="map-tooltip"
          data-tooltip-content={
            count
              ? `${countryName}: ${count} startups`
              : `${countryName}: No startups listed`
          }
          stroke="#ffffff"
          style={{
            default: { outline: "none" },
            hover: {
              fill: "#16a34a",
              cursor: "pointer",
              outline: "none",
            },
            pressed: { outline: "none" },
          }}
        />
      );
    })
  }
</Geographies>

          </ComposableMap>

        </div>
      </div>

      {/* Tooltip */}
      <MapTooltip />
    </section>
  );
}
