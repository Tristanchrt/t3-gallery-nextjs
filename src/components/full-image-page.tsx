import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "./ui/button";

export default async function FullPageImageView(props: {id: number}) {
  const image = await getImage(props.id);
  const uploaderInfo = await clerkClient.users.getUser(image.userId!);
  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center text-white dark bg-black">
      <div className="flex-shrink flex-grow">
        <img src={image.url} className="object-contain" alt={image.name} />
      </div>
      <div className="flex h-full w-56 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-xl">{image.name}</div>

        <div className="flex flex-col p-2">
          <span>
            Uploaded by: {uploaderInfo.fullName}
          </span>
        </div>
        <div className="flex flex-col p-2">
          <span>
            Created by: {new Date(image.createdAt).toLocaleDateString()}
          </span>
        </div>
        <div className="flex flex-col p-2">
          <form action={ async () => {
            "use server";
              await deleteImage(image.id);
          }}>
          <Button variant="destructive">Delete</Button>
          </form>
        </div>
      </div>
    </div>
  );
}