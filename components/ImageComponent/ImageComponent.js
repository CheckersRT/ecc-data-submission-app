import Image from "next/image";

export default function ImageComponent({ image, className }) {
  const imageLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  return (
    <div className={className}>
      <Image
        loader={imageLoader}
        src={image.src}
        alt="uploaded images"
        // fill={true}
        width={150}
        height={150}
        // priority
      />
    </div>
  );
}
