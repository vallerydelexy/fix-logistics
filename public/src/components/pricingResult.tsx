import { useRecoilState } from "recoil";
import { resultState } from "../atom/ResultAtom";
import { requestState } from "../atom/requestAtom";

export default function PricingResult() {
  const [result, setResult] = useRecoilState(resultState);
  const [request, setRequest] = useRecoilState(requestState)
  const { data } = result;
  function uangIndo(input){
    return `Rp. ${input.toLocaleString("en-ID")},-`
  }
  return (
    <section>
      {data &&
        data.map((item, index) => {
          return <div key={index}>            
            <p><span>Tarif: </span><span>{uangIndo(item.attributes.harga * request.weight)}</span></p>
            <p><span>Dikirim dari: </span><span>{request.asal}</span></p>
            <p><span>Tujuan: </span><span>{request.tujuan}</span></p>
            <p><span>Tipe tarif: </span><span>{request.type =="kilogram"?`per ${item.attributes.type}`:item.attributes.type}</span></p>
            {request.type == "chartered" && <p><span>Tipe kendaraan: </span><span>{item.attributes.vehicle.data.attributes.name}</span></p> }
            </div>;
        })}

        {data?.length == 0 && `pengiriman dari ${request.asal} ke ${request.tujuan} dengan tarif ${request.type=="kilogram"?"per":""} ${request.type} belum tersedia`}
    </section>
  );
}
