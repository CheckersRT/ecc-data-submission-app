import Image from "next/image";

export default function ImageComponent({ image }) {
  return (
    <div>
      <Image src={image.src} alt="uploaded images" width={100} height={150} priority/>
    </div>
  );
}
