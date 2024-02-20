import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "dm1n4kfee",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export default async function uploadToCloudinary(images) {
  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    resource_type: "image",
  };

  try {
    // Upload the track
    const result = await cloudinary.v2.uploader.upload(images, options);
    console.log("Result cloudinary upload: ", result);
    return result;
  } catch (error) {
    console.error("Error from uploadToCloudinary", error);
    return "No such file or directory";
  }
}
