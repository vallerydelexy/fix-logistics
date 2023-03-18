import ImageWithShadow from "../components/imagewithshadow";

const images = [
  "/images/WhatsApp Image 2023-03-01 at 11.08.00.jpg",
  "/images/WhatsApp Image 2023-03-01 at 11.08.58.jpg",
  "/images/WhatsApp Image 2023-03-01 at 11.08.59.jpg",
  "/images/WhatsApp Image 2023-03-01 at 11.13.20.jpg",
  "/images/WhatsApp Image 2023-03-01 at 11.13.21.jpg",
  "/images/WhatsApp Image 2023-03-01 at 11.13.22.jpg",
  "/images/WhatsApp Image 2023-03-01 at 11.13.23.jpg",
  "/images/WhatsApp Image 2023-03-01 at 11.13.24.jpg",
  "/images/WhatsApp Image 2023-03-01 at 11.13.25.jpg",
  "/images/WhatsApp Image 2023-03-01 at 11.13.27.jpg",
  "/images/WhatsApp Image 2023-03-01 at 11.13.28.jpg",
  "/images/WhatsApp Image 2023-03-01 at 11.13.29.jpg",
  "/images/WhatsApp Image 2023-03-01 at 11.13.26.jpg",
  "/images/WhatsApp Image 2023-03-01 at 11.13.30.jpg",
  "/images/WhatsApp Image 2023-03-01 at 11.13.31.jpg",
  "/images/WhatsApp Image 2023-03-01 at 11.13.32.jpg",
  "/images/WhatsApp Image 2023-03-01 at 11.13.33.jpg",
  "/images/WhatsApp Image 2023-03-01 at 11.13.34.jpg",
  "/images/WhatsApp Image 2023-03-01 at 11.14.38.jpg",
  "/images/WhatsApp Image 2023-03-01 at 11.14.40.jpg",
];

export default function Gallery() {
  return (
    <main className="min-h-screen py-4">
        <div className="py-8 grid grid-cols-3 gap-4 place-content-center">
        {images.map((item) => (
        <ImageWithShadow key={item} src={item} />
      ))}
        </div>

    </main>
  );
}
