import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

export const getTimeAgo = (publishedAt) => {
  const publishedDate = new Date(publishedAt);
  const now = new Date();

  const diffMs = now - publishedDate;
  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30.44);
  const years = Math.floor(days / 365.25);

  if (seconds < 60) return `${seconds}s ago`;
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  if (weeks < 4) return `${weeks}w ago`;
  if (months < 12) return `${months}mo ago`;
  return `${years}y ago`;
};

export const captureImage = async () => {
  try {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      quality: 90,
    });
    let base64Image = null;

    if (photo?.base64String) {
      base64Image = `data:image/jpeg;base64,${photo.base64String}`;
    }

    return base64Image;
  } catch (error) {
    console.error("Camera error:", error);
  }
};
