import Image from "next/image";

export default function ImageComponent({ image }) {
  // const imageLoader = ({ src, width }) => {
  //   return `${src}?w=${width}`;
  // };

  const imageStyle = {
    objectFit: "contain"
  }

  console.log("image.src: ", image)

  return (
      <Image
        // loader={imageLoader}
        src={image.url}
        alt="uploaded images"
        width={100}
        height={150}
      />
  );
}
