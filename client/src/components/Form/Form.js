import { Button, Flex, Icon, Text, useDisclosure } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import React from 'react';
import MyModal from '../Modal/Modal';

const Form = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        p="0px"
        bg="transparent"
        color="gray.500"
        border="1px solid lightgray"
        borderRadius="15px"
        minHeight={{ sm: '200px' }}
      >
        <Flex direction="column" justifyContent="center" align="center">
          <Icon as={FaPlus} fontSize="lg" mb="12px" />
          <Text fontSize="lg" fontWeight="bold">
            Create a New Project
          </Text>
        </Flex>
      </Button>
      <MyModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Form;
