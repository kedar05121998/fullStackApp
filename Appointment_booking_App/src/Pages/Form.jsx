import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  Input,
  useToast,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

function Form() {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    date: "",
    appTime: "",
  };

  const [formstate, setFormstate] = useState(initialState);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const val = value;

    setFormstate({
      ...formstate,
      [name]: val,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    axios({
      method: "POST",
      url: `https://backend-app-tjba.onrender.com/user`,
      data: formstate,
    });

    toast({
      title: "Appointment Book Successfully",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
    setTimeout(() => {}, 1000);

    onClose();
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <h3>
        Welcome to our appointment booking system, where you can easily schedule
        your medical appointments at our clinic.<br></br>
        Our mission is to provide you with fast and convenient access to the
        healthcare services you need. we are dedicated to providing our patients
        with the highest quality of care.
        <br></br> Our team of experienced medical professionals is here to help
        you every step of the way,
        <br></br>from booking your appointment to receiving the care you need.
        <br></br>
        <b>
          We look forward to serving you and your healthcare needs. Book your
          appointment today!
        </b>
      </h3>
      <Button onClick={onOpen} colorScheme="telegram" mr="25">
        Book Appointment
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="teal">Book Appointment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={(e) => handleSubmit(e)}>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Name"
                  borderBottom="2px solid orange"
                  value={formstate.name}
                  onChange={handleChange}
                  name="name"
                />

                <Input
                  mt="5"
                  placeholder="Email"
                  borderBottom="2px solid orange"
                  value={formstate.email}
                  onChange={handleChange}
                  type="text"
                  name="email"
                />

                <Input
                  mt="5"
                  placeholder="Contact number"
                  borderBottom="2px solid orange"
                  value={formstate.phone}
                  onChange={handleChange}
                  type="number"
                  name="phone"
                />

                <Input
                  mt="5"
                  placeholder="Appintment Date"
                  borderBottom="2px solid orange"
                  value={formstate.date}
                  onChange={handleChange}
                  type="date"
                  name="date"
                />

                <Input
                  mt="5"
                  placeholder="Appointment Time"
                  borderBottom="2px solid orange"
                  value={formstate.appTime}
                  onChange={handleChange}
                  type="time"
                  name="appTime"
                />

                <Flex justifyContent="space-between">
                  <Input
                    type="submit"
                    _hover={{ cursor: "pointer" }}
                    bg="twitter.600"
                    mt="10"
                    color="white"
                    placeholder="Submit form"
                  />
                 
                </Flex>
              </FormControl>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default Form;
