import {
  Box,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import Settings from '../src/components/Settings';
import './App.css';
import AutoSuggestion from './components/AutoSuggestion';

const App = () => {
  return (
    <Flex
      className='App'
      h='100vh'
      w='100vw'
      justifyContent='center'
      alignItems='flex-start'
      bg='teal.400'
    >
      <Box
        w='xl'
        bg='white'
        p='3rem 4rem'
        borderRadius='10px'
        shadow='md'
        mt='10rem'
      >
        <Heading fontSize='xl' mb='2rem' textAlign='center'>
          Auto Suggestion
        </Heading>
        <AutoSuggestion>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<Icon as={IoMdSearch} fontSize='md' />}
            />
            <Input placeholder='Enter the key word' />
          </InputGroup>
        </AutoSuggestion>
      </Box>

      <Settings />
    </Flex>
  );
};

export default App;
