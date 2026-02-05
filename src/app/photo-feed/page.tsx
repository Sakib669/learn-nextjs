import Link from "next/link";
import Image from "next/image";
import wondersImages from "./@modal/wonders"; // পাথটি খেয়াল রেখো

export default function PhotoFeedPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold my-8">
        New 7 Wonders of the World
      </h1>
      
      {/* গ্রিড লেআউট তৈরি করা হয়েছে সব ছবি দেখানোর জন্য */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wondersImages.map((photo) => (
          <Link 
            key={photo.id} 
            href={`/photo-feed/${photo.id}`}
            className="group block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative aspect-square">
              <Image
                src={photo.src}
                alt={photo.name}
                fill // প্যারেন্ট ডিভ অনুযায়ী ইমেজ ফিট করার জন্য
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* ইমেজের ওপর নাম দেখানোর জন্য একটি ওভারলে */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-semibold text-lg">{photo.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}