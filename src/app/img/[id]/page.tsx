import FullPageImageView from "~/components/full-image-page";

export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const asNumber = Number(photoId);
  if (isNaN(asNumber)) {
    return <div>Invalid photo ID</div>;
  }
  return <FullPageImageView id={asNumber} />
}