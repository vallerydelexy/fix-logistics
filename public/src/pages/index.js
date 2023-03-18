import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Carousel from "../components/carousel";
import { themeChange } from "theme-change";
import { useEffect } from "react";
import FormTab from "../components/FormTabs";
import { signOut, useSession } from "next-auth/react";
import axios from "axios";
import MixueLogo from "../components/mixueLogo";

export default function Home({ tarifs }) {
  return (
    <div>
      <Head>
        <title>Fix Logistics</title>
        <meta name="description" content="Fix Logistic" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`} async /> */}
      </Head>
      <main>
        <Carousel />
        <div className="container mx-auto px-6 py-16 pt-28 text-center">
          <div className="mx-auto max-w-lg">
            <h1 className="text-3xl font-bold md:text-4xl">Fix Logistics</h1>

            <p className="mt-6">
              adalah perusahaan yang bergerak dibidang jasa pengiriman barang
              yang memiliki team yang profesional, berpengalaman dan memiliki
              armada sendiri, dan memberikan solusi kepada anda/customer untuk
              mengirimkan barang dengan berbagai kebutuhan
            </p>
          </div>

          <div className="mx-auto mt-28 max-w-screen-xl flex flex-col gap-y-4">
            <h4 className="text-2xl md:text-2xl">Client kami:</h4>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-2">
              <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <img className="w-1/2 mx-auto" src="/images/pelindo.png" />
              </div>

              <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <img className="w-1/2 mx-auto" src="/images/mixue.png" />
              </div>
            </div>
          </div>
        </div>
        <FormTab />
      </main>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  // const response = await axios.get(`${process.env.API}/tarifs`)
  console.log(`${process.env.API}/tarifs`);
  // const tarifs = response.data
  return {
    props: { tarifs: null }, // will be passed to the page component as props
  };
}
