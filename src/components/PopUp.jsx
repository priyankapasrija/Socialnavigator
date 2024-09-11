import { Modal, ModalContent, ModalBody, Button, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectionOne from "./SelectionOne";
import SelectionTwo from "./SelectionTwo";
import SelectionThree from "./SelectionThree";
import WelcomeToSN from "./WelcomeToSN";

export default function PopUp() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [step, setStep] = useState(0); 
  const navigate = useNavigate();

  const handleNavigate = () => {
    onOpenChange(false); 
    navigate("/story-submission"); 
  };

  const renderStepComponent = () => {
    switch (step) {
      case 0:
        return <WelcomeToSN onNext={() => setStep(1)} />; 
      case 1:
        return <SelectionOne onNext={() => setStep(2)} />; 
      case 2:
        return <SelectionTwo onNext={() => setStep(3)} />; 
      case 3:
        return <SelectionThree onComplete={handleNavigate} />; 
      default:
        return <WelcomeToSN onNext={() => setStep(1)} />; 
    }
  };

  return (
    <>
      <Button color="warning" radius="full" size="lg" onPress={onOpen} className="!px-8 !py-4 !bg-yellow !text-#151B28 !rounded-full !hover:bg-blue-600 !shadow-md">
       Try It Now
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={false}>
        <ModalContent>
          {() => (
            <>
              <ModalBody>{renderStepComponent()}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}