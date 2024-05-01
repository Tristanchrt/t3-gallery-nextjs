import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
 
  const images = await getMyImages();

  return (
      <div className="flex flex-wrap gap-4 justify-center">
        {
          images.map((image) => (
            <div key={image.id} className="w-48 h-48 flex flex-col justify-center">
              <Image src={image.url} alt={image.name} width={192} height={192}/>
              <div>{image.name}</div>
            </div>
          ))
        }
      </div> 
  )
}

export default async function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        <SignedOut>
          <div className="h-full w-full text-2xl text-center">
            Please sign in to view images
            </div>
          </SignedOut>
        <SignedIn>
          <Images/>
        </SignedIn>
        </div>
    </main>
  );
}
