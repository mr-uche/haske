"use client";

import { useEffect, useState } from "react";
import {
  MapContainer,
  GeoJSON,
  useMap,
} from "react-leaflet";
import type { FeatureCollection, Feature } from "geojson";
import type { Layer } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { Severity } from "@/lib/lgaData";

interface HeatMapTreemapProps {
  onSelect: (name: string) => void;
}

/* =====================================================
   COLORS
===================================================== */

const severityStyle: Record<
  Severity,
  {
    fillColor: string;
    color: string;
  }
> = {
  healthy: {
    fillColor: "#22c55e",
    color: "#15803d",
  },

  moderate: {
    fillColor: "#fbbf24",
    color: "#d97706",
  },

  high: {
    fillColor: "#f97316",
    color: "#ea580c",
  },

  critical: {
    fillColor: "#ef4444",
    color: "#b91c1c",
  },
};

/* =====================================================
   LEGEND
===================================================== */

const legend = [
  {
    label: "Healthy / Low",
    color: "#22c55e",
  },
  {
    label: "Moderate",
    color: "#fbbf24",
  },
  {
    label: "High",
    color: "#f97316",
  },
  {
    label: "Critical",
    color: "#ef4444",
  },
];

/* =====================================================
   LGA DATA
===================================================== */

const lgaData: Record<
  string,
  {
    cases: number;
    severity: Severity;
  }
> = {
  Michika: {
    cases: 54,
    severity: "critical",
  },

  "Mubi North": {
    cases: 41,
    severity: "high",
  },

  "Mubi South": {
    cases: 18,
    severity: "moderate",
  },

  Madagali: {
    cases: 29,
    severity: "moderate",
  },

  Gombi: {
    cases: 38,
    severity: "high",
  },

  Hong: {
    cases: 67,
    severity: "critical",
  },

  Song: {
    cases: 16,
    severity: "moderate",
  },

  Maiha: {
    cases: 0,
    severity: "healthy",
  },

  "Yola North": {
    cases: 2,
    severity: "healthy",
  },

  "Yola South": {
    cases: 4,
    severity: "healthy",
  },

  Girei: {
    cases: 1,
    severity: "healthy",
  },

  Fufore: {
    cases: 8,
    severity: "healthy",
  },

  "Mayo-Belwa": {
    cases: 16,
    severity: "moderate",
  },

  Jada: {
    cases: 3,
    severity: "healthy",
  },

  Demsa: {
    cases: 5,
    severity: "healthy",
  },

  Lamurde: {
    cases: 7,
    severity: "healthy",
  },

  Numan: {
    cases: 9,
    severity: "moderate",
  },

  Guyuk: {
    cases: 11,
    severity: "moderate",
  },

  Shelleng: {
    cases: 6,
    severity: "healthy",
  },

  Toungo: {
    cases: 2,
    severity: "healthy",
  },

  "Yola South": {
    cases: 4,
    severity: "healthy",
  },

  Ganye: {
    cases: 3,
    severity: "healthy",
  },
};

/* =====================================================
   GET LGA NAME
===================================================== */

function getLgaName(properties: any): string {
  if (!properties) return "";

  return (
    properties.name ||
    properties.NAME ||
    properties.NAME_2 ||
    properties.lga ||
    properties.LGA ||
    properties.LGA_NAME ||
    properties.admin2Name ||
    properties.LGA_NAME_2 ||
    ""
  );
}

/* =====================================================
   GET STATE NAME
===================================================== */

function getStateName(properties: any): string {
  if (!properties) return "";

  return (
    properties.state ||
    properties.STATE ||
    properties.State ||
    properties.state_name ||
    properties.STATE_NAME ||
    properties.admin1Name ||
    properties.ADM1_NAME ||
    properties.NAME_1 ||
    properties.NAME_0 ||
    ""
  );
}

/* =====================================================
   CHECK IF FEATURE BELONGS TO ADAMAWA
===================================================== */

