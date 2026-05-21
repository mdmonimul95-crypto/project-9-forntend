"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export function DeleteAlert({ explore }) {

  const router = useRouter();

  const { _id, carName } = explore;

  const handleDelete = async () => {

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/explore/${_id}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();

    console.log(data);

    router.push("/explore-cars");
  };

  return (
    <AlertDialog>
      <Button className="text-red-500 rounded-none" variant="outline">
        <TrashBin /> Delete
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog>
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                Delete <strong>{carName}</strong> ?
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close">Cancel</Button>

              <Button
                onClick={handleDelete}
                slot="close"
                variant="danger"
              >
                Delete
              </Button>
            </AlertDialog.Footer>

          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}