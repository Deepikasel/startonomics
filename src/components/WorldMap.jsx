import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import MapTooltip from "./MapTooltip";
import startups from "../data/startups";
import { getCountryCounts } from "../utils/getCountryCounts";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const countryCounts = getCountryCounts(startups);

export default function WorldMap() {
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  return (
    <div className="relative w-full h-[460px] md:h-[520px] flex items-center justify-center">

      {/* ===== ZOOM CONTROLS ===== */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-2">
        <button
          onClick={() =>
            setPosition((pos) => ({
              ...pos,
              zoom: Math.min(pos.zoom * 1.4, 8),
            }))
          }
          className="w-9 h-9 flex items-center justify-center
                     bg-green-600 hover:bg-green-700 text-white
                     rounded-lg font-bold text-lg"
        >
          +
        </button>

        <button
          onClick={() =>
            setPosition((pos) => ({
              ...pos,
              zoom: Math.max(pos.zoom / 1.4, 1),
            }))
          }
          className="w-9 h-9 flex items-center justify-center
                     bg-green-600 hover:bg-green-700 text-white
                     rounded-lg font-bold text-lg"
        >
          −
        </button>

        <button
          onClick={() =>
            setPosition({ coordinates: [0, 0], zoom: 1 })
          }
          className="w-9 h-9 flex items-center justify-center
                     bg-gray-200 hover:bg-gray-300 text-gray-700
                     rounded-lg text-sm"
          title="Reset"
        >
          ⟳
        </button>
      </div>

      {/* ===== MAP ===== */}
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 150,
        }}
        width={800}
        height={450}
        style={{ width: "100%", height: "100%" }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={(pos) => setPosition(pos)}
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
        </ZoomableGroup>
      </ComposableMap>

      <MapTooltip />
    </div>
  );
}
