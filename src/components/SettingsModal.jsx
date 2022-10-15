import {
  Alert,
  AlertIcon,
  Checkbox,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBlocks, updateKeywordLength } from '../store/features';

/**
 *
 * @children Pass in the button
 */

const SettingsModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { blocks, keywordLength } = useSelector((state) => state);

  const dispatch = useDispatch();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const handleOnChange = (e) => {
    dispatch(updateKeywordLength(+e.target.value));
  };

  const handleBlockChange = (e, index) => {
    dispatch(updateBlocks({ index, checked: e.target.checked }));
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onClick: onOpen });
    }
    return child;
  });

  return (
    <>
      {/* Button */}
      {childrenWithProps}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent as='form'>
          <ModalHeader textAlign='center'>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Heading fontSize='md' mb='2'>
              Three blocks
            </Heading>
            <Alert fontSize='sm' mb='2'>
              <AlertIcon />
              Turn on/off the display of each block in the Suggestion result
            </Alert>

            <Stack spacing={2} mb='2rem' direction='column'>
              {blocks.map(({ value, show }, index) => (
                <Checkbox
                  key={value}
                  size='sm'
                  onChange={(e) => handleBlockChange(e, index)}
                  defaultChecked={show}
                >
                  {value}
                </Checkbox>
              ))}
            </Stack>

            <Heading fontSize='md' mb='2' mt='4'>
              Keyword Length
            </Heading>
            <Alert fontSize='sm' mb='2'>
              <AlertIcon />
              Change the number of character that makes the Suggestion display
              when typing
            </Alert>
            <Input
              type='number'
              min='0'
              max='10'
              defaultValue={keywordLength}
              onChange={handleOnChange}
              mb='2rem'
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SettingsModal;