function isAdamawaFeature(feature: Feature): boolean {
  const properties = feature.properties as any;

  if (!properties) return false;

  const stateName = getStateName(properties)
    .toString()
    .trim()
    .toLowerCase();

  /*
   * If the GeoJSON explicitly contains a state field,
   * only keep Adamawa.
   */
  if (stateName) {
    return (
      stateName === "adamawa" ||
      stateName === "adamawa state"
    );
  }

  /*
   * Some GeoJSON files don't contain the state field.
   *
   * In that case we identify the feature using the
   * known Adamawa LGA names.
   */
  const lgaName = getLgaName(properties)
    .trim()
    .toLowerCase();

  const adamawaLgas = [
    "demsa",
    "fufore",
    "ganye",
    "girei",
    "gombi",
    "guyuk",
    "hong",
    "jada",
    "lamurde",
    "madagali",
    "maiha",
    "mayo-belwa",
    "michika",
    "mubi north",
    "mubi south",
    "numan",
    "shelleng",
    "song",
    "toungo",
    "yola north",
    "yola south",
  ];

  return adamawaLgas.includes(lgaName);
}

/* =====================================================
   FIT MAP TO ADAMAWA
===================================================== */

function FitAdamawaBounds({
  geojson,
}: {
  geojson: FeatureCollection;
}) {
  const map = useMap();

  useEffect(() => {
    if (!geojson) return;

    const layer = L.geoJSON(geojson);

    const bounds = layer.getBounds();

    if (!bounds.isValid()) {
      console.error("Adamawa GeoJSON bounds are invalid.");
      return;
    }

    /*
     * Fit ONLY the filtered Adamawa GeoJSON.
     */
    map.fitBounds(bounds, {
      padding: [20, 20],
      animate: false,
    });

    /*
     * Stop the map from zooming out to Nigeria.
     */
    const fittedZoom = map.getZoom();

    map.setMinZoom(fittedZoom);

    /*
     * Keep the user inside Adamawa.
     */
    map.setMaxBounds(bounds.pad(0.05));

    /*
     * Make sure Leaflet recalculates the container size.
     */
    setTimeout(() => {
      map.invalidateSize();
      map.fitBounds(bounds, {
        padding: [20, 20],
        animate: false,
      });

      map.setMinZoom(map.getZoom());
    }, 150);
  }, [geojson, map]);

  return null;
}

/* =====================================================
   MAIN COMPONENT
===================================================== */

