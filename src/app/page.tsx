import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany(
     {orderBy: (model, { desc }) => desc(model.id)},
     
  )
  return (
      <div className="flex flex-wrap gap-4">
        {
          images.map((image) => (
            <div key={image.id} className="w-48 flex flex-col">
              <img src={image.url} alt="" className="w-full h-48 object-cover" />
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
