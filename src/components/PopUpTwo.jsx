import { Modal, ModalContent, ModalBody, Button, useDisclosure } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import NewStoryAlert from "./NewStoryAlert";

export default function PopUpTwo() {
  const { isOpen, onOpen, onClose } = useDisclosure(); 
  const navigate = useNavigate();
  
  return (
    <>
      <Button 
        color="warning" 
        radius="full" 
        size="lg" 
        onPress={onOpen} 
        className="!px-8 !py-4 !bg-yellow !text-#151B28 !rounded-full !hover:bg-blue-600 !shadow-md"
      >
        Tell another story
      </Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onClose} 
        isDismissable={false} 
        isKeyboardDismissDisabled={false}
        classNames={{base:'bg-[#FEF8EB]'}}
      >
        <ModalContent>
          <ModalBody>
            <NewStoryAlert />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}