// import Image from "next/image";

export default function ImageComponent({ image }) {
  return (
    <div>
      <img
        src={image.src}
        alt="uploaded images"
        // fill={true}
        // width={150}
        // height={150}
        // priority
      />
    </div>
  );
}
