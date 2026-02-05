// @modal/(.)[id]/page.tsx
import Image from "next/image";
import wondersImages, { WonderImage } from "../@modal/wonders";

export default async function PhotoModal({ 
  params 
}: { 
  params: Promise<{ id: string }> // Next.js 15/16 এ এটা Promise
}) {
  const { id } = await params; // await করা জরুরি
  
  const photo = wondersImages.find((p) => p.id === id);

  // যদি ফটো খুঁজে না পায় তবে এরর হ্যান্ডেল করো
  if (!photo) {
    return <div className="p-10 text-center">Photo not found! (ID: {id})</div>;
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <Image
          src={photo.src}
          alt={photo.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-2">{photo.name}</h2>
        <p className="text-gray-600 mb-1">
          <strong>Photographer:</strong> {photo.photographer}
        </p>
        <p className="text-gray-600">
          <strong>Location:</strong> {photo.location}
        </p>
      </div>
    </div>
  );
}
