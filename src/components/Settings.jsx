import { Box, Flex } from '@chakra-ui/react';
import { IoIosSettings } from 'react-icons/io';
import SettingsModal from './SettingsModal';

const Settings = () => {
  return (
    <SettingsModal>
      <Flex
        position='absolute'
        bottom='10%'
        right='10%'
        h='60px'
        w='60px'
        borderRadius='50%'
        bg='#fff'
        justifyContent='center'
        alignItems='center'
        boxShadow='md'
        cursor='pointer'
      >
        <Box
          as={IoIosSettings}
          fontSize='30px'
          transition='300ms'
          _hover={{ transform: 'rotate(180deg)' }}
        />
      </Flex>
    </SettingsModal>
  );
};

export default Settings;
