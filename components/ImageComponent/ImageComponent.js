import Image from "next/image";

export default function ImageComponent({ image }) {
  return (
    <div>
      <Image src={image.src} alt="uploaded images" width={50} height={90} priority/>
    </div>
  );
}
