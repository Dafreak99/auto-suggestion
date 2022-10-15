import { Box, List, ListItem } from '@chakra-ui/react';

const Collections = ({ data }) => {
  return (
    <Box>
      <Box textTransform='uppercase' fontSize='sm' bg='gray.300' p='10px'>
        Collections
      </Box>
      <List spacing={3}>
        {data.map(({ id, title, url }) => (
          <ListItem
            href={url}
            target='_blank'
            display='block'
            as='a'
            cursor='pointer'
            p='5px 10px'
            transition='300ms'
            key={id}
            _hover={{ background: 'gray.100' }}
          >
            {title}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Collections;
