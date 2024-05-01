import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/b7d70031-7688-414c-9260-65b4dcc444e2-g91b3o.jpg",
  "https://utfs.io/f/0b85cfa5-1327-4f7b-bef5-864757aab3e0-n3cql3.jpg",
  "https://utfs.io/f/930386b7-bda4-4a93-a63f-2d43031224fd-gon6qa.webp",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));


export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          [...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} alt="" className="w-full h-48 object-cover" />
            </div>
          ))
        }
        </div>
    </main>
  );
}