export default function HeatMapTreemap({
  onSelect,
}: HeatMapTreemapProps) {
  const [geojson, setGeojson] =
    useState<FeatureCollection | null>(null);

  const [selected, setSelected] =
    useState<string | null>(null);

  const [error, setError] =
    useState<string | null>(null);

  /* ===================================================
     LOAD GEOJSON
  =================================================== */

  useEffect(() => {
    fetch("/geojson/adamawa-lga.geojson")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `GeoJSON request failed: ${response.status}`
          );
        }

        return response.json();
      })

      .then((data: FeatureCollection) => {
        /*
         * ==============================================
         * THIS IS THE IMPORTANT FIX
         * ==============================================
         *
         * Do NOT pass the complete GeoJSON to Leaflet.
         *
         * Keep ONLY Adamawa LGA features.
         */

        const adamawaFeatures =
          data.features.filter((feature) =>
            isAdamawaFeature(feature)
          );

        console.log(
          "Total GeoJSON features:",
          data.features.length
        );

        console.log(
          "Adamawa features:",
          adamawaFeatures.length
        );

        console.log(
          "Adamawa LGAs:",
          adamawaFeatures.map((feature) =>
            getLgaName(feature.properties)
          )
        );

        if (adamawaFeatures.length === 0) {
          throw new Error(
            "No Adamawa LGA features were found in the GeoJSON."
          );
        }

        const adamawaGeoJSON: FeatureCollection = {
          type: "FeatureCollection",
          features: adamawaFeatures,
        };

        setGeojson(adamawaGeoJSON);
      })

      .catch((err) => {
        console.error(err);

        setError(
          err instanceof Error
            ? err.message
            : "Unable to load Adamawa State map."
        );
      });
  }, []);

  /* ===================================================
     STYLE LGA
  =================================================== */

  function styleFeature(feature: any) {
    const name = getLgaName(
      feature?.properties
    );

    const severity =
      lgaData[name]?.severity ?? "healthy";

    const style =
      severityStyle[severity];

    return {
      fillColor: style.fillColor,
      color: style.color,
      weight: 2,
      fillOpacity: 0.8,
      opacity: 1,
    };
  }

  /* ===================================================
     LGA EVENTS
  =================================================== */

  function onEachFeature(
    feature: any,
    layer: Layer
  ) {
    const name = getLgaName(
      feature?.properties
    );

    const cases =
      lgaData[name]?.cases ?? 0;

    layer.on({
      mouseover: (event: any) => {
        const target = event.target;

        target.setStyle({
          weight: 3,
          fillOpacity: 0.95,
        });

        target.bringToFront();
      },

      mouseout: (event: any) => {
        event.target.setStyle(
          styleFeature(feature)
        );
      },

      click: () => {
        setSelected(name);

        /*
         * Send selected LGA to the side panel.
         */
        onSelect(name);
      },
    });

    /*
     * LGA tooltip
     */
    if (name) {
      layer.bindTooltip(
        `
        <div
          style="
            font-family: Arial, sans-serif;
            min-width: 130px;
            text-align: center;
          "
        >
          <strong>${name}</strong>
          <br/>
          <span>${cases} active cases</span>
        </div>
        `,
        {
          direction: "top",
          sticky: true,
        }
      );
    }
  }

  /* ===================================================
     ERROR
  =================================================== */

  if (error) {
    return (
      <div className="flex h-[600px] w-full items-center justify-center rounded-2xl bg-green-950">
        <div className="text-center">
          <p className="text-lg font-bold text-red-400">
            Unable to load map
          </p>

          <p className="mt-2 text-sm text-white">
            {error}
          </p>

          <p className="mt-3 text-xs text-green-400">
            Make sure this file exists:
          </p>

          <p className="mt-1 text-xs text-green-300">
            public/geojson/adamawa-lga.geojson
          </p>
        </div>
      </div>
    );
  }

  /* ===================================================
     LOADING
  =================================================== */

  if (!geojson) {
    return (
      <div className="flex h-[600px] w-full items-center justify-center rounded-2xl bg-green-950">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-green-400 border-t-transparent" />

          <p className="text-sm font-semibold text-white">
            Loading Adamawa State map...
          </p>

          <p className="mt-1 text-xs text-green-400">
            Loading 21 LGA boundaries
          </p>
        </div>
      </div>
    );
  }

  /* ===================================================
     MAP
  =================================================== */

  return (
    <div className="relative h-[600px] w-full overflow-hidden rounded-2xl border border-green-800 bg-green-950">

      <MapContainer
        className="h-full w-full"
        center={[9.3, 12.4]}
        zoom={8}
        zoomControl={false}
        attributionControl={false}

        /*
         * Disable all user zooming.
         */
        scrollWheelZoom={false}
        doubleClickZoom={false}
        touchZoom={false}
        boxZoom={false}
        keyboard={false}
        dragging={false}
      >

        {/* Fit ONLY Adamawa */}
        <FitAdamawaBounds
          geojson={geojson}
        />

        {/* Adamawa LGAs */}
        <GeoJSON
          key={JSON.stringify(geojson)}
          data={geojson}
          style={styleFeature}
          onEachFeature={onEachFeature}
        />

      </MapContainer>

      {/* =================================================
          LEGEND
      ================================================= */}

      <div className="absolute right-4 top-4 z-[1000] w-[140px] rounded-xl border border-green-700 bg-green-950/95 p-3 shadow-xl">

        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-white">
          Risk Level
        </p>

        <div className="space-y-2">
          {legend.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2"
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{
                  backgroundColor:
                    item.color,
                }}
              />

              <span className="text-[11px] text-white">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* =================================================
          SELECTED LGA
      ================================================= */}

      {selected && (
        <div className="absolute bottom-4 left-4 z-[1000] rounded-xl border border-green-700 bg-green-950 px-4 py-3 shadow-xl">

          <p className="text-[10px] font-semibold uppercase tracking-wider text-green-400">
            Selected LGA
          </p>

          <p className="mt-1 text-sm font-bold text-white">
            {selected}
          </p>

          <p className="mt-1 text-xs text-green-300">
            {lgaData[selected]?.cases ?? 0} active cases
          </p>
        </div>
      )}
    </div>
  );
}