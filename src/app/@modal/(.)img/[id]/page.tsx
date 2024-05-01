import { getImage } from "~/server/queries";
import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const asNumber = Number(photoId);
  if (isNaN(asNumber)) {
    return <div>Invalid photo ID</div>;
  }
  return (
    <Modal>
     <FullPageImageView id={asNumber} />
    </Modal>
  );
}