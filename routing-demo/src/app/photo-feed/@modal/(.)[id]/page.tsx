import Image from "next/image";
import wondersImages from "../wonders";

export default async function PhotoModal({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const photo = wondersImages.find((p) => p.id === id);

  if (!photo) return null;

  return (
    // ১. ব্যাকড্রপ (কালো ঝাপসা ব্যাকগ্রাউন্ড)
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      
      {/* ২. আসল ডায়ালগ বক্স */}
      <div className="bg-white rounded-2xl max-w-5xl w-full overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {/* ৩. বাম পাশে ইমেজ */}
        <div className="w-full md:w-2/3 bg-gray-100 flex items-center justify-center">
          <Image
            src={photo.src}
            alt={photo.name}
            className="w-full h-auto max-h-[85vh] object-contain"
          />
        </div>

        {/* ৪. ডান পাশে ইনফরমেশন */}
        <div className="p-8 w-full md:w-1/3 flex flex-col justify-center relative">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 border-b pb-2">
            {photo.name}
          </h2>
          
          <div className="space-y-4 text-gray-700">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Location</p>
              <p className="text-lg font-medium">{photo.location}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Photographer</p>
              <p className="text-lg font-medium italic">{photo.photographer}</p>
            </div>
          </div>

          {/* ৫. ক্লোজ মেসেজ (ইউজার বাইরে ক্লিক করলে বা ব্যাক করলে চলে যাবে) */}
          <p className="absolute bottom-4 right-4 text-xs text-gray-300">
            Press back or click outside to close
          </p>
        </div>
      </div>
    </div>
  );
}