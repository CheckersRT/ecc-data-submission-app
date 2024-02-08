import Image from "next/image";

export default function ImageComponent({ image }) {
  const imageLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  const imageStyle = {
    objectFit: "contain"
  }

  return (
    <div>
      <Image
        loader={imageLoader}
        src={image.src}
        alt="uploaded images"
        // fill={true}
        width={100}
        height={150}
        style={imageStyle}        // priority
      />
    </div>
  );
}
