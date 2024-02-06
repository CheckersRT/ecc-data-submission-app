import useSWR from "swr";
import ImageComponent from "../ImageComponent/ImageComponent";

export default function ImageList({ params }) {
    const {data: images, error, isLoading} = useSWR("/api/image")

    console.log(images, error, isLoading)
  return (
    <div>
      {images && images.map((image) => (
        <ImageComponent key={image._id} image={image}/>
      ))}
    </div>
  );
}
