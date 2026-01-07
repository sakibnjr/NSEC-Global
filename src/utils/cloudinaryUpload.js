// Cloudinary upload utility for CV files
// Uses unsigned upload preset for browser-side uploads

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export const uploadToCloudinary = async (file) => {
  if (!file) {
    throw new Error("No file provided");
  }

  if (!CLOUD_NAME || !UPLOAD_PRESET) {
    throw new Error("Cloudinary credentials not configured");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  formData.append("folder", "nsec-cvs"); // Store CVs in a folder

  try {
    // Use 'raw' endpoint for documents (PDF, DOC, DOCX)
    // This ensures files are stored as downloadable documents, not images
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/raw/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Upload failed");
    }

    const data = await response.json();

    // For raw files, secure_url is directly downloadable
    // The URL will automatically download when clicked
    return {
      url: data.secure_url,
      downloadUrl: data.secure_url, // Raw files download directly
      publicId: data.public_id,
      fileName: file.name,
      format: data.format || file.name.split(".").pop(),
      size: data.bytes,
    };
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error;
  }
};
