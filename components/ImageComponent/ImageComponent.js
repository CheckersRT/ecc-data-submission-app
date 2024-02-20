import Image from "next/image";
import styles from "./ImageComponent.module.css"

export default function ImageComponent({ image }) {
  const imageLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  const imageStyle = {
    objectFit: "contain"
  }

  return (
    <div className={styles.imageContainer}> {/* Apply styles to the container */}
      <Image
        loader={imageLoader}
        src={image.src}
        alt="uploaded images"
        width={100}
        height={150}
      />
    </div>
  );
}
