import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const asNumber = Number(photoId);
  if (isNaN(asNumber)) {
    return <div>Invalid photo ID</div>;
  }
  const image = await getImage(asNumber);
  return <div><img src={image.url} className="w-96"/> </div>;
}