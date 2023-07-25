"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../modal";

export const StoreModal = () => {
  const StoreModal = useStoreModal();
  
  return (
    <Modal
      title="text"
      description="ag"
      onClose={StoreModal.onClose}
      isOpen={StoreModal.isOpen}
    >
      xfdsafdfsasdf
    </Modal>
  );
};
