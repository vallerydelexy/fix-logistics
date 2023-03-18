import LocationResult from "./locationResult";

export default function ResultSection(props: any) {
  const { tab } = props;
  return <section>
    {tab == "location" && <LocationResult containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}/>}
  {tab=="pricing" && "pricing"}
  {tab == "tracking" && "tracking"}
  </section>;
}
