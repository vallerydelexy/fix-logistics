import Select from "react-select";
import { useLocalStorage } from "usehooks-ts";
import axios from "axios";
import { useEffect, useState } from "react";
import qs from "qs";
import { useRecoilState } from "recoil";
import { resultState } from "../atom/ResultAtom";
import { requestState } from "../atom/requestAtom";

export default function PricingTab() {
  const [formRequest, setFormRequest] = useRecoilState(requestState)
  const [theme, setTheme] = useLocalStorage("theme", "business");
  const [tarif, setTarifs] = useRecoilState(resultState)
  const [isFormValid, setIsFormValid] = useState(false);
  const [provinsi, setProvinsi] = useState([]);
  const [formCekTarif, setFormCekTarif] = useState({});
  async function getProvinsi() {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/provinsis`);
    setProvinsi(res.data.data);
  }
  async function getTarifs({ asal, tujuan, type }) {
    const query = qs.stringify(
      {
        filters: {
          asal: {
            nama: {
              $eq: asal,
            },
          },
          tujuan: {
            nama: {
              $eq: tujuan
            },
          },
          type: {
            $eq: type
          }
        },
        populate: "*"
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );
    
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/tarifs?${query}`
    );
    setTarifs(res.data);
    console.log(`${process.env.NEXT_PUBLIC_API}/tarifs?${query}`)
  }

  useEffect(() => {
    getProvinsi();
  }, []);

  const availableProvince = provinsi?.map((item) => ({
    label: item?.attributes.nama,
    value: item?.attributes.nama,
  }));
  const tarifType = [
    { label: "kiloan", value: "kilogram" },
    { label: "chartered", value: "chartered" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: theme == "terang" ? "#e5e7eb" : "#1f2937",
    }),
    option: (provided) => ({
      ...provided,
      color: "#1f2937",
    }),
  };

  function handleValueChange(eventOrValue, { name } = {}) {
    const value = eventOrValue.target
      ? eventOrValue.target.value
      : eventOrValue.value;
    setFormCekTarif((prevValues) => ({ ...prevValues, [name]: value }));
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!formCekTarif.asal || !formCekTarif.tujuan) {
      alert("Asal dan tujuan harus diisi!");
      return;
    }

    // Form is valid, proceed with the rest of the logic
    setIsFormValid(true);
    setFormRequest({
      asal: formCekTarif.asal,
      tujuan: formCekTarif.tujuan,
      type: formCekTarif.tipe || "kilogram",
      weight: formCekTarif.weight || 1
    })
    getTarifs({
      asal: formCekTarif.asal,
      tujuan: formCekTarif.tujuan,
      type: formCekTarif.tipe || "kilogram",
    });
  }
  return (
    <section className="flex flex-col">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Jenis tarif</span>
        </label>
        <Select
          name="tipe"
          styles={customStyles}
          className="select-bordered bg-base-100 text-base-content"
          options={tarifType}
          onChange={(selectedOption, action) =>
            handleValueChange(selectedOption, { name: action.name })
          }
          placeholder="kiloan"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Dari</span>
        </label>
        <Select
          name="asal"
          styles={customStyles}
          className="select-bordered bg-base-100 text-base-content"
          options={availableProvince}
          onChange={(selectedOption, action) =>
            handleValueChange(selectedOption, { name: action.name })
          }
          placeholder="asal provinsi"
        />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Ke</span>
        </label>
        <Select
          name="tujuan"
          styles={customStyles}
          className="select-bordered bg-base-100 text-base-content"
          options={availableProvince}
          onChange={(selectedOption, action) =>
            handleValueChange(selectedOption, { name: action.name })
          }
          placeholder="tujuan provinsi"
        />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Berat</span>
          <span className="label-text-alt">Kilogram</span>
        </label>
        <input
          name="weight"
          type="number"
          defaultValue={1}
          step="1"
          min="1"
          className="input input-bordered w-full max-w-xs"
          onChange={(event) =>
            handleValueChange(event, { name: event.target.name })
          }
        />
      </div>

      <div className="form-control w-full max-w-xs">
        <button
          className="bg-primary text-secondary p-2 rounded"
          onClick={handleFormSubmit}
        >
          Cek sekarang
        </button>
      </div>
    </section>
  );
}
