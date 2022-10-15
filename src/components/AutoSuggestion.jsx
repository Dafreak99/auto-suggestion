import { Alert, AlertIcon, Box } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDebounce } from '../hooks/useDebounce';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { useSearch } from '../hooks/useSearch';
import Collections from './blocks/Collections';
import Products from './blocks/Products';
import Suggestions from './blocks/Suggestions';

const AutoSuggestion = ({ children }) => {
  const [keyword, setKeyword] = useState('');
  const { keywordLength } = useSelector((state) => state);
  const debouncedKeyword = useDebounce(keyword, 500);
  const [outFocus, setOutFocus] = useState(false);
  const [suggestions, collections, products] = useSearch(
    debouncedKeyword.toLowerCase().length >= keywordLength && debouncedKeyword,
  );
  const { blocks } = useSelector((state) => state);
  const ref = useRef();
  const resultRef = useRef();

  const hideAll = !blocks[0].show && !blocks[1].show && !blocks[2].show;

  useOnClickOutside(ref, () => setOutFocus(true), resultRef);
  const handleOnChange = (e) => {
    setKeyword(e.target.value);
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        onChange: handleOnChange,
        ref,
        onClick: () => setOutFocus(false),
      });
    }
    return child;
  });

  const shouldShowResult = () => {
    return (
      debouncedKeyword?.toLowerCase().length >= keywordLength &&
      !outFocus &&
      (suggestions.length > 0 || collections.length > 0 || products.length > 0)
    );
  };

  return (
    <Box position='relative'>
      {childrenWithProps}

      {/* Result Panel */}
      {shouldShowResult() && (
        <Box
          position='absolute'
          top='130%'
          bg='#fff'
          shadow='md'
          w='100%'
          h={hideAll ? '80px' : '500px'}
          borderRadius='md'
          overflow='scroll'
          className='hide-scrollbar'
          ref={resultRef}
        >
          {hideAll && (
            <Box p='10px'>
              <Alert status='warning'>
                <AlertIcon />
                Enable blocks in Settings
              </Alert>
            </Box>
          )}

          {suggestions.length > 0 && blocks[0].show && (
            <Suggestions data={suggestions} />
          )}

          {collections.length > 0 && blocks[1].show && (
            <Collections data={collections} />
          )}

          {products.length > 0 && blocks[2].show && (
            <Products data={products} />
          )}
        </Box>
      )}
    </Box>
  );
};

export default AutoSuggestion;
