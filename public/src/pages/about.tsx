import Carousel from "../components/carousel"

export default function About() {
  return (
    <main className="min-h-screen">
      <div className="pt-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-3xl font-bold md:text-4xl">Fix Logistics</h1>

          <p className="mt-6">
            adalah perusahaan yang bergerak dibidang jasa pengiriman barang yang
            memiliki team yang profesional, berpengalaman dan memiliki armada
            sendiri, dan memberikan solusi kepada anda/customer untuk
            mengirimkan barang dengan berbagai kebutuhan
          </p>
        </div>
        
        <div className="pt-8 mx-auto flex flex-col max-w-lg gap-8">
          <div className="">
            <h2 className="text-2xl font-bold">Visi</h2>
            <p className="mt-1">
              menjadi penyedia jasa logistic yang terdepan dan percaya untuk
              dapat memberikan dampak positif bagi kehidupan semua orang
            </p>
          </div>
          <div className="">
            <h2 className="text-2xl font-bold">Misi</h2>
            <ul className="list-disc mt-1">
                <li>akan selalu memprioritaskan kepuasan pelanggan kami</li>
                <li>akan memberikan layanan pengiriman yang cepat dan mudah</li>
                <li>akan terus memperluas cakupan wilayah di seluruh indonesia</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
