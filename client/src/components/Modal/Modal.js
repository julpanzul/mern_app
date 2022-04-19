import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';

function MyModal({ isOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl id="projectName" isRequired>
                <FormLabel>Project Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="category" isRequired>
                <FormLabel>Category</FormLabel>
                <Input type="category" />
              </FormControl>
              <FormControl id="description">
                <FormLabel>Description</FormLabel>
                <Input type="description" />
              </FormControl>
              <FormControl id="team">
                <FormLabel>Team</FormLabel>
                <Input type="team" />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Create Project
                </Button>
              </Stack>
            </Stack>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default MyModal;
