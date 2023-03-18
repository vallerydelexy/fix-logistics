export default function ImageWithShadow(props:any) {
    const {src} = props
  return (
    <div className="w-96 bg-base-100">
      <figure>
        <img
          src={src} className="shadow-xl"
        />
      </figure>
    </div>
  );
}
