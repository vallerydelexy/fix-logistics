import { useState } from "react";
import PricingTab from "./pricingTab";
import TrackingTab from "./trackingTab";
import LocationTab from "./locationTab";
import ResultSection from "./resultSection";

export default function FormTab() {
  const [tab, setTab] = useState("pricing");

  return (
    <section className="p-4 flex flex-col md:flex-row justify-center gap-x-4">
      <div className="flex flex-col">
        <div className="tabs z-10 -mb-px mx-auto">
          <button
            onClick={() => {
              setTab("pricing");
            }}
            className={`tab tab-lifted ${
              tab == "pricing" && "tab-active [--tab-bg:hsl(var(--b2))]"
            }`}
          >
            Cek Tarif
          </button>
          <button
            onClick={() => {
              setTab("tracking");
            }}
            className={`tab tab-lifted ${
              tab == "tracking" && "tab-active [--tab-bg:hsl(var(--b2))]"
            }`}
          >
            Cek Pengiriman
          </button>
          <button
            onClick={() => {
              setTab("location");
            }}
            className={`tab tab-lifted ${
              tab == "location" && "tab-active [--tab-bg:hsl(var(--b2))]"
            }`}
          >
            Lokasi cebang
          </button>
        </div>

        <div className="border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[18rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 border bg-cover bg-top p-4">
          {tab == "pricing" && <PricingTab />}
          {tab == "tracking" && <TrackingTab />}
          {tab == "location" && <LocationTab />}
        </div>
      </div>

      <div className="my-4 bg-base-300 rounded-lg p-4 min-w-[50%]">
      <ResultSection tab={tab} />
      </div>
    </section>
  );
}
