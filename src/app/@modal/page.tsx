import Image from "next/image";
import wondersImages, { WonderImage } from "./wonders";

export default function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

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
        <p className="text-gray-600 mb-1"><strong>Photographer:</strong> {photo.photographer}</p>
        <p className="text-gray-600"><strong>Location:</strong> {photo.location}</p>
      </div>
    </div>
  );
}