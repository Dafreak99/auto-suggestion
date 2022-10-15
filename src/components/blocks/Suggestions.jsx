import { Box, List, ListItem } from '@chakra-ui/react';

const Suggestions = ({ data }) => {
  return (
    <Box>
      <Box textTransform='uppercase' fontSize='sm' bg='gray.300' p='10px'>
        Suggestions
      </Box>
      <List>
        {data.map(({ term, url }) => (
          <ListItem
            href={url}
            target='_blank'
            display='block'
            as='a'
            cursor='pointer'
            p='5px 10px'
            transition='300ms'
            key={term}
            _hover={{ background: 'gray.100' }}
          >
            {term}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Suggestions;
